import { Heart, MapPin, Clock, Phone, AlertTriangle, CheckCircle } from "lucide-react";
import { StatsCard } from "../dashboard/StatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const FamilyDashboard = () => {
  const familyMember = {
    name: "María González",
    phone: "+34 600 987 654",
    lastSeen: "14:45",
    location: "Zona Principal - Sector B",
    status: "seguro" as const,
    event: "Festival de Música de Verano"
  };

  const timeline = [
    {
      time: "18:00",
      action: "Entrada al evento",
      status: "completed" as const,
      location: "Acceso Principal"
    },
    {
      time: "19:30",
      action: "Check-in zona concierto",
      status: "completed" as const,
      location: "Escenario Principal"
    },
    {
      time: "14:45",
      action: "Última actualización",
      status: "current" as const,
      location: "Zona Principal - Sector B"
    },
    {
      time: "22:00",
      action: "Fin del evento (estimado)",
      status: "pending" as const,
      location: "Salida Principal"
    }
  ];

  const statusColors = {
    seguro: "bg-success text-success-foreground",
    alerta: "bg-warning text-warning-foreground",
    desconocido: "bg-muted text-muted-foreground"
  };

  const timelineColors = {
    completed: "bg-success",
    current: "bg-primary",
    pending: "bg-muted"
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Seguimiento Familiar
        </h1>
        <p className="text-muted-foreground">
          Mantente informado sobre el bienestar de tu familiar
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Estado Actual"
          value="Seguro"
          icon={<CheckCircle className="h-6 w-6" />}
          status="success"
        />
        <StatsCard
          title="Última Ubicación"
          value="Sector B"
          icon={<MapPin className="h-6 w-6" />}
          status="info"
        />
        <StatsCard
          title="Última Actividad"
          value="14:45"
          icon={<Clock className="h-6 w-6" />}
          status="info"
        />
        <StatsCard
          title="Tiempo en Evento"
          value="4h 45m"
          icon={<Heart className="h-6 w-6" />}
          status="info"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Información del Familiar
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{familyMember.name}</h3>
                <p className="text-sm text-muted-foreground">{familyMember.phone}</p>
                <p className="text-sm text-muted-foreground">{familyMember.event}</p>
              </div>
              <Badge className={statusColors[familyMember.status]}>
                {familyMember.status.toUpperCase()}
              </Badge>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Última ubicación:</span>
                <p className="font-medium">{familyMember.location}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Última actividad:</span>
                <p className="font-medium">{familyMember.lastSeen}</p>
              </div>
            </div>
            
            <div className="pt-4 border-t space-y-2">
              <Button className="w-full">
                <Phone className="mr-2 h-4 w-4" />
                Contactar Familiar
              </Button>
              <Button variant="outline" className="w-full">
                <MapPin className="mr-2 h-4 w-4" />
                Ver Ubicación en Mapa
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Línea de Tiempo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`w-3 h-3 rounded-full mt-2 ${timelineColors[item.status]}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-foreground">{item.action}</p>
                      <span className="text-xs text-muted-foreground">{item.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Configuración de Alertas
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Recibe notificaciones sobre el estado y ubicación de tu familiar durante el evento.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <span className="text-sm">Alertas de ubicación</span>
              <Badge className="bg-success text-success-foreground">Activo</Badge>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <span className="text-sm">Alertas de emergencia</span>
              <Badge className="bg-success text-success-foreground">Activo</Badge>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <span className="text-sm">Notificaciones SMS</span>
              <Badge className="bg-success text-success-foreground">Activo</Badge>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <span className="text-sm">Llamadas de emergencia</span>
              <Badge className="bg-success text-success-foreground">Activo</Badge>
            </div>
          </div>
          
          <Button variant="outline" className="w-full">
            Configurar Preferencias
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};