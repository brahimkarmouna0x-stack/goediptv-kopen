"use client";

import { useState, useMemo } from "react";
import { Search, ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { IPTV_STREAMING_PAGES } from "@/content/iptv-streaming-pages";

const VaultSearch = () => {
  const [query, setQuery] = useState("");

  const filteredResults = useMemo(() => {
    if (query.length < 2) return [];

    const searchTerms = query.toLowerCase().split(" ");
    return IPTV_STREAMING_PAGES.filter((page) => {
      const content =
        `${page.keyword} ${page.title} ${page.metaDescription}`.toLowerCase();
      return searchTerms.every((term) => content.includes(term));
    }).slice(0, 8);
  }, [query]);

  // Announce results count to screen readers
  const resultCount = filteredResults.length;

  return (
    <div className="relative w-full max-w-2xl mx-auto z-50">
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {query.length >= 2
          ? resultCount > 0
            ? `${resultCount} résultats trouvés`
            : "Aucun résultat trouvé"
          : ""}
      </div>
      <div className="relative group">
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
          <Search
            size={20}
            className="text-slate-400 group-focus-within:text-[#3B82F6] transition-colors"
          />
        </div>
        <input
          type="text"
          placeholder="Rechercher dans la base de connaissances (ex: Smarters, 4K, App...)"
          className="w-full bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-2xl py-5 pl-14 pr-12 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0055A4]/50 focus:border-[#0055A4]/50 transition-all shadow-2xl"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {filteredResults.length > 0 && (
        <div
          className="absolute top-full mt-3 w-full bg-[#0f172a] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300"
          role="listbox"
          aria-label="Résultats de recherche"
        >
          <div className="p-2">
            {filteredResults.map((result) => (
              <Link
                key={result.slug}
                href={`/iptv-streaming/${result.slug}`}
                onClick={() => setQuery("")}
                className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-all group"
              >
                <div>
                  <h4 className="text-white font-bold text-sm group-hover:text-[#3B82F6] transition-colors">
                    {result.keyword}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-1 mt-1">
                    {result.metaDescription}
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-slate-600 group-hover:text-[#3B82F6] transform translate-x-0 group-hover:translate-x-1 transition-all"
                />
              </Link>
            ))}
          </div>
          <div className="bg-white/2 p-3 text-center border-t border-white/5">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
              {filteredResults.length} résultats trouvés
            </p>
          </div>
        </div>
      )}

      {query.length >= 2 && filteredResults.length === 0 && (
        <div className="absolute top-full mt-3 w-full bg-[#0f172a] border border-white/10 rounded-2xl p-8 text-center shadow-2xl">
          <p className="text-slate-400 text-sm">
            Aucun résultat trouvé pour &quot;{query}&quot;
          </p>
        </div>
      )}
    </div>
  );
};

export default VaultSearch;
