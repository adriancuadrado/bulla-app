import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { RoleSelector } from "@/components/dashboard/RoleSelector";
import { OrganizerDashboard } from "@/components/organizer/OrganizerDashboard";
import { CoordinatorDashboard } from "@/components/coordinator/CoordinatorDashboard";
import { AttendeeDashboard } from "@/components/attendee/AttendeeDashboard";
import { FamilyDashboard } from "@/components/family/FamilyDashboard";

type UserRole = "organizer" | "coordinator" | "attendee" | "family" | null;

const Index = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
  };

  if (!selectedRole) {
    return <RoleSelector onRoleSelect={handleRoleSelect} />;
  }

  const renderDashboard = () => {
    switch (selectedRole) {
      case "organizer":
        return <OrganizerDashboard />;
      case "coordinator":
        return <CoordinatorDashboard />;
      case "attendee":
        return <AttendeeDashboard />;
      case "family":
        return <FamilyDashboard />;
      default:
        return <div>Selecciona un rol</div>;
    }
  };

  return (
    <DashboardLayout userRole={selectedRole}>
      {renderDashboard()}
    </DashboardLayout>
  );
};

export default Index;
