import { CourseHero } from './components/CourseHero';
import { TargetAudience } from './components/TargetAudience';
import { CourseProgram } from './components/CourseProgram';
import { WhySpecial } from './components/WhySpecial';
import { CourseDetails } from './components/CourseDetails';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <CourseHero />
      <TargetAudience />
      <CourseProgram />
      <WhySpecial />
      <CourseDetails />
      <CTASection />
      <Footer />
    </div>
  );
}
