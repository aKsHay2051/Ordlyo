import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { ProblemSection } from '@/components/landing/problem-section';
import { HowItWorksSection } from '@/components/landing/how-it-works-section';
import { WhoItsForSection } from '@/components/landing/who-its-for-section';
import { WaitlistSection } from '@/components/landing/waitlist-section';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <WhoItsForSection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
}
