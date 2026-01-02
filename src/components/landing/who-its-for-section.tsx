import { Check, X } from 'lucide-react';

const included = [
  'Solo sellers & entrepreneurs',
  'Home-based businesses (food, crafts)',
  'Resellers on Instagram & Facebook',
  'Anyone tired of manual tracking',
];

const excluded = [
  'Large companies & enterprises',
  'Teams needing complex dashboards',
  'Businesses with a dedicated sales team',
];

export function WhoItsForSection() {
  return (
    <section className="w-full bg-card py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl md:text-5xl">
              Built for the small seller.
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              We're focused on solving problems for micro-businesses. This helps us build a better, simpler tool.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
          <div className="rounded-lg border bg-background p-6">
            <h3 className="text-xl font-bold mb-4">This is for you if you're a...</h3>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border bg-background/50 p-6">
            <h3 className="text-xl font-bold mb-4">This is NOT for...</h3>
            <ul className="space-y-3">
              {excluded.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <X className="h-5 w-5 flex-shrink-0 text-destructive" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
