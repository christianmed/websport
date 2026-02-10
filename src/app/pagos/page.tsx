
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Banknote, DollarSign } from 'lucide-react';

export default function PagosPage() {
  return (
    <div className="container py-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">Métodos de Pago</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-green-600" />
              Zelle / Efectivo Divisas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Aceptamos pagos directos vía Zelle o efectivo en dólares al momento de la entrega (solo Caracas).
            </p>
            <div className="bg-blue-50 p-3 rounded text-sm text-blue-800 border border-blue-200">
              * Los datos de Zelle serán proporcionados al confirmar tu pedido.
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-6 w-6 text-blue-600" />
              Pago Móvil / Transferencia
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Aceptamos Bolívares a la tasa del BCV del día. Trabajamos con Banesco, Mercantil y Provincial.
            </p>
            <div className="bg-yellow-50 p-3 rounded text-sm text-yellow-800 border border-yellow-200">
              * Reportar el pago con captura de pantalla.
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Banknote className="h-6 w-6 text-gray-600" />
              Binance Pay / USDT
            </CardTitle>
          </CardHeader>
          <CardContent>
             <p className="text-muted-foreground">
              Aceptamos pagos en criptomonedas estables (USDT) a través de Binance Pay sin comisiones adicionales.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
