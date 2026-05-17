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
            name="Essai Gratuit"
            duration="1 heure"
            isFree
            connections={1}
            features={[
              "Accès aux chaînes de base",
              "Support client 24/7",
              "Qualité HD & Full HD",
              "4K disponible",
              "Carte bancaire non requise",
              "Activation immédiate",
              "Sans engagement",
            ]}
            buttonText="Essai gratuit 1h"
            onBuy={() =>
              handleBuy({
                name: "Essai Gratuit",
                duration: "1 heure",
                isFree: true,
              })
            }
          />

          {/* 6 Months */}
          <PlanCard
            name="Abonnement 6 Mois"
            duration="6 mois"
            price={currentPrices.halfYear}
            connections={connections}
            badge={{
              icon: Bolt,
              text: "40% DE RÉDUCTION",
              className: "text-france-400",
            }}
            savingsLabel={`ÉCONOMIE - €${monthlyPrices.halfYear}/mois`}
            monthlyPriceLabel={`Seulement €${monthlyPrices.halfYear} par mois`}
            features={[
              "+140 000 Films & Séries",
              "Support client 24/7",
              "4K, Full HD, HD & SD",
              "+31 000 chaînes IPTV",
              "Mises à jour gratuites",
              "30 Jours Satisfait ou Remboursé",
            ]}
            buttonText="Commencer maintenant"
            onBuy={() =>
              handleBuy({
                name: "ABONNEMENT 6 MOIS",
                duration: "6 mois",
                price: currentPrices.halfYear,
              })
            }
          />

          {/* 12 Months - POPULAR */}
          <PlanCard
            name="Abonnement 1 An"
            duration="1 an"
            price={currentPrices.yearly}
            isPopular
            connections={connections}
            badge={{
              icon: Star,
              text: "RECOMMANDÉ | 50% DE RÉDUCTION",
              className: "text-yellow-400",
            }}
            savingsLabel={`POPULAIRE - €${monthlyPrices.yearly}/mois`}
            monthlyPriceLabel={`Seulement €${monthlyPrices.yearly} par mois`}
            features={[
              "+140 000 Films & Séries",
              "Support client 24/7",
              "4K, Full HD, HD & SD",
              "+31 000 chaînes IPTV",
              "Mises à jour gratuites",
              "30 Jours Satisfait ou Remboursé",
            ]}
            buttonText="Commencer maintenant"
            onBuy={() =>
              handleBuy({
                name: "ABONNEMENT 1 AN",
                duration: "1 an",
                price: currentPrices.yearly,
              })
            }
          />

          {/* 24 Months - BEST VALUE */}
          <PlanCard
            name="Abonnement 2 Ans"
            duration="2 ans"
            price={currentPrices.biyearly}
            isBestValue
            connections={connections}
            badge={{
              icon: Gem,
              text: "MEILLEUR RAPPORT | 60% DE RÉDUCTION",
              className: "text-rouge-500",
            }}
            savingsLabel={`ÉCONOMISEZ 2 ANS - €${monthlyPrices.biyearly}/mois`}
            monthlyPriceLabel={`Seulement €${monthlyPrices.biyearly} par mois`}
            features={[
              "+140 000 Films & Séries",
              "Support VIP 24/7",
              "4K, Full HD, HD & SD",
              "+31 000 chaînes IPTV",
              "Mises à jour prioritaires",
              "30 Jours Satisfait ou Remboursé",
            ]}
            buttonText="Commencer maintenant"
            onBuy={() =>
              handleBuy({
                name: "ABONNEMENT 2 ANS",
                duration: "2 ans",
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
