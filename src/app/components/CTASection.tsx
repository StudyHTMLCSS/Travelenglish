import { ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CTASection() {
  return (
    <section id="register" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
      
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1644418634481-918f39597be8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMHdpbmRvdyUyMHRyYXZlbCUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NzQ4MDI0Njd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Travel adventure"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* CTA Card */}
          <div className="relative p-8 md:p-12 lg:p-16 rounded-3xl bg-card/80 backdrop-blur-xl border border-primary/30 shadow-2xl">
            {/* Decorative sparkle */}
            <div className="absolute top-8 right-8 text-secondary animate-pulse">
              <Sparkles className="w-8 h-8" />
            </div>

            {/* Content */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Запишитесь сейчас — и следующее путешествие станет первым, где ваш ребёнок{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  заговорит по-английски без страха!
                </span>
              </h2>

              <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
                Не упустите возможность подарить вашему ребёнку уверенность в путешествиях 
                и навыки, которые останутся на всю жизнь
              </p>

              {/* CTA Button */}
              <button className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground rounded-xl text-lg font-semibold transition-all duration-300 shadow-2xl shadow-primary/40 hover:shadow-primary/60 hover:scale-110">
                <span>Записаться на курс</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              {/* Additional info */}
              <p className="mt-6 text-sm text-foreground/60">
                После нажатия кнопки с вами свяжется наш менеджер для уточнения деталей
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
          </div>

          {/* Trust badges */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-primary mb-1">10</div>
              <div className="text-sm text-foreground/70">Уроков</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-secondary mb-1">8</div>
              <div className="text-sm text-foreground/70">Модулей</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-accent mb-1">6</div>
              <div className="text-sm text-foreground/70">Детей в группе</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary mb-1">A2–B1</div>
              <div className="text-sm text-foreground/70">Уровень по CEFR</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
