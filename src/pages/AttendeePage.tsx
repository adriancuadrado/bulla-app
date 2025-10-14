import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { AttendeeDashboard } from "@/components/attendee/AttendeeDashboard";

const AttendeePage = () => {
  return (
    <DashboardLayout userRole="attendee">
      <AttendeeDashboard />
    </DashboardLayout>
  );
};

export default AttendeePage;
