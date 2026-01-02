import { Button } from '@/components/ui/button';
import { ArrowDown, MessageSquare, CheckSquare } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-b from-secondary/50 via-background to-background pt-20 md:pt-32 lg:pt-40">
       <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-t from-background to-transparent z-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Stop losing orders in WhatsApp.
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
              Go from chat history chaos to organized orders, instantly. Ordlyo helps you track every order without messy spreadsheets.
            </p>
          </div>
          <div className="space-x-4 pb-12">
            <Button asChild size="lg" className="font-bold bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#waitlist">
                Join the Early Access Waitlist
                <ArrowDown className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-16 flex justify-center">
          <div className="w-full max-w-4xl p-2 bg-card/50 backdrop-blur-sm border rounded-xl shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {/* Messy Side */}
              <div className="p-4 bg-background/50 rounded-lg">
                <h3 className="font-semibold text-center text-muted-foreground mb-4">Before Ordlyo</h3>
                <div className="space-y-3">
                  <div className="flex justify-start">
                    <div className="bg-secondary p-2 rounded-lg max-w-[80%]">
                      <p className="text-sm">Hi, can I order one cake?</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary/20 p-2 rounded-lg max-w-[80%]">
                      <p className="text-sm">Sure! Which one?</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                     <div className="bg-secondary p-2 rounded-lg max-w-[80%]">
                      <p className="text-sm">Chocolate. Address is 123 Main St. GPay or COD?</p>
                    </div>
                  </div>
                   <div className="flex justify-start">
                     <div className="bg-secondary p-2 rounded-lg max-w-[80%]">
                      <p className="text-sm">Also, one red velvet.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Clean Side */}
              <div className="p-4 bg-background rounded-lg border border-primary/20">
                <h3 className="font-semibold text-center text-foreground mb-4">With Ordlyo</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 bg-secondary rounded-md">
                    <CheckSquare className="h-5 w-5 text-green-600" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">1x Chocolate Cake</p>
                      <p className="text-xs text-muted-foreground">Priya Sharma</p>
                    </div>
                    <div className="text-sm font-semibold">₹450</div>
                  </div>
                   <div className="flex items-center gap-3 p-2 bg-secondary rounded-md">
                    <CheckSquare className="h-5 w-5 text-green-600" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">1x Red Velvet Cake</p>
                      <p className="text-xs text-muted-foreground">Priya Sharma</p>
                    </div>
                    <div className="text-sm font-semibold">₹550</div>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-secondary/50 rounded-md opacity-60">
                    <MessageSquare className="h-5 w-5 text-muted-foreground" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">2x Brownies</p>
                      <p className="text-xs text-muted-foreground">Rohan Verma</p>
                    </div>
                    <div className="text-sm font-semibold">₹200</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
