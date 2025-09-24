import { Radio, Users, AlertTriangle, CheckCircle, Clock, MapPin } from "lucide-react";
import { StatsCard } from "../dashboard/StatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const CoordinatorDashboard = () => {
  const activeIncidents = [
    {
      id: 1,
      type: "Primeros Auxilios",
      location: "Zona VIP - Sector A",
      priority: "media" as const,
      time: "14:32",
      status: "atendiendo"
    },
    {
      id: 2,
      type: "Aglomeración",
      location: "Entrada Principal",
      priority: "alta" as const,
      time: "14:28",
      status: "resuelto"
    },
    {
      id: 3,
      type: "Revisión Rutinaria",
      location: "Salida de Emergencia 3",
      priority: "baja" as const,
      time: "14:15",
      status: "pendiente"
    }
  ];

  const staffStatus = [
    { role: "Coordinadores", active: 8, total: 10 },
    { role: "Seguridad", active: 45, total: 50 },
    { role: "Primeros Auxilios", active: 12, total: 15 },
    { role: "Bomberos", active: 6, total: 8 }
  ];

  const priorityColors = {
    alta: "bg-destructive text-destructive-foreground",
    media: "bg-warning text-warning-foreground",
    baja: "bg-muted text-muted-foreground"
  };

  const statusColors = {
    atendiendo: "bg-warning text-warning-foreground",
    resuelto: "bg-success text-success-foreground",
    pendiente: "bg-muted text-muted-foreground"
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Centro de Coordinación
        </h1>
        <p className="text-muted-foreground">
          Festival de Música de Verano - Tiempo Real
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Personal Activo"
          value="71/83"
          icon={<Users className="h-6 w-6" />}
          status="success"
        />
        <StatsCard
          title="Incidentes Activos"
          value={2}
          icon={<AlertTriangle className="h-6 w-6" />}
          status="warning"
        />
        <StatsCard
          title="Zonas Monitoreadas"
          value={12}
          icon={<MapPin className="h-6 w-6" />}
          status="info"
        />
        <StatsCard
          title="Tiempo de Respuesta"
          value="2.3 min"
          icon={<Clock className="h-6 w-6" />}
          trend={{ value: "15%", isPositive: true }}
          status="success"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Incidentes Activos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeIncidents.map((incident) => (
              <div key={incident.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-foreground">{incident.type}</h4>
                    <Badge className={priorityColors[incident.priority]}>
                      {incident.priority.toUpperCase()}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {incident.location}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {incident.time}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge className={statusColors[incident.status]}>
                    {incident.status.toUpperCase()}
                  </Badge>
                  <Button variant="outline" size="sm">
                    Gestionar
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Radio className="h-5 w-5" />
              Estado del Personal
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {staffStatus.map((staff, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{staff.role}</span>
                  <span className="text-sm text-muted-foreground">
                    {staff.active}/{staff.total}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-smooth"
                    style={{ width: `${(staff.active / staff.total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
            
            <div className="pt-4 border-t space-y-2">
              <Button className="w-full">
                <Radio className="mr-2 h-4 w-4" />
                Comunicación General
              </Button>
              <Button variant="outline" className="w-full">
                Ver Mapa de Personal
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};