
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, AlertTriangle } from 'lucide-react';

export default function GarantiaPage() {
  return (
    <div className="container py-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">Garantía y Devoluciones</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-primary" />
            Cobertura de Garantía
          </h2>
          <div className="grid gap-4">
            <Card>
              <CardHeader><CardTitle className="text-lg">Bates (Aluminio/Compuesto)</CardTitle></CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Garantía de 1 año directamente con el fabricante por defectos de fábrica (abolladuras sin signos de mal uso, tapas sueltas).
                  <br/><span className="text-xs text-red-500">* No cubre bates de madera una vez usados.</span>
                </p>
              </CardContent>
            </Card>
            <Card>
               <CardHeader><CardTitle className="text-lg">Guantes</CardTitle></CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  3 meses de garantía por defectos en costuras o cuero. No cubre el desgaste natural por uso o falta de mantenimiento.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-orange-500" />
            Política de Cambios
          </h2>
          <Card className="bg-orange-50/50 border-orange-100">
            <CardContent className="pt-6">
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Los cambios se aceptan dentro de los <strong>7 días continuos</strong> siguientes a la compra.</li>
                <li>El producto debe estar <strong>nuevo, sin uso y en su empaque original</strong>.</li>
                <li>Los costos de envío por cambio (si no es error nuestro) corren por cuenta del cliente.</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
