"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Shield, Anchor, KeyRound, CheckCircle } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import FormInput from "@/components/ui/FormInput";
import TagPill from "@/components/ui/TagPill";
import SectionLabel from "@/components/ui/SectionLabel";
import FeatureRow from "@/components/ui/FeatureRow";
import { Button } from "@/components/ui/Button";

const bookingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  date: z.string().min(1, "Date is required"),
  certLevel: z.string().min(1, "Certification level is required"),
  requirements: z.string().optional(),
});

type BookingForm = z.infer<typeof bookingSchema>;

const depthOptions = ["CORAL GARDENS", "DEEP WALL", "ELECTRIC WRECK", "NIGHT DESCENT"];
const certLevels = [
  "Open Water Diver",
  "Advanced Open Water",
  "Rescue Diver",
  "Divemaster",
  "Instructor",
];

export default function BookPage() {
  const [selectedDepths, setSelectedDepths] = useState<string[]>(["CORAL GARDENS"]);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
  });

  const toggleDepth = (depth: string) => {
    setSelectedDepths((prev) =>
      prev.includes(depth) ? prev.filter((d) => d !== depth) : [...prev, depth]
    );
  };

  const onSubmit = (data: BookingForm) => {
    if (selectedDepths.length === 0) return;
    // TODO: POST to /api/booking
    console.log("Booking:", { ...data, depths: selectedDepths });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-[1280px] mx-auto px-8 py-24 text-center">
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
        <h2 className="text-white text-3xl font-bold">Inquiry Received!</h2>
        <p className="text-[var(--text-secondary)] mt-4 max-w-md mx-auto">
          Our Master Divers will contact you within 4 hours to finalize your itinerary.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-[1280px] mx-auto px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <SectionLabel text="REQUEST AN EXPEDITION" />
        <h1 className="font-serif italic">
          <span className="block text-white text-3xl sm:text-5xl font-bold">Descend into</span>
          <span className="block text-[var(--accent-cyan)] text-3xl sm:text-5xl font-bold">
            The Abyss
          </span>
        </h1>
        <p className="text-[var(--text-secondary)] text-center max-w-[600px] mx-auto mt-4">
          Nha Trang&apos;s premier high-end diving collective. Fill out your dive profile below to
          begin your custom-tailored underwater journey.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* LEFT — Form */}
        <div className="lg:col-span-3">
          <GlassCard className="p-6 sm:p-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Section 01 */}
              <div>
                <p className="mb-4">
                  <span className="text-[var(--accent-cyan)] text-xl font-bold">01</span>
                  <span className="text-white text-xl font-bold ml-3">Diver Identity</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormInput
                    label="Full Name"
                    placeholder="Commander Cousteau"
                    register={register("name")}
                    error={errors.name?.message}
                  />
                  <FormInput
                    label="Email Address"
                    type="email"
                    placeholder="explorer@abyss.com"
                    register={register("email")}
                    error={errors.email?.message}
                  />
                </div>
              </div>

              {/* Section 02 */}
              <div className="mt-10">
                <p className="mb-4">
                  <span className="text-[var(--accent-cyan)] text-xl font-bold">02</span>
                  <span className="text-white text-xl font-bold ml-3">Expedition Profile</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormInput
                    label="Preferred Date"
                    type="date"
                    register={register("date")}
                    error={errors.date?.message}
                  />
                  <div className="w-full">
                    <label className="block text-sm text-[var(--text-secondary)] font-medium mb-2">
                      Certification Level
                    </label>
                    <select
                      className="w-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-white rounded-xl px-4 py-3 transition-all duration-200 focus:border-[var(--accent-cyan)] focus:ring-1 focus:ring-[var(--accent-cyan)]/20 focus:outline-none appearance-none"
                      {...register("certLevel")}
                    >
                      <option value="">Select level</option>
                      {certLevels.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                    {errors.certLevel && (
                      <p className="text-red-400 text-sm mt-1">{errors.certLevel.message}</p>
                    )}
                  </div>
                </div>

                <p className="text-sm text-[var(--text-secondary)] font-medium mt-6 mb-3">
                  Select Your Depths
                </p>
                <div className="flex flex-wrap gap-3">
                  {depthOptions.map((depth) => (
                    <TagPill
                      key={depth}
                      label={depth}
                      selected={selectedDepths.includes(depth)}
                      onClick={() => toggleDepth(depth)}
                    />
                  ))}
                </div>
                {selectedDepths.length === 0 && (
                  <p className="text-red-400 text-sm mt-1">Select at least one depth</p>
                )}
              </div>

              {/* Section 03 */}
              <div className="mt-10">
                <p className="mb-4">
                  <span className="text-[var(--accent-cyan)] text-xl font-bold">03</span>
                  <span className="text-white text-xl font-bold ml-3">Equipment &amp; Support</span>
                </p>
                <FormInput
                  as="textarea"
                  label="Special Requirements"
                  placeholder="Tell us about your gear needs or medical considerations..."
                  rows={4}
                  register={register("requirements")}
                />
              </div>

              <Button
                variant="primary"
                fullWidth
                type="submit"
                className="mt-8 uppercase tracking-wider"
              >
                SEND INQUIRY
              </Button>
              <p className="text-[var(--text-muted)] text-xs text-center mt-3">
                Our Master Divers will contact you within 4 hours to finalize your itinerary.
              </p>
            </form>
          </GlassCard>
        </div>

        {/* RIGHT — Sidebar */}
        <div className="lg:col-span-2 space-y-6">
          {/* Visual Log Card */}
          <div className="relative rounded-2xl overflow-hidden h-[280px]">
            {/* TODO: underwater diver photo */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a4a] to-[#0d1b2a]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">
                VISUAL LOG
              </p>
              <h3 className="text-white text-2xl font-semibold mt-1">The Hidden Reef</h3>
            </div>
          </div>

          <h3 className="text-white text-2xl font-semibold mt-2">What to Expect</h3>

          <FeatureRow
            icon={Shield}
            title="Elite Equipment"
            description="Access to carbon-fiber tanks and high-performance regulators maintained to aerospace standards."
          />
          <FeatureRow
            icon={Anchor}
            title="Private Yacht Transfer"
            description="Reach secluded dive sites on our custom 50ft vessel with full onboard amenities."
          />
          <FeatureRow
            icon={KeyRound}
            title="Exclusive Access"
            description="We hold permits for restricted areas of the Hon Mun Marine Protected Area."
          />

          {/* Ocean Temperature Widget */}
          <GlassCard className="p-4">
            <div className="flex justify-between items-center">
              <span className="text-xs uppercase tracking-wider text-[var(--text-muted)]">
                CURRENT OCEAN TEMPERATURE
              </span>
              <span className="text-[var(--accent-cyan)] text-2xl font-bold">28&deg;C</span>
            </div>
            <div className="w-full h-1.5 bg-[var(--bg-primary)] rounded-full mt-3">
              <div className="w-[70%] h-full bg-gradient-to-r from-blue-500 via-[var(--accent-cyan)] to-orange-400 rounded-full" />
            </div>
            <p className="text-[var(--text-muted)] text-xs mt-2">
              Conditions optimal for midnight exploration.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
