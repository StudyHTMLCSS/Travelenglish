import { 
  Plane, 
  Hotel, 
  UtensilsCrossed, 
  MapPin, 
  AlertTriangle, 
  Ticket,
  Users,
  Award
} from 'lucide-react';

export function CourseProgram() {
  const modules = [
    {
      number: '1',
      title: 'Аэропорт без стресса',
      description: 'Регистрация, паспортный контроль, вопросы на таможне — всё на английском.',
      benefit: 'Уверенность уже в первые часы за границей.',
      icon: Plane,
      color: 'primary',
    },
    {
      number: '2',
      title: 'В отеле: заселение и помощь',
      description: 'Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.',
      benefit: 'Практика вежливых фраз и повседневной лексики.',
      icon: Hotel,
      color: 'secondary',
    },
    {
      number: '3',
      title: 'Кафе и рестораны',
      description: 'Заказ еды, вопросы про аллергены, счёт и чаевые.',
      benefit: 'Развитие гастрономического словаря и уверенности в общении.',
      icon: UtensilsCrossed,
      color: 'accent',
    },
    {
      number: '4',
      title: 'На улице: ориентирование и просьбы',
      description: 'Как спросить дорогу, вызвать такси или найти аптеку.',
      benefit: 'Понимание устной речи и произношения в реальных ситуациях.',
      icon: MapPin,
      color: 'primary',
    },
    {
      number: '5',
      title: 'Экстренные случаи',
      description: 'Потеря вещей, болезнь, помощь полиции — всё это на английском.',
      benefit: 'Важные фразы, которые могут спасти отпуск.',
      icon: AlertTriangle,
      color: 'secondary',
    },
    {
      number: '6–8',
      title: 'Туризм и развлечения',
      description: 'Покупка билетов, экскурсии, общение с гидами, музеи и парки.',
      benefit: 'Погружение в культурный контекст через язык.',
      icon: Ticket,
      color: 'accent',
    },
    {
      number: '7',
      title: 'Дружба в путешествиях',
      description: 'Как познакомиться с другими детьми или подростками за границей.',
      benefit: 'Игровая практика диалогов и неформального общения.',
      icon: Users,
      color: 'primary',
    },
    {
      number: '8',
      title: 'Дипломный проект: «Мой идеальный отпуск»',
      description: 'Ребёнок планирует воображаемое путешествие и представляет его на английском.',
      benefit: 'Развитие связной речи и творческого самовыражения.',
      icon: Award,
      color: 'secondary',
    },
  ];

  return (
    <section id="program" className="py-16 lg:py-24 bg-card/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full mb-4">
              <span className="text-secondary text-sm font-medium">Программа курса</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              8 модулей практического английского
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              От аэропорта до дипломного проекта — каждый урок готовит к реальным ситуациям
            </p>
          </div>

          {/* Modules grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => {
              const Icon = module.icon;
              const getColorClasses = (color: string) => {
                switch (color) {
                  case 'primary':
                    return {
                      gradient: 'from-primary/20 to-primary/5',
                      border: 'border-primary/30',
                      text: 'text-primary',
                      bg: 'bg-primary/10',
                    };
                  case 'secondary':
                    return {
                      gradient: 'from-secondary/20 to-secondary/5',
                      border: 'border-secondary/30',
                      text: 'text-secondary',
                      bg: 'bg-secondary/10',
                    };
                  case 'accent':
                    return {
                      gradient: 'from-accent/20 to-accent/5',
                      border: 'border-accent/30',
                      text: 'text-accent',
                      bg: 'bg-accent/10',
                    };
                  default:
                    return {
                      gradient: 'from-primary/20 to-primary/5',
                      border: 'border-primary/30',
                      text: 'text-primary',
                      bg: 'bg-primary/10',
                    };
                }
              };

              const colors = getColorClasses(module.color);

              return (
                <div
                  key={index}
                  className={`relative p-6 rounded-2xl bg-gradient-to-br ${colors.gradient} border ${colors.border} hover:scale-105 transition-all duration-300 group`}
                >
                  {/* Module number */}
                  <div className={`absolute top-4 right-4 w-10 h-10 rounded-full ${colors.bg} flex items-center justify-center`}>
                    <span className={`text-sm font-bold ${colors.text}`}>{module.number}</span>
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-card/50 ${colors.text} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                  <p className="text-foreground/70 text-sm mb-3 leading-relaxed">{module.description}</p>
                  <div className={`flex items-start gap-2 ${colors.bg} ${colors.text} p-3 rounded-lg`}>
                    <span className="text-lg mt-0.5">👉</span>
                    <p className="text-sm font-medium">{module.benefit}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative background */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
}
