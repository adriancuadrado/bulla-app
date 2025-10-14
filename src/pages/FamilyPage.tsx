import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { FamilyDashboard } from "@/components/family/FamilyDashboard";

const FamilyPage = () => {
  return (
    <DashboardLayout userRole="family">
      <FamilyDashboard />
    </DashboardLayout>
  );
};

export default FamilyPage;
