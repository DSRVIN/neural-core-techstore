import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Ponte en contacto con el equipo de NEURAL_CORE.",
};

const contactInfo = [
  { icon: "mail", label: "Email", value: "hola@neuralcore.tech" },
  { icon: "call", label: "Teléfono", value: "+51 999 888 777" },
  { icon: "location_on", label: "Showroom", value: "Av. Tecnología 1024, Ica, Perú" },
  { icon: "schedule", label: "Horario", value: "Lun–Sáb · 9:00 – 20:00" },
];

const social = ["public", "alternate_email", "chat", "smartphone"];

export default function ContactPage() {
  return (
    <div className="pt-32 pb-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
      <header className="mb-stack-lg max-w-2xl">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-4">
          Hablemos
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          ¿Dudas sobre un producto, tu pedido o una colaboración? Estamos para
          ayudarte.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Info */}
        <div className="lg:col-span-4 flex flex-col gap-stack-sm">
          <div className="glass-card rounded-xl p-8 flex flex-col gap-stack-md">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-container/15 flex items-center justify-center shrink-0">
                  <Icon name={info.icon} className="text-primary text-[20px]" />
                </div>
                <div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant/70 uppercase tracking-wider mb-1">
                    {info.label}
                  </div>
                  <div className="font-body-md text-body-md text-on-surface">
                    {info.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="glass-card rounded-xl p-8">
            <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-widest mb-4">
              Síguenos
            </h3>
            <div className="flex gap-3">
              {social.map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-11 h-11 rounded-full border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <Icon name={icon} className="text-[20px]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="lg:col-span-8 relative">
          <div className="absolute -inset-4 bg-primary-container/5 blur-3xl rounded-full pointer-events-none" />
          <div className="relative glass-card rounded-2xl p-8 md:p-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
