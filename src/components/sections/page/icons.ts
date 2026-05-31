import {
  ArrowRight,
  BadgeCheck,
  Box,
  CalendarClock,
  CheckCircle2,
  Cpu,
  CreditCard,
  Download,
  FileCode,
  Film,
  Gauge,
  Globe,
  Headphones,
  ListChecks,
  Lock,
  Monitor,
  MonitorSmartphone,
  PlayCircle,
  RefreshCw,
  Scale,
  Server,
  Settings,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Tv,
  Wallet,
  Wifi,
  Zap,
} from "lucide-react";
import type { ComponentType } from "react";

export type IconProps = {
  size?: number;
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
};

/**
 * Curated lucide-react icon map. Section data references icons by name; this
 * keeps the import list explicit (tree-shakeable) and crash-safe — an unknown
 * name falls back to a check icon instead of throwing.
 */
const ICONS: Record<string, ComponentType<IconProps>> = {
  ArrowRight,
  BadgeCheck,
  Box,
  CalendarClock,
  CheckCircle2,
  Cpu,
  CreditCard,
  Download,
  FileCode,
  Film,
  Gauge,
  Globe,
  Headphones,
  ListChecks,
  Lock,
  Monitor,
  MonitorSmartphone,
  PlayCircle,
  RefreshCw,
  Scale,
  Server,
  Settings,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Tv,
  Wallet,
  Wifi,
  Zap,
};

export const getIcon = (name?: string): ComponentType<IconProps> =>
  (name ? ICONS[name] : undefined) ?? CheckCircle2;
