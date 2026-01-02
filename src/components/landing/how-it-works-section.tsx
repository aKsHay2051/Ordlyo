import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquareQuote, BotMessageSquare, CheckCircle2 } from 'lucide-react';

const steps = [
    {
        icon: <MessageSquareQuote className="h-8 w-8 text-primary" />,
        title: 'Customer sends an order',
        description: 'Your customers order from you on WhatsApp just like they always do. No new apps for them to download.',
    },
    {
        icon: <BotMessageSquare className="h-8 w-8 text-primary" />,
        title: 'Order is saved instantly',
        description: 'Ordlyo detects and saves order details into a simple, clean dashboard for you, automatically.',
    },
    {
        icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
        title: 'You confirm and track',
        description: 'Confirm the order with one tap, update its status, and keep everything neatly organized from a single place.',
    }
];

export function HowItWorksSection() {
    return (
        <section className="w-full py-20 md:py-28 lg:py-32 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center mb-12 md:mb-16">
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        How It Works
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Your New 3-Step Workflow
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        Go from messy chats to organized orders in minutes.
                    </p>
                </div>

                <div className="relative grid gap-8 md:grid-cols-3">
                    {/* Dashed line connecting the steps on larger screens */}
                    <div className="absolute top-1/2 left-0 right-0 hidden md:block">
                        <div className="w-full border-t-2 border-dashed border-border"></div>
                    </div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center p-4">
                             <div className="absolute -top-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl ring-8 ring-secondary">
                                {index + 1}
                            </div>
                            <div className="mt-12 w-full">
                                <Card className="h-full bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl pt-6">
                                    <CardHeader className="items-center">
                                        <div className="bg-primary/10 p-3 rounded-full mb-2">
                                            {step.icon}
                                        </div>
                                        <CardTitle className="text-xl font-semibold">{step.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground text-base">{step.description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
