import React, { useState, useEffect } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(3, {
    message: "Message must be at least 3 characters.",
  }),
});

function Contact() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const [buttonText, setButtonText] = useState("Send Message");
  const [status, setStatus] = useState({});

  const onSubmit = async (data) => {
    console.log(
      `Values: ${data}\n${data.name}\n${data.email}\n${data.message}`
    );
    console.log("sending");
    setButtonText("Sending...");

    try {
      let response = await fetch(`https://james-la.me/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
      });

      let result = await response.json();

      if (response.ok) {
        console.log("Message Sent");
        // setTimeout(() => {
        //   setTitle("Sent Message!")
        // }, 10000)
        setStatus({ success: true, message: "Message sent successfully." });
        setButtonText("Send");
      } else {
        console.log(result.status);
        setStatus({ success: false, message: "Message not sent" });
      }
    } catch (error) {
      console.log(error);
      setStatus({ success: false, message: error });
      setButtonText("Send");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus({});
    }, 3000);
    return () => clearTimeout(timer);
  }, [status]);

  return (
    <section id="contact" className="text-left px-32">
      <div className="header pb-20">
        <h2 className="mb-10 text-6xl">Contact</h2>
        <h6>Get in touch with me. I am always open to new opportunities.</h6>
        <h6>Feel free to reach out to me</h6>
      </div>
      <div className="content flex align-left">
        <div id="info" className="w-1/2">
          <h3>Phone:</h3>
          <h4 className="mb-24">(NZ) +64 21 174 9208</h4>

          <h3>Email:</h3>
          <h4 className="mb-24">jamesla200210@gmail.com</h4>

          <h3>Location:</h3>
          <h4 className="mb-24">Wellington, NZ</h4>
        </div>

        <div className="pl-32 w-2/6">
          <h5 className="mb-16 text-xl">Send me a message:</h5>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        {...field}
                        className="bg-black border-2 rounded-none text-white"
                      />
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
                    <FormLabel className="text-white">Email *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        {...field}
                        className="bg-black border-2 rounded-none text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder=""
                        {...field}
                        className="bg-black border-2 rounded-none text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between">
                <p className="text-xs my-auto">Thanks for reaching out!</p>
                <Button
                  type="submit"
                  className="bg-white text-black hover:bg-lb hover:text-white"
                >
                  {buttonText}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
