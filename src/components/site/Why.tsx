import { useLang } from "@/i18n/LangContext";
import { Shield, Users, GraduationCap, ClipboardCheck, UserCheck, Video, Globe2, Star } from "lucide-react";

const icons = [Shield, Users, GraduationCap, ClipboardCheck, UserCheck, Video, Globe2];

export function Why() {
  const { t } = useLang();
  return (
    <section id="why" className="py-24 bg-gradient-beige relative">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-emerald-deep text-xs uppercase tracking-[0.3em] mb-3">
            <Star className="h-3.5 w-3.5 text-gold" /> {t.why.kicker}
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">{t.why.title}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {t.why.items.map((it, i) => {
            const Icon = icons[i] || Star;
            return (
              <div
                key={it.t}
                className="group relative rounded-2xl bg-card p-7 border border-border hover:shadow-luxe transition-all hover:-translate-y-1"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-gold grid place-items-center mb-5 shadow-gold group-hover:scale-110 transition-transform">
                  <Icon className="h-5 w-5 text-gold-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{it.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
