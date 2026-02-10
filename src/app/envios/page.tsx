
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, MapPin, Clock } from 'lucide-react';

export default function EnviosPage() {
  return (
    <div className="container py-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">Políticas de Envío</h1>
      
      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="h-6 w-6 text-primary" />
              Envíos Nacionales (Venezuela)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Realizamos envíos a todo el país a través de nuestras alianzas estratégicas con <strong>MRW, Zoom y Tealca</strong>.
              Todos los envíos viajan asegurados por el valor de la mercancía.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Caracas:</strong> Delivery Gratis en zonas céntricas (pedidos +$50).</li>
              <li><strong>Interior del país:</strong> Cobro a destino.</li>
              <li><strong>Tiempo de procesamiento:</strong> 24 horas hábiles una vez confirmado el pago.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-primary" />
              Tiempos de Entrega Estimados
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-bold mb-2">Gran Caracas</h4>
                <p className="text-sm text-muted-foreground">24 - 48 Horas</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-bold mb-2">Ciudades Principales</h4>
                <p className="text-sm text-muted-foreground">2 - 3 Días Hábiles</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-bold mb-2">Zonas Remotas</h4>
                <p className="text-sm text-muted-foreground">3 - 5 Días Hábiles</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-6 w-6 text-primary" />
              Retiro en Tienda
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Puedes retirar tu pedido personalmente en nuestro Showroom ubicado en Las Mercedes, Caracas.
              Te enviaremos la ubicación exacta una vez concretada la compra.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
