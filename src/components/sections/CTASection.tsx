"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Zap, LifeBuoy, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import FormInput from "@/components/ui/FormInput";
import { Button } from "@/components/ui/Button";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactForm) => {
    // TODO: Connect to /api/contact endpoint
    console.log("Contact form:", data);
    setSubmitted(true);
  };

  return (
    <section className="relative max-w-[1280px] mx-auto px-8 py-24">
      <div className="absolute -inset-8 -z-10 rounded-3xl overflow-hidden opacity-20">
        <img
          src="/media/neom-J2h9XzF33GI-unsplash.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold">
            <span className="text-white">Ready to</span>
            <br />
            <span className="text-[var(--accent-cyan)]">Plunge?</span>
          </h2>
          <p className="text-[var(--text-secondary)] mt-4">
            Our team of marine scientists is ready to guide you into the abyss. Craft your
            experience tailored to your deepest aspirations.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--accent-cyan)]/10 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-[var(--accent-cyan)]" />
              </div>
              <div>
                <p className="text-white font-semibold">Quick Inquiry</p>
                <p className="text-[var(--text-muted)] text-sm">24h response time</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--accent-cyan)]/10 flex items-center justify-center shrink-0">
                <LifeBuoy className="w-5 h-5 text-[var(--accent-cyan)]" />
              </div>
              <div>
                <p className="text-white font-semibold">Deep Support</p>
                <p className="text-[var(--text-muted)] text-sm">SOS Priority Line</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right column — form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassCard className="p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
                <p className="text-white font-semibold text-lg">Message sent!</p>
                <p className="text-[var(--text-secondary)] mt-2">
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <FormInput
                  label="Name"
                  placeholder="Enter your name"
                  register={register("name")}
                  error={errors.name?.message}
                />
                <FormInput
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  register={register("email")}
                  error={errors.email?.message}
                />
                <FormInput
                  as="textarea"
                  label="Message"
                  rows={4}
                  placeholder="Tell us about your dream dive..."
                  register={register("message")}
                  error={errors.message?.message}
                />
                <Button variant="primary" fullWidth type="submit" className="mt-6">
                  Send Inquiry
                </Button>
              </form>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
