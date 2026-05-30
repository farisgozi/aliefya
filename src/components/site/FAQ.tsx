"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeader from "./SectionHeader";
import { faqs } from "@/data/site";

export default function FAQ() {
  return (
    <section className="relative py-24 md:py-32 bg-bone/60">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeader
              eyebrow="Pertanyaan sering muncul"
              title={
                <>
                  Hal-hal yang biasa <em className="not-italic text-clay">ditanyakan</em>{" "}
                  pertama kali.
                </>
              }
              description="Belum ketemu jawabannya? Kirim WhatsApp, kami jawab personal."
            />
          </div>
          <div className="md:col-span-7">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="border-b border-ink/10"
                >
                  <AccordionTrigger className="text-left font-display text-xl py-5 hover:no-underline data-[state=open]:text-clay">
                    <span className="flex items-center gap-4 text-ink data-[state=open]:text-clay">
                      <span className="font-mono text-xs text-ink/40 w-8 shrink-0">
                        0{i + 1}
                      </span>
                      {f.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pl-12 pb-5 text-ink/70 text-base">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
