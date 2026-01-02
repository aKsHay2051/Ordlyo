import { Card, CardContent } from '@/components/ui/card';
import { ListChecks, SearchX, Frown } from 'lucide-react';

const painPoints = [
    {
        icon: <SearchX className="h-8 w-8 text-destructive" />,
        text: 'Orders and payment proofs get lost in long chat histories.'
    },
    {
        icon: <ListChecks className="h-8 w-8 text-blue-500" />,
        text: 'Manually copying details to notebooks or Excel is slow and leads to errors.'
    },
    {
        icon: <Frown className="h-8 w-8 text-amber-600" />,
        text: 'Customers keep asking for updates because there’s no tracking.'
    }
]

export function ProblemSection() {
  return (
    <section className="w-full bg-card py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl md:text-5xl">
              Managing orders on WhatsApp is messy.
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              If you're a small seller, you know the struggle. Orders get lost, details are missed, and customers get impatient.
            </p>
          </div>
          <div className="w-full max-w-2xl mx-auto">
            <Card className="shadow-lg rounded-xl overflow-hidden border-none">
              <CardContent className="p-8 space-y-6">
                {painPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                            {point.icon}
                        </div>
                        <p className="text-left text-muted-foreground text-lg">
                            {point.text}
                        </p>
                    </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
