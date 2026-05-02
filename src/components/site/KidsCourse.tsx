import { useLang, WHATSAPP_URL } from "@/i18n/LangContext";
import { Baby, Star } from "lucide-react";
import kidsPoster from "@/assets/poster-kids-special.jpg";

export function KidsCourse() {
  const { t } = useLang();
  return (
    <section id="kids" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 pattern-overlay opacity-30" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-deep/10 border border-emerald-deep/20 px-4 py-1.5 mb-5">
              <Baby className="h-4 w-4 text-emerald-deep" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-deep">For Boys & Girls (5-13 Yrs)</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Online <span className="text-gradient-gold">Kids Special</span> Course
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Madrasa E Gulaaman E Mustafa ﷺ brings a specially designed online course for children to learn basic Islamic education, Quran, and essential manners from the comfort of your home using just a mobile phone!
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                "Qur'an E Tajweed (Qaida & Nazra)",
                "Namaz Ke Ahkam & Dua",
                "Kalma & Chand Suraten",
                "Namaz Ka Tarika",
                "Sunnaten Aur Ada'ab",
                "Islam Ki Bunyadi Batein",
                "Arbi & Urdu Language",
                "Wuzu Ka Tarika",
                "Akhlaqi Tarbiyat (with Drawing)",
                "Huzoor ﷺ Ki Seerat"
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="h-5 w-5 shrink-0 rounded-full bg-gradient-gold grid place-items-center mt-0.5 shadow-gold">
                    <Star className="h-3 w-3 text-gold-foreground" />
                  </div>
                  <span className="text-sm font-medium text-foreground/90">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-emerald px-8 py-4 font-bold text-gold shadow-luxe hover:scale-105 transition-transform"
              >
                Register Your Child Now
              </a>
              <div className="text-sm font-semibold text-emerald-deep px-4 py-2 bg-emerald-deep/10 rounded-full border border-emerald-deep/20">
                Duration: 6 Months • Weekly Tests
              </div>
            </div>
          </div>

          <div>
            <div className="relative rounded-3xl overflow-hidden gold-border shadow-luxe group">
              <img 
                src={kidsPoster} 
                alt="Kids Special Course" 
                loading="lazy" 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
