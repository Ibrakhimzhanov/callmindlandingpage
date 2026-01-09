"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import Button from "./Button";

interface LeadFormProps {
  onSuccess?: () => void;
}

// Формат: +998 XX XXX-XX-XX
const formatPhone = (value: string): string => {
  // Извлекаем только цифры
  let digits = value.replace(/\D/g, "");

  // Убираем 998 если есть в начале (чтобы не дублировалось)
  if (digits.startsWith("998")) {
    digits = digits.slice(3);
  }

  // Ограничиваем до 9 цифр (без кода страны)
  digits = digits.slice(0, 9);

  // Форматируем: XX XXX-XX-XX
  if (digits.length === 0) return "+998 ";
  if (digits.length <= 2) return "+998 " + digits;
  if (digits.length <= 5) return "+998 " + digits.slice(0, 2) + " " + digits.slice(2);
  if (digits.length <= 7) return "+998 " + digits.slice(0, 2) + " " + digits.slice(2, 5) + "-" + digits.slice(5);
  return "+998 " + digits.slice(0, 2) + " " + digits.slice(2, 5) + "-" + digits.slice(5, 7) + "-" + digits.slice(7, 9);
};

export default function LeadForm({ onSuccess }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "+998 ",
    company: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Защита от удаления +998
    if (value.length < 5) {
      setFormData({ ...formData, phone: "+998 " });
      return;
    }
    const formatted = formatPhone(value);
    setFormData({ ...formData, phone: formatted });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Xatolik yuz berdi");
      }

      setStatus("success");
      setFormData({ name: "", phone: "+998 ", company: "" });

      setTimeout(() => {
        onSuccess?.();
      }, 2000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Xatolik yuz berdi");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h4 className="text-xl font-bold text-white mb-2">Rahmat!</h4>
        <p className="text-text-secondary">
          Tez orada siz bilan boglanamiz
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-text-secondary mb-2">
          Ismingiz
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Ismingizni kiriting"
          required
          className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-white placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-secondary mb-2">
          Telefon raqami
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={handlePhoneChange}
          placeholder="+998 90 123 45 67"
          required
          className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-white placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-secondary mb-2">
          Kompaniya nomi
        </label>
        <input
          type="text"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          placeholder="Kompaniya nomini kiriting"
          required
          className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-white placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-red-400 text-sm"
        >
          <AlertCircle className="w-4 h-4" />
          {errorMessage}
        </motion.div>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full"
        size="lg"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Yuborilmoqda...
          </>
        ) : (
          "Yuborish"
        )}
      </Button>
    </form>
  );
}
