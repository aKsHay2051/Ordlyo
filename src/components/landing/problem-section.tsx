import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircleWarning, FileText, Hourglass, PackageX } from 'lucide-react';

const painPoints = [
  {
    icon: <MessageCircleWarning className="h-10 w-10 text-destructive" />,
    title: 'Orders lost in chat',
    description: 'Important order details get buried in long conversations, leading to missed sales opportunities.',
  },
  {
    icon: <FileText className="h-10 w-10 text-blue-500" />,
    title: 'Manual copy-pasting',
    description: 'Wasting hours transferring order info from WhatsApp to spreadsheets is slow and prone to errors.',
  },
  {
    icon: <Hourglass className="h-10 w-10 text-yellow-500" />,
    title: 'No order status visibility',
    description: 'Customers constantly ask "Where is my order?", and you have no single place to check and update them.',
  },
  {
    icon: <PackageX className="h-10 w-10 text-red-500" />,
    title: 'Missed or delayed deliveries',
    description: 'Manual mistakes lead to incorrect addresses or forgotten orders, harming your brand reputation.',
  },
];

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
              If you're a small seller, you know the struggle. We're building OrderEase to fix it.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl">
            {painPoints.map((point) => (
              <Card key={point.title} className="flex flex-col items-center text-center p-6 border-0 shadow-none bg-transparent">
                <CardHeader className="p-0 mb-4">
                  {point.icon}
                </CardHeader>
                <CardContent className="p-0">
                  <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
