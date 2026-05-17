"use client";
import { useState } from "react";
import { Check, Copy, MessageCircle, Quote, ShoppingCart, X } from "lucide-react";
import { WHATSAPP_PHONE, WHATSAPP_URL } from "@/constants";

interface Plan {
  name: string;
  duration: string;
  price?: string;
  devices?: number;
  isFree?: boolean;
}

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: Plan | null;
}

export const PurchaseModal = ({
  isOpen,
  onClose,
  plan,
}: PurchaseModalProps) => {
  const [copied, setCopied] = useState(false);
  const phoneNumber = WHATSAPP_PHONE;

  if (!isOpen || !plan) return null;

  const devicesText =
    plan.name === "Essai Gratuit" || plan.devices === 1 ? "1 appareil" : `${plan.devices} appareils`;

  const message = `Bonjour, je souhaite commander :

- Abonnement : ${plan.name}
- Nombre d'appareils : ${devicesText}

Pouvez-vous m'en dire plus ?

${plan.name}
${plan.duration}
${devicesText}`;

  const whatsappUrl = `${WHATSAPP_URL}&text=${encodeURIComponent(message)}`;

  const copyNumber = () => {
    navigator.clipboard.writeText(`+${phoneNumber}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-france-950/90 backdrop-blur-md cursor-pointer animate-fade-in"
      />
      <div className="relative w-[94%] max-w-lg bg-france-900 border border-blanc-50/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-2xl overflow-hidden animate-modal-enter">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-france-400/10 blur-[80px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-rouge-400/10 blur-[80px] pointer-events-none"></div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-blanc-50/10 flex items-center justify-center text-blanc-400 hover:text-blanc-50 hover:bg-blanc-50/20 transition-all z-50 cursor-pointer active:scale-90"
        >
          <X size={18} className="pointer-events-none" aria-hidden="true" />
        </button>

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-france-400/10 flex items-center justify-center text-france-400 text-xl md:text-2xl">
              <ShoppingCart size={24} aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-blanc-50">
                Votre Commande
              </h3>
              <p className="text-blanc-400 text-xs md:text-sm">
                Vérifiez votre forfait choisi
              </p>
            </div>
          </div>

          <div className="bg-blanc-50/5 rounded-2xl md:rounded-3xl p-5 md:p-6 border border-blanc-50/10 mb-6 md:mb-8 relative group">
            <div className="absolute top-4 right-4 text-france-400 opacity-20">
              <Quote size={36} aria-hidden="true" />
            </div>
            <pre className="whitespace-pre-wrap font-sans text-blanc-300 text-xs md:text-sm leading-relaxed mb-0">
              {message}
            </pre>
          </div>

          <div className="space-y-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine w-full py-5 bg-emerald-500 hover:bg-emerald-600 text-blanc-950 font-bold rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-500/20 cursor-pointer"
            >
              <MessageCircle size={24} aria-hidden="true" />
              COMMANDER VIA WHATSAPP
            </a>

            <button
              type="button"
              onClick={copyNumber}
              className="w-full py-4 bg-blanc-50/5 hover:bg-blanc-50/10 border border-blanc-50/10 text-blanc-50 font-medium rounded-2xl flex items-center justify-center gap-3 transition-all group cursor-pointer"
            >
              <MessageCircle
                size={18}
                className={`${copied ? "text-emerald-500" : "text-blanc-400 group-hover:text-emerald-500"} transition-colors`}
                aria-hidden="true"
              />
              <span className="font-mono tracking-wider">+{phoneNumber}</span>
              <div className="ml-2 w-8 h-8 rounded-lg bg-blanc-50/5 flex items-center justify-center">
                {copied ? (
                  <Check
                    size={14}
                    className="text-emerald-500"
                    aria-hidden="true"
                  />
                ) : (
                  <Copy
                    size={14}
                    className="text-blanc-500"
                    aria-hidden="true"
                  />
                )}
              </div>
              {copied && (
                <span className="text-xs text-emerald-500 font-bold ml-2">
                  Copié !
                </span>
              )}
            </button>
          </div>

          <p className="mt-8 text-center text-blanc-500 text-xs px-4">
            Vous serez redirigé vers WhatsApp pour finaliser votre commande en
            toute sécurité avec l'un de nos conseillers.
          </p>
        </div>
      </div>
    </div>
  );
};
