import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { OrganizerDashboard } from "@/components/organizer/OrganizerDashboard";

const OrganizerPage = () => {
  return (
    <DashboardLayout userRole="organizer">
      <OrganizerDashboard />
    </DashboardLayout>
  );
};

export default OrganizerPage;
