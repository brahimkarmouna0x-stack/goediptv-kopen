import { categories } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import {
  Baby,
  Clapperboard,
  Globe2,
  RadioTower,
  Sparkles,
  Trophy,
  Tv,
} from "lucide-react";
import type { ElementType } from "react";

interface Category {
  name: string;
  count: string;
  image: string;
}

const categoryCopy: Record<
  string,
  {
    eyebrow: string;
    description: string;
    icon: ElementType;
    href: string;
    tone: string;
  }
> = {
  Sport: {
    eyebrow: "Matchs en direct",
    description: "Compétitions, événements pay-per-view et chaînes sport premium.",
    icon: Trophy,
    href: "/popular?type=sports",
    tone: "from-[#3B82F6]/20 to-[#0055A4]/15 text-[#93C5FD]",
  },
  Films: {
    eyebrow: "Cinéma à la maison",
    description: "Nouveautés, classiques et films internationaux.",
    icon: Clapperboard,
    href: "/popular?type=movies",
    tone: "from-[#EF4135]/20 to-[#EF4135]/10 text-[#EF4135]/80",
  },
  Series: {
    eyebrow: "Prêt pour le binge",
    description: "Séries populaires et saisons complètes en streaming.",
    icon: Tv,
    href: "/popular?type=series",
    tone: "from-[#3B82F6]/20 to-[#3B82F6]/10 text-[#3B82F6]/80",
  },
  Enfants: {
    eyebrow: "Adapté aux familles",
    description: "Chaînes enfants sécurisées, animations et films familiaux.",
    icon: Baby,
    href: "/popular?genre=Famille",
    tone: "from-[#F4C430]/20 to-[#F4C430]/10 text-[#F4C430]/80",
  },
  "TV Live": {
    eyebrow: "Toujours allumé",
    description: "Actualités, divertissement et émissions en direct sans détour.",
    icon: RadioTower,
    href: "/popular?type=lives",
    tone: "from-[#0055A4]/25 to-[#3B82F6]/15 text-[#93C5FD]",
  },
  International: {
    eyebrow: "Mondial",
    description: "Chaînes d'Europe, d'Amérique, MENA et Asie-Pacifique.",
    icon: Globe2,
    href: "/popular?genre=Internationaal",
    tone: "from-[#3B82F6]/20 to-[#EF4135]/10 text-[#DBEAFE]",
  },
};

const Categories = () => {
  const [featured, ...rest] = categories as Category[];

  return (
    <section
      id="categories"
      className="relative py-16 sm:py-24"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 700px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-5 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/15 px-3.5 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-[#DBEAFE]">
              <Sparkles size={14} aria-hidden="true" />
              Bibliothèque
            </span>
            <h2 className="mt-4 font-display text-3xl font-black leading-tight text-white sm:text-5xl">
              Choisissez votre moment de visionnage.
            </h2>
          </div>
          <p className="max-w-xl text-sm font-medium leading-6 text-slate-400 sm:text-base">
            Accès rapide au sport en direct, aux films, aux séries et à la TV internationale,
            conçu pour une navigation aussi fluide sur mobile que sur desktop.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
          <CategoryFeature category={featured} />

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:gap-5">
            {rest.slice(0, 4).map((category) => (
              <CategoryTile key={category.name} category={category} />
            ))}
          </div>

          {rest[4] && <CategoryWide category={rest[4]} />}
        </div>
      </div>
    </section>
  );
};

const getMeta = (category: Category) => categoryCopy[category.name];

const CategoryFeature = ({ category }: { category: Category }) => {
  const meta = getMeta(category);
  const Icon = meta.icon;

  return (
    <Link
      href={meta.href}
      className="group relative min-h-[440px] overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.9)] lg:col-span-5 lg:row-span-2"
    >
      <Image
        src={category.image}
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 42vw"
        quality={72}
        priority
        className="object-cover brightness-110 saturate-125 scale-[1.02] transition-transform duration-700 group-hover:scale-[1.07]"
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#020617]/82 via-[#020617]/18 to-transparent" />
      <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/12 bg-[#06111f]/68 p-5 shadow-2xl backdrop-blur-sm sm:inset-x-5 sm:bottom-5 sm:p-6">
        <div
          className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br ${meta.tone} border border-white/15 backdrop-blur-md`}
        >
          <Icon size={23} aria-hidden="true" />
        </div>
        <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-[#DBEAFE]/80">
          {meta.eyebrow}
        </p>
        <h3 className="font-display text-4xl font-black text-white sm:text-5xl">
          {category.name}
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-6 text-slate-200">
          {meta.description}
        </p>
        <div className="mt-6 flex items-center justify-between gap-4">
          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-white">
            {category.count}
          </span>
          <span className="text-sm font-bold text-[#DBEAFE] transition-transform group-hover:translate-x-1">
            Explorer
          </span>
        </div>
      </div>
    </Link>
  );
};

const CategoryTile = ({ category }: { category: Category }) => {
  const meta = getMeta(category);
  const Icon = meta.icon;

  return (
    <Link
      href={meta.href}
      className="group relative min-h-[230px] overflow-hidden rounded-2xl border border-white/10 bg-[#081423] transition-colors hover:border-[#93C5FD]/30 hover:bg-[#0a1a2b]"
    >
      <Image
        src={category.image}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 22vw"
        quality={68}
        className="object-cover brightness-105 saturate-125 scale-[1.02] transition duration-700 group-hover:scale-[1.07]"
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#020617]/88 via-[#020617]/24 to-transparent" />
      <div className="relative flex h-full min-h-[230px] flex-col justify-between p-4 sm:p-5">
        <div className="flex items-start justify-between gap-4">
          <div
            className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br ${meta.tone} border border-white/10`}
          >
            <Icon size={21} aria-hidden="true" />
          </div>
          <span className="rounded-full bg-[#06111f]/62 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-slate-100 backdrop-blur-sm">
            {meta.eyebrow}
          </span>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#06111f]/62 p-4 backdrop-blur-sm">
          <h3 className="text-2xl font-black text-white">{category.name}</h3>
          <p className="mt-2 text-sm leading-5 text-slate-200">
            {meta.description}
          </p>
          <p className="mt-4 text-xs font-black uppercase tracking-[0.12em] text-[#DBEAFE]">
            {category.count}
          </p>
        </div>
      </div>
    </Link>
  );
};

const CategoryWide = ({ category }: { category: Category }) => {
  const meta = getMeta(category);
  const Icon = meta.icon;

  return (
    <Link
      href={meta.href}
      className="group relative min-h-[190px] overflow-hidden rounded-2xl border border-white/10 bg-[#081423] p-5 sm:p-6 lg:col-span-12"
    >
      <Image
        src={category.image}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 92vw, 1180px"
        quality={50}
        className="object-cover brightness-105 saturate-125 scale-[1.02] transition duration-700 group-hover:scale-[1.07]"
      />
      <div className="absolute inset-0 bg-linear-to-r from-[#020617]/86 via-[#020617]/52 to-[#020617]/18" />
      <div className="relative flex min-h-[140px] flex-col gap-5 rounded-2xl border border-white/10 bg-[#06111f]/58 p-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br ${meta.tone} border border-white/10`}
          >
            <Icon size={23} aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#DBEAFE]/80">
              {meta.eyebrow}
            </p>
            <h3 className="mt-1 text-2xl font-black text-white">
              {category.name}
            </h3>
          </div>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-200">
          {meta.description}
        </p>
        <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-white">
          {category.count}
        </span>
      </div>
    </Link>
  );
};

export default Categories;
