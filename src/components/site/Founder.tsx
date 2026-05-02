import { useLang } from "@/i18n/LangContext";
import founderImg from "@/assets/founder.jpg";
import { Star } from "lucide-react";

export function Founder() {
  const { t } = useLang();
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2">
            <div className="relative rounded-3xl overflow-hidden shadow-luxe gold-border">
              <img src={founderImg} alt="Founder" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/60 to-transparent" />
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="inline-flex items-center gap-2 text-emerald-deep text-xs uppercase tracking-[0.3em] mb-3">
              <Star className="h-3.5 w-3.5 text-gold" /> {t.founder.kicker}
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-3">{t.founder.name}</h2>
            <div className="h-1 w-20 bg-gradient-gold rounded-full mb-5" />
            <p className="text-lg text-muted-foreground leading-relaxed">{t.founder.desc}</p>
            <div className="mt-6 font-arabic text-2xl text-emerald-deep">السلام علیکم و رحمۃ اللہ</div>
          </div>
        </div>
      </div>
    </section>
  );
}
