import Link from "next/link";
import { FOOTER_PAGES } from "@/constants/data";

/**
 * SEO keyword cloud rendered as glass pill links + HTML <details> disclosure.
 * Uses content-visibility: auto to defer painting until near viewport.
 */
const KeywordCloud = () => {
  return (
    <div
      className="footer-keyword-cloud mb-24 relative"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 800px" }}
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-france-700/8 blur-[120px] -z-10" />

      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 rounded-full bg-blanc-50/5 border border-blanc-50/10 text-[10px] font-black uppercase tracking-[0.2em] text-france-500 mb-4">
          Base de connaissances & Guides
        </span>
        <h2 className="text-3xl font-black text-blanc-50 tracking-tight">
          Populaires <span className="text-gradient">Sujets</span>
        </h2>
      </div>

      {/* Top Keywords - Glass Pills (first 16 visible, rest collapsed) */}
      <div className="flex gap-3 flex-wrap justify-center mb-8 max-w-6xl mx-auto px-4">
        {FOOTER_PAGES.slice(0, 16).map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className="px-4 py-2 rounded-xl bg-blanc-50/3 border border-blanc-50/10 text-xs font-bold text-blanc-300 hover:text-blanc-50 hover:bg-blanc-50/[0.08] hover:border-france-700/40 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-[color,background-color,border-color,box-shadow,transform] duration-300 cursor-pointer active:scale-95"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Collapsible remaining links — pure HTML/CSS, zero JS */}
      {FOOTER_PAGES.length > 16 && (
        <details className="group max-w-6xl mx-auto px-4 mb-16">
          <summary className="list-none text-center cursor-pointer mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blanc-50/3 border border-blanc-50/10 text-xs font-bold text-blanc-400 hover:text-blanc-50 hover:border-france-700/40 transition-all duration-300 group-open:border-france-700/40 group-open:text-france-400">
              <span className="group-open:hidden">Afficher tous les {FOOTER_PAGES.length} sujets</span>
              <span className="hidden group-open:inline">Afficher moins</span>
              <svg
                className="w-3.5 h-3.5 transition-transform duration-300 group-open:rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <div className="flex gap-x-5 gap-y-3 flex-wrap justify-center opacity-60 group-open:opacity-100 transition-opacity duration-500">
            {FOOTER_PAGES.slice(16).map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-[11px] font-medium text-blanc-500 hover:text-france-500 transition-colors whitespace-nowrap cursor-pointer hover:underline decoration-france-700/40 underline-offset-4"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </details>
      )}
    </div>
  );
};

export default KeywordCloud;
