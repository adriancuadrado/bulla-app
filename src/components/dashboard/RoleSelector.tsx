import { Shield, Radio, User, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import logo from '@/assets/bulla-app-logo.jpeg';

interface RoleSelectorProps {
  onRoleSelect: (role: "organizer" | "coordinator" | "attendee" | "family") => void;
}

export const roles = [
  {
    id: "organizer" as const,
    title: "Organizador de Eventos",
    description: "Planifica y gestiona eventos seguros con certificación",
    icon: Shield,
    color: "bg-gradient-primary"
  },
  {
    id: "coordinator" as const,
    title: "Coordinador de Seguridad",
    description: "Coordina equipos y protocolos durante el evento",
    icon: Radio,
    color: "bg-gradient-security"
  },
  {
    id: "attendee" as const,
    title: "Asistente al Evento",
    description: "Información y protocolos de seguridad personalizados",
    icon: User,
    color: "bg-gradient-success"
  },
  {
    id: "family" as const,
    title: "Familiar",
    description: "Seguimiento y comunicación con asistentes familiares",
    icon: Heart,
    color: "bg-gradient-alert"
  }
];

export const RoleSelector = ({ onRoleSelect }: RoleSelectorProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={logo} className="h-12 w-12 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Bulla App</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Gestión integral de seguridad en eventos masivos
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Selecciona tu perfil para acceder al panel correspondiente
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role) => (
            <Card 
              key={role.id} 
              className="cursor-pointer transition-smooth hover:scale-105 hover:shadow-security"
              onClick={() => onRoleSelect(role.id)}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-lg ${role.color} flex items-center justify-center mb-4`}>
                  <role.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">{role.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{role.description}</p>
                <Button className="w-full">
                  Acceder como {role.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};