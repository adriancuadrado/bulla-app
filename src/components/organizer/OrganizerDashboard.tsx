import { Calendar, Users, Shield, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import { StatsCard } from "../dashboard/StatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const OrganizerDashboard = () => {
  const upcomingEvents = [
    {
      id: 1,
      name: "Festival de Música de Verano",
      date: "2024-07-15",
      attendees: 15000,
      status: "certificado" as const,
      location: "Estadio Municipal"
    },
    {
      id: 2,
      name: "Concierto Benéfico",
      date: "2024-08-22",
      attendees: 8500,
      status: "en-revision" as const,
      location: "Plaza Central"
    },
    {
      id: 3,
      name: "Feria Gastronómica",
      date: "2024-09-10",
      attendees: 12000,
      status: "planificando" as const,
      location: "Parque de la Ciudad"
    }
  ];

  const statusColors = {
    certificado: "bg-success text-success-foreground",
    "en-revision": "bg-warning text-warning-foreground",
    planificando: "bg-muted text-muted-foreground"
  };

  const statusLabels = {
    certificado: "Certificado",
    "en-revision": "En Revisión",
    planificando: "Planificando"
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Dashboard de Organizador
        </h1>
        <p className="text-muted-foreground">
          Gestiona tus eventos y planes de autoprotección
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Eventos Activos"
          value={8}
          icon={<Calendar className="h-6 w-6" />}
          trend={{ value: "12%", isPositive: true }}
          status="info"
        />
        <StatsCard
          title="Eventos Certificados"
          value={5}
          icon={<Shield className="h-6 w-6" />}
          trend={{ value: "25%", isPositive: true }}
          status="success"
        />
        <StatsCard
          title="Asistentes Totales"
          value="45.2K"
          icon={<Users className="h-6 w-6" />}
          trend={{ value: "8%", isPositive: true }}
          status="info"
        />
        <StatsCard
          title="Planes Pendientes"
          value={3}
          icon={<Clock className="h-6 w-6" />}
          status="warning"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Próximos Eventos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-smooth">
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{event.name}</h4>
                  <p className="text-sm text-muted-foreground">{event.location}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span>📅 {event.date}</span>
                    <span>👥 {event.attendees.toLocaleString()} asistentes</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge className={statusColors[event.status]}>
                    {statusLabels[event.status]}
                  </Badge>
                  <Button variant="outline" size="sm">
                    Ver Detalles
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Plan de Autoprotección
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Análisis de Riesgos</span>
                <CheckCircle className="h-5 w-5 text-success" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Medidas Preventivas</span>
                <CheckCircle className="h-5 w-5 text-success" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Plan de Evacuación</span>
                <AlertTriangle className="h-5 w-5 text-warning" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Protocolos de Emergencia</span>
                <Clock className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
            
            <div className="pt-4 border-t">
              <Button className="w-full">
                Completar Plan de Autoprotección
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};