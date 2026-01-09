import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Maxfiylik siyosati | CallMind",
  description: "CallMind maxfiylik siyosati - shaxsiy ma'lumotlaringiz qanday himoyalanishi haqida",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Bosh sahifaga qaytish
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Maxfiylik siyosati
            </h1>
            <p className="text-text-secondary">
              Oxirgi yangilanish: 2026-yil, yanvar
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-8">
            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white mb-4">1. Kirish</h2>
              <p className="text-text-secondary leading-relaxed">
                {SITE_CONFIG.name} (&quot;biz&quot;, &quot;bizning&quot;, &quot;Kompaniya&quot;) sizning maxfiyligingizni
                hurmat qiladi va shaxsiy ma&apos;lumotlaringizni himoya qilishga intiladi. Ushbu Maxfiylik
                siyosati biz qanday ma&apos;lumotlarni to&apos;plashimiz, ulardan qanday foydalanishimiz va
                ularni qanday himoya qilishimiz haqida ma&apos;lumot beradi.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white mb-4">2. To&apos;planadigan ma&apos;lumotlar</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Biz quyidagi turdagi ma&apos;lumotlarni to&apos;plashimiz mumkin:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Ism va familiya</li>
                <li>Elektron pochta manzili</li>
                <li>Telefon raqami</li>
                <li>Kompaniya nomi va lavozimi</li>
                <li>Qo&apos;ng&apos;iroq yozuvlari va transkripsiyalari (faqat sizning roziligingiz bilan)</li>
                <li>Xizmatdan foydalanish statistikasi</li>
                <li>IP manzil va qurilma ma&apos;lumotlari</li>
              </ul>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white mb-4">3. Ma&apos;lumotlardan foydalanish</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                To&apos;plangan ma&apos;lumotlar quyidagi maqsadlarda ishlatiladi:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Xizmatlarni taqdim etish va yaxshilash</li>
                <li>Qo&apos;ng&apos;iroqlarni tahlil qilish va hisobotlar yaratish</li>
                <li>Mijozlar bilan bog&apos;lanish va qo&apos;llab-quvvatlash</li>
                <li>Yangi xususiyatlar va takliflar haqida xabar berish</li>
                <li>Xizmat sifatini nazorat qilish</li>
                <li>Qonuniy talablarni bajarish</li>
              </ul>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white mb-4">4. Ma&apos;lumotlar xavfsizligi</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Biz sizning ma&apos;lumotlaringizni himoya qilish uchun quyidagi choralarni ko&apos;ramiz:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>SSL/TLS shifrlash orqali ma&apos;lumotlarni uzatish</li>
                <li>Ma&apos;lumotlar bazasini shifrlash (AES-256)</li>
                <li>Muntazam xavfsizlik auditi</li>
                <li>Xodimlarga kirish huquqlarini cheklash</li>
                <li>Ikki faktorli autentifikatsiya</li>
              </ul>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white mb-4">5. Ma&apos;lumotlarni saqlash</h2>
              <p className="text-text-secondary leading-relaxed">
                Sizning ma&apos;lumotlaringiz xavfsiz serverlarda saqlanadi. Qo&apos;ng&apos;iroq yozuvlari va
                transkripsiyalar shartnoma muddati davomida saqlanadi. Shartnoma tugagandan so&apos;ng,
                barcha ma&apos;lumotlar 30 kun ichida o&apos;chiriladi, agar qonun boshqacha talab qilmasa.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white mb-4">6. Uchinchi tomonlar</h2>
              <p className="text-text-secondary leading-relaxed">
                Biz sizning ma&apos;lumotlaringizni uchinchi tomonlarga sotmaymiz yoki ijaraga bermaymiz.
                Ma&apos;lumotlar faqat xizmat ko&apos;rsatish uchun zarur bo&apos;lgan ishonchli hamkorlar bilan
                (masalan, bulutli xizmat provayderlari) baham ko&apos;rilishi mumkin. Barcha hamkorlar
                maxfiylik shartnomalarini imzolaydilar.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white mb-4">7. Sizning huquqlaringiz</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Siz quyidagi huquqlarga egasiz:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>O&apos;z ma&apos;lumotlaringizga kirish huquqi</li>
                <li>Ma&apos;lumotlarni tuzatish huquqi</li>
                <li>Ma&apos;lumotlarni o&apos;chirish huquqi</li>
                <li>Ma&apos;lumotlarni eksport qilish huquqi</li>
                <li>Marketing xabarlaridan voz kechish huquqi</li>
              </ul>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white mb-4">8. Cookie fayllar</h2>
              <p className="text-text-secondary leading-relaxed">
                Saytimiz cookie fayllardan foydalanadi. Bular foydalanuvchi tajribasini yaxshilash,
                statistikani yig&apos;ish va xizmatni takomillashtirish uchun ishlatiladi. Siz brauzer
                sozlamalarida cookie fayllarni o&apos;chirib qo&apos;yishingiz mumkin.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white mb-4">9. O&apos;zgartirishlar</h2>
              <p className="text-text-secondary leading-relaxed">
                Biz ushbu Maxfiylik siyosatini vaqti-vaqti bilan yangilashimiz mumkin. Muhim
                o&apos;zgarishlar haqida sizga elektron pochta orqali xabar beramiz. Yangilangan
                versiya saytda e&apos;lon qilingan sanadan boshlab kuchga kiradi.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white mb-4">10. Bog&apos;lanish</h2>
              <p className="text-text-secondary leading-relaxed">
                Maxfiylik siyosati bo&apos;yicha savollaringiz bo&apos;lsa, biz bilan bog&apos;laning:
              </p>
              <div className="mt-4 space-y-2 text-text-secondary">
                <p>Email: <a href={`mailto:${SITE_CONFIG.email}`} className="text-accent hover:underline">{SITE_CONFIG.email}</a></p>
                <p>Telefon: <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`} className="text-accent hover:underline">{SITE_CONFIG.phone}</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
