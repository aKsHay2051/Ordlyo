import { Card, CardContent } from '@/components/ui/card';
import { ListChecks, SearchX, Frown, Clock, FileWarning, MessageCircleWarning } from 'lucide-react';

const painPoints = [
    {
        icon: <SearchX className="h-8 w-8 text-primary" />,
        title: 'Lost in Chat',
        text: 'Orders, payments, and addresses get buried in endless WhatsApp conversations.'
    },
    {
        icon: <FileWarning className="h-8 w-8 text-primary" />,
        title: 'Manual Entry Errors',
        text: 'Copying details to notebooks or Excel is slow and leads to costly mistakes.'
    },
    {
        icon: <Clock className="h-8 w-8 text-primary" />,
        title: 'No Real-Time Status',
        text: 'Customers constantly ask for updates because there’s no way for them to track their order.'
    }
]

export function ProblemSection() {
  return (
    <section className="w-full bg-secondary py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center mb-12 md:mb-16">
            <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                The struggle is real.
                </h2>
                <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
                If you're a small seller using WhatsApp, you know how quickly things get messy. It's a daily battle to keep track of everything.
                </p>
            </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
            {painPoints.map((point, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl transition-all">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                        {point.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                    <p className="text-muted-foreground">{point.text}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}