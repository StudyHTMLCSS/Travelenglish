import { Users, GraduationCap } from 'lucide-react';

export function TargetAudience() {
  const groups = [
    {
      title: 'Первая группа',
      grades: '4–5 класс',
      icon: Users,
      color: 'primary',
    },
    {
      title: 'Вторая группа',
      grades: '6–8 класс',
      icon: GraduationCap,
      color: 'secondary',
    },
  ];

  return (
    <section className="py-16 lg:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <span className="text-primary text-sm font-medium">Для кого курс</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Специально разработанные программы
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Мы создали две возрастные группы с учётом особенностей развития и уровня владения языком
            </p>
          </div>

          {/* Groups grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {groups.map((group, index) => {
              const Icon = group.icon;
              const gradientClass = group.color === 'primary' 
                ? 'from-primary/20 to-primary/5' 
                : 'from-secondary/20 to-secondary/5';
              const iconColor = group.color === 'primary' ? 'text-primary' : 'text-secondary';
              const borderColor = group.color === 'primary' ? 'border-primary/30' : 'border-secondary/30';

              return (
                <div
                  key={index}
                  className={`relative p-8 rounded-2xl bg-gradient-to-br ${gradientClass} border ${borderColor} hover:scale-105 transition-all duration-300 group`}
                >
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-card/50 ${iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-2">{group.title}</h3>
                  <p className={`text-xl ${iconColor} font-semibold`}>{group.grades}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
