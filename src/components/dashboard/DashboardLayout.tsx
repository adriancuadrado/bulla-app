import { ReactNode } from "react";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader } from "./DashboardHeader";

interface DashboardLayoutProps {
  children: ReactNode;
  userRole: "organizer" | "coordinator" | "attendee" | "family";
}

export const DashboardLayout = ({ children, userRole }: DashboardLayoutProps) => {
  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar userRole={userRole} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader userRole={userRole} />
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};