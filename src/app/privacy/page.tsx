import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1 py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="space-y-2 text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Privacy Policy</h1>
                <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>

            <div className="space-y-8 text-muted-foreground">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
                    <p>
                    Welcome to Ordlyo ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our waitlist and future services.
                    </p>
                </div>
                
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-foreground">2. Information We Collect</h2>
                    <p>
                    We may collect information about you in a variety of ways. The information we may collect on the Service includes:
                    </p>
                    <ul className="list-disc list-inside space-y-1 pl-4">
                        <li><strong>Personal Data:</strong> Personally identifiable information, such as your WhatsApp number, what you sell, and other details you voluntarily give to us when you join our waitlist.</li>
                        <li><strong>Order Data:</strong> When the service is live, we will process order information sent via WhatsApp, including customer name, phone number, order items, and address.</li>
                    </ul>
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-foreground">3. Use of Your Information</h2>
                    <p>
                    Having accurate information permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:
                    </p>
                    <ul className="list-disc list-inside space-y-1 pl-4">
                        <li>Notify you about updates to our service.</li>
                        <li>Create and manage your account and orders.</li>
                        <li>Compile anonymous statistical data and analysis for internal use.</li>
                        <li>Prevent fraudulent transactions and monitor against theft.</li>
                    </ul>
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-foreground">4. Disclosure of Your Information</h2>
                    <p>
                    We do not share your information with any third parties except as necessary to provide the service or as required by law.
                    </p>
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-foreground">5. Security of Your Information</h2>
                    <p>
                    We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
                    </p>
                </div>
                
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-foreground">6. Contact Us</h2>
                    <p>
                    If you have questions or comments about this Privacy Policy, please contact us at [Your Contact Email].
                    </p>
                </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
