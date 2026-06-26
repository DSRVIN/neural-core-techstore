import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-margin-mobile pt-32 pb-stack-xl">
      <span className="font-display-lg text-[120px] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
        404
      </span>
      <h1 className="font-headline-xl text-headline-xl text-on-surface mt-4 mb-3">
        Página no encontrada
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mb-stack-md">
        La ruta que buscas no existe o fue movida. Volvamos a terreno conocido.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button href="/">IR AL INICIO</Button>
        <Button href="/catalogo" variant="secondary">
          VER CATÁLOGO
        </Button>
      </div>
    </div>
  );
}
