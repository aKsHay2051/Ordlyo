"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState, useTransition } from "react";
import { submitWaitlist } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { waitlistSchema, WaitlistFormValues } from "@/lib/validators";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Loader2, CheckCircle } from "lucide-react";

export function WaitlistSection() {
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      contact: "",
      productType: undefined,
      dailyOrders: undefined,
      trackingMethod: undefined,
      priceComfort: undefined,
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
            <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Join the Early Access Waitlist
            </CardTitle>
            <CardDescription className="md:text-lg text-muted-foreground">
              Be the first to know when Ordlyo is available.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center space-y-4 text-center p-8 bg-green-50 rounded-lg">
                <CheckCircle className="h-16 w-16 text-green-600" />
                <h3 className="text-2xl font-bold">You're on the list!</h3>
                <p className="text-muted-foreground">Thank you for signing up. We'll be in touch on WhatsApp with updates soon.</p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="contact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your WhatsApp number</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 12345 67890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="productType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What do you sell? (Optional)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select what you sell" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Clothing / Apparel">Clothing / Apparel</SelectItem>
                            <SelectItem value="Food / Bakery">Food / Bakery</SelectItem>
                            <SelectItem value="Accessories">Accessories</SelectItem>
                            <SelectItem value="Crafts / Handmade">Crafts / Handmade</SelectItem>
                            <SelectItem value="Reselling">Reselling</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="dailyOrders"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>About how many orders do you get per day? (Optional)</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl><RadioGroupItem value="1–5" /></FormControl>
                              <FormLabel className="font-normal">1–5</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl><RadioGroupItem value="6–15" /></FormControl>
                              <FormLabel className="font-normal">6–15</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl><RadioGroupItem value="16–30" /></FormControl>
                              <FormLabel className="font-normal">16–30</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl><RadioGroupItem value="30+" /></FormControl>
                              <FormLabel className="font-normal">30+</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="trackingMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How do you manage orders right now? (Optional)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your current method" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="WhatsApp chats only">WhatsApp chats only</SelectItem>
                            <SelectItem value="Excel / Google Sheets">Excel / Google Sheets</SelectItem>
                            <SelectItem value="Notes / diary">Notes / diary</SelectItem>
                            <SelectItem value="Memory">Memory</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="priceComfort"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What price would feel reasonable for this? (Optional)</FormLabel>
                         <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a price range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="₹99 / month">₹99 / month</SelectItem>
                            <SelectItem value="₹199 / month">₹199 / month</SelectItem>
                            <SelectItem value="₹299 / month">₹299 / month</SelectItem>
                            <SelectItem value="₹499 / month">₹499 / month</SelectItem>
                            <SelectItem value="Not sure yet">Not sure yet</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full font-bold bg-primary text-primary-foreground hover:bg-primary/90" size="lg" disabled={isPending}>
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
                    We’ll contact you only on WhatsApp for product updates. No spam.
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
