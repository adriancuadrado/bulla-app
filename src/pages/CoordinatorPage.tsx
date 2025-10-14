import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { CoordinatorDashboard } from "@/components/coordinator/CoordinatorDashboard";

const CoordinatorPage = () => {
  return (
    <DashboardLayout userRole="coordinator">
      <CoordinatorDashboard />
    </DashboardLayout>
  );
};

export default CoordinatorPage;
