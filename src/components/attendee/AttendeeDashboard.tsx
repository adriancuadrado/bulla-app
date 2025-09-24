import { Calendar, MapPin, Clock, AlertTriangle, Info, Phone } from "lucide-react";
import { StatsCard } from "../dashboard/StatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const AttendeeDashboard = () => {
  const eventInfo = {
    name: "Festival de Música de Verano",
    date: "15 de Julio, 2024",
    time: "18:00 - 02:00",
    location: "Estadio Municipal",
    weather: "Soleado, 28°C",
    capacity: "15,000 asistentes"
  };

  const emergencyContacts = [
    { label: "Emergencias Médicas", number: "112", type: "medical" },
    { label: "Seguridad del Evento", number: "+34 600 123 456", type: "security" },
    { label: "Información", number: "+34 600 789 012", type: "info" }
  ];

  const safetyTips = [
    "Mantén tu teléfono cargado en todo momento",
    "Identifica las salidas de emergencia más cercanas",
    "Permanece hidratado y protégete del sol",
    "No dejes objetos personales desatendidos",
    "Sigue las indicaciones del personal de seguridad"
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Mi Evento
        </h1>
        <p className="text-muted-foreground">
          Información y seguridad personalizada
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Estado del Evento"
          value="En Curso"
          icon={<Calendar className="h-6 w-6" />}
          status="success"
        />
        <StatsCard
          title="Aforo Actual"
          value="89%"
          icon={<MapPin className="h-6 w-6" />}
          status="warning"
        />
        <StatsCard
          title="Tiempo Restante"
          value="4h 23m"
          icon={<Clock className="h-6 w-6" />}
          status="info"
        />
        <StatsCard
          title="Nivel de Seguridad"
          value="ALTO"
          icon={<AlertTriangle className="h-6 w-6" />}
          status="success"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              Información del Evento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-lg text-foreground">{eventInfo.name}</h3>
                <p className="text-muted-foreground">{eventInfo.location}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Fecha:</span>
                  <p className="font-medium">{eventInfo.date}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Horario:</span>
                  <p className="font-medium">{eventInfo.time}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Clima:</span>
                  <p className="font-medium">{eventInfo.weather}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Capacidad:</span>
                  <p className="font-medium">{eventInfo.capacity}</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t">
              <Button className="w-full mb-2">
                <MapPin className="mr-2 h-4 w-4" />
                Ver Mapa del Evento
              </Button>
              <Button variant="outline" className="w-full">
                Descargar Mi Entrada
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Contactos de Emergencia
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-foreground">{contact.label}</p>
                  <p className="text-sm text-muted-foreground">{contact.number}</p>
                </div>
                <Button size="sm" variant="outline">
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
            ))}
            
            <div className="pt-4 border-t">
              <Button className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground">
                <AlertTriangle className="mr-2 h-4 w-4" />
                EMERGENCIA
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Recomendaciones de Seguridad
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {safetyTips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <Badge className="bg-primary text-primary-foreground mt-0.5">
                  {index + 1}
                </Badge>
                <p className="text-sm text-foreground">{tip}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};