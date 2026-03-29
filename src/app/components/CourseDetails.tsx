import { Monitor, Wifi, Calendar, CreditCard, Users as UsersIcon } from 'lucide-react';

export function CourseDetails() {
  return (
    <section className="py-16 lg:py-24 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Requirements */}
            <div className="lg:col-span-1 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Что потребуется</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Monitor className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground/80">Стационарный компьютер или ноутбук с наушниками и микрофоном</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Wifi className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground/80">Стабильный интернет и Zoom</span>
                </li>
              </ul>
            </div>

            {/* Schedule */}
            <div className="lg:col-span-1 p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">Расписание</h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-card/50 border border-secondary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="font-semibold text-secondary">Четверг, 15:00 (МСК)</span>
                  </div>
                  <p className="text-sm text-foreground/70 ml-4">Группа 4–5 класс</p>
                </div>

                <div className="p-4 rounded-xl bg-card/50 border border-secondary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="font-semibold text-secondary">Пятница, 15:30 (МСК)</span>
                  </div>
                  <p className="text-sm text-foreground/70 ml-4">Группа 6–8 класс</p>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="lg:col-span-1 p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Стоимость</h3>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-card/50 border border-accent/20">
                  <div className="text-sm text-foreground/70 mb-1">Полный курс (10 уроков)</div>
                  <div className="text-3xl font-bold text-accent">12 000 ₽</div>
                </div>

                <div className="p-5 rounded-xl bg-card/50 border border-accent/20">
                  <div className="text-sm text-foreground/70 mb-1">Абонемент</div>
                  <div className="text-3xl font-bold text-accent">1 300 ₽<span className="text-base font-normal text-foreground/70"> / урок</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Group size highlight */}
          <div className="mt-8 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/30 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-card/50 text-primary mb-4">
              <UsersIcon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Набор открыт!</h3>
            <p className="text-lg text-foreground/80 mb-1">
              Группы маленькие — максимум <span className="text-primary font-bold">6 детей</span>, чтобы каждый получил внимание.
            </p>
            <p className="text-secondary font-semibold">Места ограничены!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
