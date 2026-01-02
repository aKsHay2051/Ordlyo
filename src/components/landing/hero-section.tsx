import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="max-w-3xl space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Stop losing orders in WhatsApp.
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
              Go from chat history chaos to organized orders, instantly. OrderEase helps you track every order without messy spreadsheets.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild size="lg" className="font-bold bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="#waitlist">
                Join the Early Access Waitlist
                <ArrowDown className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
