"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import Solution from "@/components/sections/Solution";
import Functions from "@/components/sections/Functions";
import Stats from "@/components/sections/Stats";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Modal from "@/components/ui/Modal";
import LeadForm from "@/components/ui/LeadForm";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header onCtaClick={openModal} />

      <main>
        <Hero onCtaClick={openModal} />
        <Problems />
        <Solution />
        <Functions />
        <Stats />
        <Pricing onCtaClick={openModal} />
        <FAQ />
        <CTA onCtaClick={openModal} />
      </main>

      <Footer />

      {/* Lead Form Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Bepul sinab ko'ring"
      >
        <p className="text-text-secondary mb-6">
          Ma'lumotlaringizni qoldiring, biz siz bilan tez orada bog'lanamiz
        </p>
        <LeadForm onSuccess={closeModal} />
      </Modal>
    </>
  );
}
