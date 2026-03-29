import { Plane } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 bg-card/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo and brand */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Plane className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-bold text-lg">Английский для путешествий</div>
                <div className="text-sm text-foreground/60">Курс для детей 4–8 классов</div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right text-foreground/60 text-sm">
              <p>© 2026 Все права защищены</p>
              <p className="mt-1">Онлайн-обучение через Zoom</p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-xs text-foreground/50 max-w-3xl mx-auto">
              Курс проводится в формате онлайн-занятий. Для участия необходима предварительная регистрация. 
              Количество мест ограничено. Подробности уточняйте при записи.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
