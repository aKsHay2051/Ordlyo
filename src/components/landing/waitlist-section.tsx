"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState, useTransition } from "react";
import { submitWaitlist } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { waitlistSchema, WaitlistFormValues } from "@/lib/validators";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, CheckCircle } from "lucide-react";

export function WaitlistSection() {
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      contact: "",
      feedback: "",
    },
  });

  const onSubmit: SubmitHandler<WaitlistFormValues> = (data) => {
    startTransition(async () => {
      const result = await submitWaitlist(data);
      if (result.success) {
        setIsSuccess(true);
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: result.message || "There was a problem with your submission.",
        });
      }
    });
  };
  
  // Reset success state if user starts typing again
  useEffect(() => {
    if (form.formState.isDirty) {
      setIsSuccess(false);
    }
  }, [form.formState.isDirty]);


  return (
    <section id="waitlist" className="w-full py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-2xl mx-auto shadow-xl bg-card rounded-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">
              Join the Early Access Waitlist
            </CardTitle>
            <CardDescription className="md:text-lg text-muted-foreground">
              Be the first to know when OrderEase is available.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center space-y-4 text-center p-8 bg-green-50 rounded-lg">
                <CheckCircle className="h-16 w-16 text-green-600" />
                <h3 className="text-2xl font-bold">You're on the list!</h3>
                <p className="text-muted-foreground">Thank you for signing up. We'll be in touch with updates soon.</p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="contact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email or Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="you@example.com or your WhatsApp number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="feedback"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          What’s the hardest part of managing orders today? (Optional)
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., 'Keeping track of payments', 'Forgetting to follow up'..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full font-bold bg-accent text-accent-foreground hover:bg-accent/90" size="lg" disabled={isPending}>
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Get Early Access"
                    )}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    No spam. Only early access updates.
                  </p>
                </form>
              </Form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
