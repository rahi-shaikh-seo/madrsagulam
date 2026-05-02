import { useState, useEffect } from "react";
import { useLang, WHATSAPP_URL } from "@/i18n/LangContext";
import type { Lang } from "@/i18n/translations";
import { Menu, X, Globe, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const langs: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ur", label: "اردو" },
  { code: "hi", label: "हिं" },
];

export function Navbar() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all",
            scrolled ? "glass shadow-soft" : "bg-transparent"
          )}
        >
          <a href="#top" className="flex items-center gap-3 group">
            <div className="relative h-12 w-12 rounded-xl grid place-items-center">
              <img src="/logo.png" alt="Madarsa Logo" className="w-full h-full object-contain" />
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-base md:text-lg font-bold leading-tight text-foreground">
                {t.brand}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold-foreground/60">
                Online Islamic Institute
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            <a href="#top" className="hover:text-gold transition-colors">{t.nav.home}</a>
            <a href="#offer" className="hover:text-gold transition-colors">{t.nav.offer}</a>
            <a href="#courses" className="hover:text-gold transition-colors">{t.nav.courses}</a>
            <a href="#posters" className="hover:text-gold transition-colors">{t.nav.posters}</a>
            <a href="#why" className="hover:text-gold transition-colors">{t.nav.about}</a>
            <a href="#contact" className="hover:text-gold transition-colors">{t.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1 rounded-full glass px-1 py-1">
              <Globe className="h-3.5 w-3.5 ml-2 text-emerald-deep" />
              {langs.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={cn(
                    "px-2.5 py-1 text-xs font-semibold rounded-full transition-all",
                    lang === l.code
                      ? "bg-gradient-emerald text-gold shadow-soft"
                      : "text-foreground/70 hover:text-emerald-deep"
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-2 text-sm font-bold text-gold-foreground shadow-gold hover:scale-105 transition-transform"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden md:inline">{t.hero.cta1}</span>
              <span className="md:hidden">WhatsApp</span>
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg glass"
              aria-label="menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-4 animate-fade-up">
            <nav className="flex flex-col gap-3 text-sm font-medium">
              <a onClick={() => setOpen(false)} href="#top">{t.nav.home}</a>
              <a onClick={() => setOpen(false)} href="#offer">{t.nav.offer}</a>
              <a onClick={() => setOpen(false)} href="#courses">{t.nav.courses}</a>
              <a onClick={() => setOpen(false)} href="#posters">{t.nav.posters}</a>
              <a onClick={() => setOpen(false)} href="#why">{t.nav.about}</a>
              <a onClick={() => setOpen(false)} href="#contact">{t.nav.contact}</a>
            </nav>
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
              {langs.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={cn(
                    "px-3 py-1.5 text-xs font-semibold rounded-full",
                    lang === l.code ? "bg-gradient-emerald text-gold" : "bg-muted"
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
