"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
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
  name: z.string().min(1, "required"),
  email: z.string().email("invalidEmail"),
  date: z.string().min(1, "required"),
  certLevel: z.string().min(1, "required"),
  requirements: z.string().optional(),
});

type BookingForm = z.infer<typeof bookingSchema>;

const depthKeys = ["coralGardens", "deepWall", "electricWreck", "nightDescent"] as const;
const certKeys = ["openWater", "advanced", "rescue", "divemaster", "instructor"] as const;

export default function BookPage() {
  const t = useTranslations("booking");
  const [selectedDepths, setSelectedDepths] = useState<string[]>([depthKeys[0]]);
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
    console.log("Booking:", { ...data, depths: selectedDepths });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-[1280px] mx-auto px-8 py-24 text-center">
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
        <h2 className="text-white text-3xl font-bold">{t("successTitle")}</h2>
        <p className="text-[var(--text-secondary)] mt-4 max-w-md mx-auto">
          {t("successDescription")}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-[1280px] mx-auto px-8 py-12">
      <div className="text-center mb-12">
        <SectionLabel text={t("sectionLabel")} />
        <h1 className="font-serif italic">
          <span className="block text-white text-3xl sm:text-5xl font-bold">{t("headingLine1")}</span>
          <span className="block text-[var(--accent-cyan)] text-3xl sm:text-5xl font-bold">
            {t("headingLine2")}
          </span>
        </h1>
        <p className="text-[var(--text-secondary)] text-center max-w-[600px] mx-auto mt-4">
          {t("subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
          <GlassCard className="p-6 sm:p-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <p className="mb-4">
                  <span className="text-[var(--accent-cyan)] text-xl font-bold">01</span>
                  <span className="text-white text-xl font-bold ml-3">{t("section01")}</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormInput label={t("fullName")} placeholder={t("fullNamePlaceholder")} register={register("name")} error={errors.name?.message} />
                  <FormInput label={t("emailAddress")} type="email" placeholder={t("emailPlaceholder")} register={register("email")} error={errors.email?.message} />
                </div>
              </div>

              <div className="mt-10">
                <p className="mb-4">
                  <span className="text-[var(--accent-cyan)] text-xl font-bold">02</span>
                  <span className="text-white text-xl font-bold ml-3">{t("section02")}</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormInput label={t("preferredDate")} type="date" register={register("date")} error={errors.date?.message} />
                  <div className="w-full">
                    <label className="block text-sm text-[var(--text-secondary)] font-medium mb-2">{t("certLevel")}</label>
                    <select className="w-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-white rounded-xl px-4 py-3 transition-all duration-200 focus:border-[var(--accent-cyan)] focus:ring-1 focus:ring-[var(--accent-cyan)]/20 focus:outline-none appearance-none" {...register("certLevel")}>
                      <option value="">{t("selectLevel")}</option>
                      {certKeys.map((key) => (<option key={key} value={key}>{t(`certOptions.${key}`)}</option>))}
                    </select>
                    {errors.certLevel && <p className="text-red-400 text-sm mt-1">{errors.certLevel.message}</p>}
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] font-medium mt-6 mb-3">{t("selectDepths")}</p>
                <div className="flex flex-wrap gap-3">
                  {depthKeys.map((key) => (<TagPill key={key} label={t(`depths.${key}`)} selected={selectedDepths.includes(key)} onClick={() => toggleDepth(key)} />))}
                </div>
                {selectedDepths.length === 0 && <p className="text-red-400 text-sm mt-1">{t("depthError")}</p>}
              </div>

              <div className="mt-10">
                <p className="mb-4">
                  <span className="text-[var(--accent-cyan)] text-xl font-bold">03</span>
                  <span className="text-white text-xl font-bold ml-3">{t("section03")}</span>
                </p>
                <FormInput as="textarea" label={t("specialRequirements")} placeholder={t("specialReqPlaceholder")} rows={4} register={register("requirements")} />
              </div>

              <Button variant="primary" fullWidth type="submit" className="mt-8 uppercase tracking-wider">{t("submit")}</Button>
              <p className="text-[var(--text-muted)] text-xs text-center mt-3">{t("submitNote")}</p>
            </form>
          </GlassCard>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="relative rounded-2xl overflow-hidden h-[280px]">
            <img src="/media/jesse-van-vliet-mXU0lVbz6gA-unsplash.jpg" alt="Diver" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">{t("sidebar.visualLog")}</p>
              <h3 className="text-white text-2xl font-semibold mt-1">{t("sidebar.hiddenReef")}</h3>
            </div>
          </div>
          <h3 className="text-white text-2xl font-semibold mt-2">{t("sidebar.whatToExpect")}</h3>
          <FeatureRow icon={Shield} title={t("sidebar.eliteEquipment")} description={t("sidebar.eliteEquipmentDesc")} />
          <FeatureRow icon={Anchor} title={t("sidebar.yachtTransfer")} description={t("sidebar.yachtTransferDesc")} />
          <FeatureRow icon={KeyRound} title={t("sidebar.exclusiveAccess")} description={t("sidebar.exclusiveAccessDesc")} />
          <GlassCard className="p-4">
            <div className="flex justify-between items-center">
              <span className="text-xs uppercase tracking-wider text-[var(--text-muted)]">{t("sidebar.oceanTemp")}</span>
              <span className="text-[var(--accent-cyan)] text-2xl font-bold">28&deg;C</span>
            </div>
            <div className="w-full h-1.5 bg-[var(--bg-primary)] rounded-full mt-3">
              <div className="w-[70%] h-full bg-gradient-to-r from-blue-500 via-[var(--accent-cyan)] to-orange-400 rounded-full" />
            </div>
            <p className="text-[var(--text-muted)] text-xs mt-2">{t("sidebar.tempOptimal")}</p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
