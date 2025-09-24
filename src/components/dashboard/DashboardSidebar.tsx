import { Shield, Calendar, Users, AlertTriangle, Settings, Home, FileText, Radio, HeartHandshake } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface DashboardSidebarProps {
  userRole: "organizer" | "coordinator" | "attendee" | "family";
}

const menuItems = {
  organizer: [
    { icon: Home, label: "Dashboard", href: "/" },
    { icon: Calendar, label: "Mis Eventos", href: "/events" },
    { icon: FileText, label: "Plan Autoprotección", href: "/safety-plan" },
    { icon: Shield, label: "Certificación", href: "/certification" },
    { icon: Users, label: "Equipo", href: "/team" },
    { icon: Settings, label: "Configuración", href: "/settings" },
  ],
  coordinator: [
    { icon: Home, label: "Centro Control", href: "/" },
    { icon: Radio, label: "Coordinación", href: "/coordination" },
    { icon: AlertTriangle, label: "Alertas", href: "/alerts" },
    { icon: Users, label: "Personal", href: "/staff" },
    { icon: FileText, label: "Protocolos", href: "/protocols" },
  ],
  attendee: [
    { icon: Home, label: "Mi Evento", href: "/" },
    { icon: Calendar, label: "Información", href: "/event-info" },
    { icon: AlertTriangle, label: "Emergencias", href: "/emergency" },
    { icon: Settings, label: "Configuración", href: "/settings" },
  ],
  family: [
    { icon: Home, label: "Seguimiento", href: "/" },
    { icon: HeartHandshake, label: "Mi Familiar", href: "/family-member" },
    { icon: AlertTriangle, label: "Alertas", href: "/alerts" },
    { icon: Settings, label: "Configuración", href: "/settings" },
  ],
};

export const DashboardSidebar = ({ userRole }: DashboardSidebarProps) => {
  const items = menuItems[userRole];

  return (
    <div className="w-64 bg-gradient-security text-white flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <Shield className="h-8 w-8" />
          <div>
            <h1 className="text-xl font-bold">SecureEvent</h1>
            <p className="text-sm opacity-80 capitalize">{userRole}</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.href}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start text-white hover:bg-white/10 hover:text-white",
                  "transition-smooth"
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-white/20">
        <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
          <AlertTriangle className="mr-3 h-5 w-5" />
          Emergencia
        </Button>
      </div>
    </div>
  );
};