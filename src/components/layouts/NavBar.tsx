"use client";
import Link from "next/link";
import Logo from "../shared/Logo";
import { NAV_LINKS } from "@/constants/data";
import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X } from "lucide-react";

/**
 * OPTIMIZED: Replaced scroll event + offsetTop reads with IntersectionObserver.
 *
 * Previous: `window.scroll` event → `document.getElementById(id)` → read
 * `offsetTop` + `offsetHeight` for every nav link, every scroll tick (no throttle).
 *
 * Now: A single IntersectionObserver passively watches all sections.
 * Zero DOM reads in the scroll path. The browser calls us only when a
 * section enters/leaves the viewport.
 */
const NavBar = () => {
  const [activeLink, setActiveLink] = useState<string>(NAV_LINKS[0].href);
  const [menuOpen, setMenuOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const sectionLinks = NAV_LINKS.filter((l) => l.href.includes("#"));
    const visibleRatios = new Map<string, number>();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleRatios.set(entry.target.id, entry.intersectionRatio);
        });

        let bestId = "";
        let bestRatio = 0;
        visibleRatios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestRatio < 0.05) {
          if (window.scrollY < 300) setActiveLink(NAV_LINKS[0].href);
          return;
        }

        const matched = sectionLinks.find(
          (l) => l.href.split("#")[1] === bestId,
        );
        if (matched) setActiveLink(matched.href);
      },
      {
        threshold: [0, 0.1, 0.3, 0.5, 0.8, 1.0],
        rootMargin: "-80px 0px 0px 0px",
      },
    );

    sectionLinks.forEach((link) => {
      const id = link.href.split("#")[1];
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  // Keyboard focus trap when mobile menu is open
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuToggleRef.current?.focus();
        return;
      }

      if (e.key !== "Tab" || !mobileMenuRef.current) return;

      const focusableEls = mobileMenuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusableEls.length === 0) return;

      const first = focusableEls[0];
      const last = focusableEls[focusableEls.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    // Focus first element in menu
    requestAnimationFrame(() => {
      const first = mobileMenuRef.current?.querySelector<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      first?.focus();
    });

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const goToPricing = useCallback(() => {
    setMenuOpen(false);
    document
      .getElementById("pricing")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleLinkClick = useCallback((href: string) => {
    setActiveLink(href);
    setMenuOpen(false);
  }, []);

  return (
    <header className="fixed left-0 right-0 z-50 top-0 px-0 border-b border-white/10 bg-[#030712]/95">
      <div className="mx-auto flex justify-between items-center container px-4 sm:px-6 lg:px-8 py-3.5 md:py-4">
        <Logo />

        <nav
          className="hidden lg:flex items-center gap-7"
          aria-label="Navigation principale"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeLink === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`text-[11px] font-bold relative group uppercase tracking-[0.12em] transition-colors duration-300 ${
                   isActive ? "text-[#93C5FD]" : "text-slate-300 hover:text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-[#3B82F6] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2 sm:gap-3">
          <button
            onClick={goToPricing}
            type="button"
            className="hidden lg:inline-flex whitespace-nowrap btn-shine items-center justify-center px-5 py-2.5 rounded-full bg-[#EF4135] text-slate-950 text-xs font-black uppercase tracking-[0.12em] shadow-lg shadow-[#EF4135]/20 hover:bg-[#EF4135] active:scale-[0.98] cursor-pointer"
          >
            Choisir abonnement
          </button>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            ref={menuToggleRef}
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white/10"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        className={`lg:hidden overflow-hidden border-t border-white/10 bg-[#06111f]/96 backdrop-blur-xl transition-[max-height,opacity] duration-300 ${
          menuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
          aria-label="Navigation mobile"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeLink === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
                  isActive
                    ? "bg-[#3B82F6]/15 text-[#DBEAFE]"
                    : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <button
            type="button"
            onClick={goToPricing}
            className="mt-2 rounded-xl bg-[#EF4135] px-4 py-3 text-sm font-black text-slate-950 shadow-[0_12px_30px_rgba(239,65,53,0.18)]"
          >
            Choisir abonnement
          </button>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
