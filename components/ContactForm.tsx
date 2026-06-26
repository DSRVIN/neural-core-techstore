"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const inputCls =
  "w-full bg-surface-dim border border-white/10 rounded-lg px-4 py-3 text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/40 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Mock: aquí se conectaría a un endpoint/servicio de email real.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center text-center h-full py-stack-xl">
        <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mb-stack-sm">
          <Icon name="check" className="text-success text-3xl" />
        </div>
        <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">
          Mensaje enviado
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
          Gracias por escribirnos. Nuestro equipo te responderá en menos de 24
          horas.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-stack-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-stack-sm">
        <div>
          <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">
            Nombre
          </label>
          <input required type="text" placeholder="Tu nombre" className={inputCls} />
        </div>
        <div>
          <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">
            Email
          </label>
          <input
            required
            type="email"
            placeholder="tu@email.com"
            className={inputCls}
          />
        </div>
      </div>
      <div>
        <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">
          Asunto
        </label>
        <input required type="text" placeholder="¿En qué podemos ayudarte?" className={inputCls} />
      </div>
      <div>
        <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">
          Mensaje
        </label>
        <textarea
          required
          rows={5}
          placeholder="Cuéntanos más..."
          className={`${inputCls} resize-none`}
        />
      </div>
      <Button size="lg" className="w-full sm:w-auto sm:self-start mt-2">
        Enviar mensaje
        <Icon name="send" className="text-[18px]" />
      </Button>
    </form>
  );
}
