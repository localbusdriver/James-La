import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MailResponse from "./MailResponse";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, { message: "This field has to be filled." }),
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  message: z.string().min(1, { message: "This field has to be filled." }),
});

const ContactForm = () => {
  const [emailEmoji, setEmailEmoji] = useState<string>("📭");
  const [loading, setLoading] = useState<boolean>(false);
  const [mailStatus, setMailStatus] = useState<number | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { name, email, message } = values;
    setLoading(true);
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, email: email, message: message }),
    });
    if (response.status === 200) {
      setLoading(false);
      form.reset();
      setEmailEmoji("📫");
      setMailStatus(200);
      setInterval(() => {
        setMailStatus(null);
        setEmailEmoji("📭");
      }, 5000);
    } else {
      setLoading(false);
      console.error(`Server error: ${response.json()}`);
      setEmailEmoji("📭");
      setMailStatus(response.status);
      setInterval(() => {
        setMailStatus(null);
      }, 10000);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="border rounded-xl space-y-7 px-10 py-6 bg-muted md:min-w-[432px]"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} className="w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="example@example.com"
                  {...field}
                  className="w-full"
                />
              </FormControl>
              <FormDescription>
                Enter your email so I can get back to you!
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Type your message here." {...field} />
              </FormControl>
              <FormDescription>
                I&apos;ll get back to you as soon as I can!
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div
          className=""
          onMouseEnter={() => !mailStatus && setEmailEmoji("📬")}
          onMouseLeave={() => !mailStatus && setEmailEmoji("📭")}
        >
          <Button
            type="submit"
            variant="outline"
            className="px-6 text-secondary-foreground hover:bg-primary w-full hover:content-[📬]"
          >
            Send&nbsp;
            {emailEmoji}
          </Button>
        </div>
        {mailStatus && <MailResponse status={mailStatus} />}
      </form>
    </Form>
  );
};

export default ContactForm;
