import { MessageCircle, Target, Gamepad2, TrendingUp } from 'lucide-react';

export function WhySpecial() {
  const features = [
    {
      icon: MessageCircle,
      title: 'Акцент на практическую, живую речь',
      description: 'Мы учим не грамматике ради грамматики, а реальному разговорному языку, который сразу можно применить.',
      color: 'primary',
    },
    {
      icon: Target,
      title: 'Ситуации из реальной жизни',
      description: 'Все уроки основаны на реальных ситуациях, с которыми сталкиваются путешественники.',
      color: 'secondary',
    },
    {
      icon: Gamepad2,
      title: 'Интерактивные задания',
      description: 'Ролевые игры, аудиоситуации, мини-квесты — обучение через игру и практику.',
      color: 'accent',
    },
    {
      icon: TrendingUp,
      title: 'Достижение уровня A2–B1',
      description: 'За курс ребёнок выходит на уровень Pre-Intermediate и может свободно общаться в путешествиях.',
      color: 'primary',
    },
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-4">
              <span className="text-accent text-sm font-medium">Почему этот курс особенный</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Уникальный подход к обучению
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Мы создали курс, который действительно работает в реальной жизни
            </p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const getColorClasses = (color: string) => {
                switch (color) {
                  case 'primary':
                    return {
                      gradient: 'from-primary/10 via-primary/5 to-transparent',
                      border: 'border-primary/30',
                      text: 'text-primary',
                      glow: 'shadow-primary/20',
                    };
                  case 'secondary':
                    return {
                      gradient: 'from-secondary/10 via-secondary/5 to-transparent',
                      border: 'border-secondary/30',
                      text: 'text-secondary',
                      glow: 'shadow-secondary/20',
                    };
                  case 'accent':
                    return {
                      gradient: 'from-accent/10 via-accent/5 to-transparent',
                      border: 'border-accent/30',
                      text: 'text-accent',
                      glow: 'shadow-accent/20',
                    };
                  default:
                    return {
                      gradient: 'from-primary/10 via-primary/5 to-transparent',
                      border: 'border-primary/30',
                      text: 'text-primary',
                      glow: 'shadow-primary/20',
                    };
                }
              };

              const colors = getColorClasses(feature.color);

              return (
                <div
                  key={index}
                  className={`relative p-8 rounded-2xl bg-gradient-to-br ${colors.gradient} border ${colors.border} backdrop-blur-sm hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl ${colors.glow}`}
                >
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-card/50 ${colors.text} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{feature.description}</p>

                  {/* Decorative element */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${colors.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
