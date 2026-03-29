import { Plane } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CourseHero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20" />
      
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1592686274278-7ff289d26f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBzdW5zZXQlMjBob3Jpem9uJTIwb2NlYW58ZW58MXx8fHwxNzc0ODAyNDY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Travel sunset"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Plane className="w-5 h-5 text-primary" />
            <span className="text-primary text-sm font-medium">Новый курс 2026</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
            Английский для путешествий
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
            Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? 
            Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится 
            в отпуске, поездках и будущих путешествиях!
          </p>

          {/* Quick CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#register" 
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground rounded-lg transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105"
            >
              Записаться на курс
            </a>
            <a 
              href="#program" 
              className="inline-flex items-center justify-center px-8 py-4 bg-card/50 backdrop-blur-sm border border-border hover:bg-card/70 rounded-lg transition-all duration-300"
            >
              Узнать программу
            </a>
          </div>
        </div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
    </section>
  );
}
