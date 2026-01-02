import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1 py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2 text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Privacy Policy for Ordlyo</h1>
                <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>

            <div className="space-y-8 text-muted-foreground">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
                    <p>
                    Welcome to Ordlyo ("we," "our," or "us"). We are committed to protecting your privacy and handling your personal data in an open and transparent manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and sign up for our waitlist. By using our service, you agree to the collection and use of information in accordance with this policy.
                    </p>
                </div>
                
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-foreground">2. Information We Collect</h2>
                    <p>
                    We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services. The personal information that we collect depends on the context of your interactions with us and the choices you make.
                    </p>
                    <ul className="list-disc list-inside space-y-1 pl-4">
                        <li><strong>Waitlist Information:</strong> When you join our waitlist, we collect your email address. You may also voluntarily provide additional information, such as what you sell, your average daily order volume, your current order tracking methods, and your opinion on pricing.</li>
                        <li><strong>Future Service Data:</strong> When the Ordlyo service is live, we will process order information sent via WhatsApp on your behalf. This data will include customer names, phone numbers, order items, and shipping addresses, and will be strictly governed by our Terms of Service and this Privacy Policy.</li>
                    </ul>
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-foreground">3. How We Use Your Information</h2>
                    <p>
                    We use the information we collect for various business purposes, including to:
                    </p>
                    <ul className="list-disc list-inside space-y-1 pl-4">
                        <li>Send you information about our product, including launch announcements and updates.</li>
                        <li>Communicate with you and respond to your inquiries.</li>
                        <li>Analyze survey data to better understand our target audience and refine our product offering.</li>
                        <li>For the future service, to create and manage your account and process orders on your behalf.</li>
                        <li>Prevent fraudulent activity and ensure the security of our website.</li>
                    </ul>
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-foreground">4. Will Your Information Be Shared With Anyone?</h2>
                    <p>
                    We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell your personal information. We may share your data with third-party service providers that perform services for us or on our behalf and require access to such information to do that work (e.g., email delivery services).
                    </p>
                </div>
                
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-foreground">5. How We Keep Your Information Safe</h2>
                    <p>
                    We have implemented appropriate administrative, technical, and physical security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure. We cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.
                    </p>
                </div>

                 <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-foreground">6. Your Privacy Rights</h2>
                    <p>
                    You may at any time review or change the information in your account or terminate your account. If you are on our waitlist, you can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us using the details provided below.
                    </p>
                </div>
                
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-foreground">7. Updates to This Policy</h2>
                     <p>
                    We may update this privacy policy from time to time. The updated version will be indicated by an updated "Last updated" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.
                    </p>
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-foreground">8. Contact Us</h2>
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
