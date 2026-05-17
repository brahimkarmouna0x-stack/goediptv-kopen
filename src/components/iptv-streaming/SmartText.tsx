import Link from "next/link";
import { IPTV_STREAMING_PAGES } from "@/content/iptv-streaming-pages";

interface SmartTextProps {
  text: string;
  currentSlug?: string;
}

const SmartText = ({ text, currentSlug }: SmartTextProps) => {
  if (!text) return null;

  // Sort pages by keyword length descending to match longer phrases first (e.g., "IPTV Smarters Pro" before "IPTV")
  const sortedPages = [...IPTV_STREAMING_PAGES]
    .sort((a, b) => b.keyword.length - a.keyword.length)
    .filter(p => p.slug !== currentSlug); // Don't link to the current page

  // We'll use a regex to find all keywords. We need to be careful not to link nested matches.
  // Example: "IPTV Smarters" should not be linked twice if both "IPTV" and "IPTV Smarters" are keywords.
  
  // Create a regex pattern from keywords
  const pattern = sortedPages
    .map(p => p.keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|');
    
  if (!pattern) return <>{text}</>;

  const regex = new RegExp(`\\b(${pattern})\\b`, 'gi');
  
  const parts = text.split(regex);
  const result: React.ReactNode[] = [];

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (!part) continue;

    // Check if this part matches a keyword
    const matchedPage = sortedPages.find(p => p.keyword.toLowerCase() === part.toLowerCase());

    if (matchedPage) {
      result.push(
        <Link 
          key={i} 
          href={`/iptv-streaming/${matchedPage.slug}`}
          className="text-france-500 hover:text-france-400 underline decoration-france-500/35 underline-offset-4 font-bold transition-colors"
        >
          {part}
        </Link>
      );
    } else {
      result.push(part);
    }
  }

  return <>{result}</>;
};

export default SmartText;
