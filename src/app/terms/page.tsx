import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Foydalanish shartlari | CallMind",
  description: "CallMind xizmatidan foydalanish shartlari va qoidalari",
};

export default function TermsPage() {
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
              Foydalanish shartlari
            </h1>
            <p className="text-text-secondary">
              Oxirgi yangilanish: 2026-yil, yanvar
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-8">
            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white mb-4">1. Umumiy qoidalar</h2>
              <p className="text-text-secondary leading-relaxed">
                Ushbu Foydalanish shartlari {SITE_CONFIG.name} xizmatidan foydalanish qoidalarini
                belgilaydi. Xizmatdan foydalanish orqali siz ushbu shartlarga rozilik bildirasiz.
                Agar siz ushbu shartlarga rozi bo&apos;lmasangiz, iltimos, xizmatdan foydalanmang.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white mb-4">2. Xizmat ta&apos;rifi</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                {SITE_CONFIG.name} quyidagi xizmatlarni taqdim etadi:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Qo&apos;ng&apos;iroqlarni yozib olish va saqlash</li>
                <li>AI yordamida nutqni matnga aylantirish (transkripsiya)</li>
                <li>Suhbatlarni tahlil qilish va baholash</li>
                <li>Operatorlar samaradorligini o&apos;lchash</li>
                <li>Hisobotlar va analitika</li>
                <li>CRM tizimlar bilan integratsiya</li>
              </ul>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white mb-4">3. Ro&apos;yxatdan o&apos;tish</h2>
              <p className="text-text-secondary leading-relaxed">
                Xizmatdan foydalanish uchun ro&apos;yxatdan o&apos;tish talab etiladi. Siz to&apos;g&apos;ri va to&apos;liq
                ma&apos;lumotlar taqdim etishga majbursiz. Akkauntingiz xavfsizligi uchun siz javobgarsiz.
                Parolingizni boshqalar bilan baham ko&apos;rmang va shubhali faoliyat haqida darhol
                xabar bering.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white mb-4">4. Foydalanuvchi majburiyatlari</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Xizmatdan foydalanuvchi sifatida siz quyidagilarga rozilik bildirasiz:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Qo&apos;ng&apos;iroqlarni yozib olish uchun zarur ruxsatlarni olish</li>
                <li>Mahalliy qonunchilikka rioya qilish</li>
                <li>Xizmatni noqonuniy maqsadlarda ishlatmaslik</li>
                <li>Boshqa foydalanuvchilar huquqlarini hurmat qilish</li>
                <li>Tizim xavfsizligini buzmaslik</li>
                <li>To&apos;lov majburiyatlarini o&apos;z vaqtida bajarish</li>
              </ul>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white mb-4">5. Taqiqlangan harakatlar</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Quyidagi harakatlar taqiqlanadi:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Xizmatni spam yoki zararli maqsadlarda ishlatish</li>
                <li>Tizimga ruxsatsiz kirish yoki buzish urinishlari</li>
                <li>Soxta ma&apos;lumotlar taqdim etish</li>
                <li>Boshqa foydalanuvchilar ma&apos;lumotlarini o&apos;g&apos;irlash</li>
                <li>Xizmatni qayta sotish yoki litsenziyasiz tarqatish</li>
                <li>Zararli dasturlarni yuklash yoki tarqatish</li>
              </ul>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white mb-4">6. To&apos;lov shartlari</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Xizmat pullik asosda taqdim etiladi:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>To&apos;lov har oy oxirida tahlil qilingan qo&apos;ng&apos;iroqlar soniga qarab amalga oshiriladi</li>
                <li>Narxlar saytda ko&apos;rsatilgan tariflar asosida belgilanadi</li>
                <li>To&apos;lov bank o&apos;tkazmasi, Click yoki Payme orqali amalga oshiriladi</li>
                <li>To&apos;lov kechiktirilsa, xizmat vaqtincha to&apos;xtatilishi mumkin</li>
                <li>Qaytarish siyosati individual holatlarda ko&apos;rib chiqiladi</li>
              </ul>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white mb-4">7. Intellektual mulk</h2>
              <p className="text-text-secondary leading-relaxed">
                {SITE_CONFIG.name} platformasi, dizayni, kodi va kontenti bizning intellektual
                mulkimiz hisoblanadi. Siz xizmatdan foydalanish huquqini olasiz, lekin uni nusxalash,
                o&apos;zgartirish yoki tarqatish taqiqlanadi. Sizning yuklagan ma&apos;lumotlaringiz
                (qo&apos;ng&apos;iroq yozuvlari) sizning mulkingiz bo&apos;lib qoladi.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white mb-4">8. Xizmat kafolati</h2>
              <p className="text-text-secondary leading-relaxed">
                Biz xizmat sifatini yuqori darajada ushlab turishga intilamiz. Ammo xizmat
                &quot;mavjud holati&quot; asosida taqdim etiladi. Biz texnik nosozliklar yoki
                to&apos;xtashlar uchun to&apos;liq javobgarlikni o&apos;z zimmamizga olmaymiz. Muhim
                texnik ishlar haqida oldindan xabar beramiz.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white mb-4">9. Javobgarlikni cheklash</h2>
              <p className="text-text-secondary leading-relaxed">
                {SITE_CONFIG.name} xizmatdan foydalanish natijasida yuzaga kelishi mumkin bo&apos;lgan
                bilvosita zararlar uchun javobgar emas. Bizning maksimal javobgarligimiz oxirgi
                3 oy davomida siz to&apos;lagan summa bilan cheklanadi.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white mb-4">10. Shartnomani bekor qilish</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Shartnoma quyidagi holatlarda bekor qilinishi mumkin:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Siz istalgan vaqtda xizmatdan voz kechishingiz mumkin</li>
                <li>Shartlar buzilganda biz xizmatni to&apos;xtatishimiz mumkin</li>
                <li>To&apos;lov 30 kundan ortiq kechiktirilganda</li>
                <li>Noqonuniy faoliyat aniqlanganda</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                Bekor qilingandan so&apos;ng, ma&apos;lumotlaringiz 30 kun ichida o&apos;chiriladi.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white mb-4">11. O&apos;zgartirishlar</h2>
              <p className="text-text-secondary leading-relaxed">
                Biz ushbu shartlarni vaqti-vaqti bilan o&apos;zgartirishimiz mumkin. Muhim o&apos;zgarishlar
                haqida kamida 14 kun oldin xabar beramiz. O&apos;zgarishlardan keyin xizmatdan
                foydalanishni davom ettirsangiz, yangi shartlarga rozilik bildirilgan hisoblanadi.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white mb-4">12. Qonunchilik</h2>
              <p className="text-text-secondary leading-relaxed">
                Ushbu shartnoma O&apos;zbekiston Respublikasi qonunchiligiga bo&apos;ysunadi. Nizolar
                avval muzokaralar orqali, keyin O&apos;zbekiston sudlari orqali hal qilinadi.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white mb-4">13. Bog&apos;lanish</h2>
              <p className="text-text-secondary leading-relaxed">
                Foydalanish shartlari bo&apos;yicha savollaringiz bo&apos;lsa, biz bilan bog&apos;laning:
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
