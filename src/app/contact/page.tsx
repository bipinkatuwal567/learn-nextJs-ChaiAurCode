"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ChangeEvent, useState } from "react";

export default function ContactUsPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: ChangeEvent<HTMLFormElement>){
    event.preventDefault();
    console.log("Submitted", {email, message})
  }
  return (
    <div className="bg-black relative w-full py-12 pt-36 min-h-screen">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="max-w-2xl mx-auto p-4 relative z-10">
      <h2 className="text-lg text-center sm:text-4xl lg:text-6xl font-sans mb-8 text-white font-semibold">Contact Us</h2>
      <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg text-white border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            required
             />
            <textarea 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border text-white border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            required
            />
            <button className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">Send Message</button>
        </form>
      </div>
    </div>
  );
}
