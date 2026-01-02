import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Save, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
    {
        icon: <MessageSquare className="h-10 w-10 text-primary" />,
        title: 'Get Orders',
        description: 'Your customers send orders via WhatsApp, just as they always have. No changes for them.',
    },
    {
        icon: <Save className="h-10 w-10 text-primary" />,
        title: 'Auto-Saved',
        description: 'OrderEase automatically detects and saves order details into a simple, clean dashboard for you.',
    },
    {
        icon: <CheckCircle className="h-10 w-10 text-primary" />,
        title: 'Track & Fulfill',
        description: 'Confirm orders, update their status, and keep everything neatly organized from one place.',
    }
];

export function HowItWorksSection() {
    return (
        <section className="w-full py-20 md:py-28 lg:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center space-y-6 text-center mb-12 md:mb-16">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl md:text-5xl">
                            Simple, Automatic, and Clear.
                        </h2>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                            See how OrderEase simplifies your workflow in three easy steps.
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <div className="hidden md:flex absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2">
                        <div className="w-full bg-border"></div>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3 md:gap-12 relative">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <CardHeader className="items-center">
                                        <div className="bg-primary/10 p-4 rounded-full mb-4 ring-8 ring-background">
                                            {step.icon}
                                        </div>
                                        <CardTitle className="text-xl">{index + 1}. {step.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{step.description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}