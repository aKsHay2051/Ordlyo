import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { MessageSquare, Save, CheckCircle } from 'lucide-react';

const steps = [
    {
        icon: <MessageSquare className="h-8 w-8 text-accent" />,
        title: 'Step 1: Get Orders',
        description: 'Your customers send their orders via WhatsApp, just like they always do. No changes for them.',
    },
    {
        icon: <Save className="h-8 w-8 text-accent" />,
        title: 'Step 2: Auto-Saved',
        description: 'OrderEase automatically detects and saves the order details into a simple, clean dashboard for you.',
    },
    {
        icon: <CheckCircle className="h-8 w-8 text-accent" />,
        title: 'Step 3: Track & Fulfill',
        description: 'Confirm the order, update its status (Packed, Shipped, Delivered), and keep everything organized.',
    }
];

export function HowItWorksSection() {
    const previewImage = PlaceHolderImages.find(img => img.id === 'app-preview');

    return (
        <section className="w-full py-12 sm:py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center space-y-8 text-center mb-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl md:text-5xl">
                            Simple, Automatic, and Clear.
                        </h2>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                            See how OrderEase simplifies your workflow in three easy steps.
                        </p>
                    </div>
                </div>

                <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                    <div className="flex flex-col gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="flex items-start gap-4 text-left">
                                <div className="flex-shrink-0">{step.icon}</div>
                                <div>
                                    <h3 className="text-lg font-bold">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-center">
                        {previewImage && (
                            <Card className="overflow-hidden shadow-2xl rounded-xl">
                                <Image
                                    src={previewImage.imageUrl}
                                    alt={previewImage.description}
                                    data-ai-hint={previewImage.imageHint}
                                    width={1000}
                                    height={750}
                                    className="object-cover"
                                />
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
