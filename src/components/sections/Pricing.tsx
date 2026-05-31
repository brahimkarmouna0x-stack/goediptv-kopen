"use client";
import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { PRICING_DATA } from "@/constants/pricing-data";
import { ConnectionSelector } from "./pricing/ConnectionSelector";
import { PlanCard } from "./pricing/PlanCard";
import { PricingHeading } from "./pricing/PricingHeading";
import { Bolt, Gem, Star } from "lucide-react";

const PurchaseModal = dynamic(
  () => import("./pricing/PurchaseModal").then((mod) => mod.PurchaseModal),
  { ssr: false },
);

interface Plan {
  name: string;
  duration: string;
  price?: string;
  devices?: number;
  isFree?: boolean;
}

interface PricingProps {
  pillText?: string;
  title?: React.ReactNode;
  subtitle?: string;
}

const Pricing = ({ pillText, title, subtitle }: PricingProps = {}) => {
  const [connections, setConnections] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  // Ref + Effect pattern to keep latest connections value without
  // writing to ref during render (React 19 compliance).
  const connectionsRef = useRef(connections);
  useEffect(() => {
    connectionsRef.current = connections;
  }, [connections]);

  const currentPrices = PRICING_DATA[connections as keyof typeof PRICING_DATA];

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleConnectionsChange = useCallback(
    (n: number) => setConnections(n),
    [],
  );

  const handleBuy = useCallback((plan: Plan) => {
    setSelectedPlan({
      ...plan,
      devices: connectionsRef.current,
    });
    setIsModalOpen(true);
  }, []);

  const monthlyPrices = useMemo(() => {
    const calc = (price: string, months: number) => {
      const num = parseFloat(price.replace(",", "."));
      return (num / months).toLocaleString("fr-FR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    };
    return {
      halfYear: calc(currentPrices.halfYear, 6),
      yearly: calc(currentPrices.yearly, 12),
      biyearly: calc(currentPrices.biyearly, 24),
    };
  }, [currentPrices]);

  return (
    <section
      id="pricing"
      className="py-24 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 900px" }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-france-400/5 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <PricingHeading pillText={pillText} title={title} subtitle={subtitle} />

        <div className="text-center mb-16">
              <ConnectionSelector
            active={connections}
            onChange={handleConnectionsChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Free Trial */}
          <PlanCard
            name="Kostenlos Testen"
            duration="1 Stunde"
            isFree
            connections={1}
            features={[
              "Zugang zu Basissendern",
              "Kunden-Support 24/7",
              "HD & Full HD Qualität",
              "4K verfügbar",
              "Keine Kreditkarte nötig",
              "Sofortige Aktivierung",
              "Ohne Verpflichtung",
            ]}
            buttonText="1h kostenlos testen"
            onBuy={() =>
              handleBuy({
                name: "Kostenlos Testen",
                duration: "1 Stunde",
                isFree: true,
              })
            }
          />

          {/* 6 Months */}
          <PlanCard
            name="6 Monate Abo"
            duration="6 Monate"
            price={currentPrices.halfYear}
            connections={connections}
            badge={{
              icon: Bolt,
              text: "40% RABATT",
              className: "text-france-400",
            }}
            savingsLabel={`SPAREN - €${monthlyPrices.halfYear}/Monat`}
            monthlyPriceLabel={`Nur €${monthlyPrices.halfYear} pro Monat`}
            features={[
              "+140.000 Filme & Serien",
              "Kunden-Support 24/7",
              "4K, Full HD, HD & SD",
              "+31.000 IPTV-Sender",
              "Kostenlose Updates",
              "30 Tage Geld-zurück-Garantie",
            ]}
            buttonText="Jetzt starten"
            onBuy={() =>
              handleBuy({
                name: "6 MONATE ABO",
                duration: "6 Monate",
                price: currentPrices.halfYear,
              })
            }
          />

          {/* 12 Months - POPULAR */}
          <PlanCard
            name="1 Jahr Abo"
            duration="1 Jahr"
            price={currentPrices.yearly}
            isPopular
            connections={connections}
            badge={{
              icon: Star,
              text: "EMPFEHLUNG | 50% RABATT",
              className: "text-yellow-400",
            }}
            savingsLabel={`BELIEBT - €${monthlyPrices.yearly}/Monat`}
            monthlyPriceLabel={`Nur €${monthlyPrices.yearly} pro Monat`}
            features={[
              "+140.000 Filme & Serien",
              "Kunden-Support 24/7",
              "4K, Full HD, HD & SD",
              "+31.000 IPTV-Sender",
              "Kostenlose Updates",
              "30 Tage Geld-zurück-Garantie",
            ]}
            buttonText="Jetzt starten"
            onBuy={() =>
              handleBuy({
                name: "1 JAHR ABO",
                duration: "1 Jahr",
                price: currentPrices.yearly,
              })
            }
          />

          {/* 24 Months - BEST VALUE */}
          <PlanCard
            name="2 Jahre Abo"
            duration="2 Jahre"
            price={currentPrices.biyearly}
            isBestValue
            connections={connections}
            badge={{
              icon: Gem,
              text: "BESTER PREIS | 60% RABATT",
              className: "text-rouge-500",
            }}
            savingsLabel={`2 JAHRE SPAREN - €${monthlyPrices.biyearly}/Monat`}
            monthlyPriceLabel={`Nur €${monthlyPrices.biyearly} pro Monat`}
            features={[
              "+140.000 Filme & Serien",
              "VIP-Support 24/7",
              "4K, Full HD, HD & SD",
              "+31.000 IPTV-Sender",
              "Priorisierte Updates",
              "30 Tage Geld-zurück-Garantie",
            ]}
            buttonText="Jetzt starten"
            onBuy={() =>
              handleBuy({
                name: "2 JAHRE ABO",
                duration: "2 Jahre",
                price: currentPrices.biyearly,
              })
            }
          />
        </div>
      </div>

      <PurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        plan={selectedPlan}
      />
    </section>
  );
};

export default Pricing;
