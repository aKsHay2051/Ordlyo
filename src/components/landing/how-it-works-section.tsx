import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Save, CheckCircle } from 'lucide-react';

const steps = [
    {
        icon: <MessageSquare className="h-10 w-10 text-primary" />,
        title: 'Customer orders on WhatsApp',
        description: 'Your customers order from you just like they always do. No new apps for them to download.',
    },
    {
        icon: <Save className="h-10 w-10 text-primary" />,
        title: 'Order is saved automatically',
        description: 'Ordlyo detects and saves order details into a simple, clean dashboard for you.',
    },
    {
        icon: <CheckCircle className="h-10 w-10 text-primary" />,
        title: 'You confirm & track status',
        description: 'Confirm orders, update their status, and keep everything neatly organized from one place.',
    }
];

export function HowItWorksSection() {
    return (
        <section className="w-full py-20 md:py-28 lg:py-32 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center space-y-6 text-center mb-12 md:mb-16">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            How It Works
                        </h2>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                            A simple, 3-step process to get you organized.
                        </p>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-3 md:gap-12 relative">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <Card className="w-full bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
                                <CardHeader className="items-center">
                                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                                        {step.icon}
                                    </div>
                                    <CardTitle className="text-xl font-semibold">{step.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
