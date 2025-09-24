import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  status?: "success" | "warning" | "error" | "info";
  className?: string;
}

export const StatsCard = ({ 
  title, 
  value, 
  icon, 
  trend, 
  status = "info",
  className 
}: StatsCardProps) => {
  const statusColors = {
    success: "bg-gradient-success shadow-card",
    warning: "bg-gradient-alert shadow-alert", 
    error: "bg-destructive shadow-alert",
    info: "bg-gradient-primary shadow-security"
  };

  return (
    <Card className={cn(
      "relative overflow-hidden transition-smooth hover:scale-105",
      statusColors[status],
      "text-white",
      className
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-white/90">
          {title}
        </CardTitle>
        <div className="text-white/80">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-white">{value}</div>
        {trend && (
          <Badge 
            variant="secondary" 
            className={cn(
              "mt-2 text-xs",
              trend.isPositive 
                ? "bg-white/20 text-white hover:bg-white/30" 
                : "bg-destructive/20 text-white hover:bg-destructive/30"
            )}
          >
            {trend.isPositive ? "↗" : "↘"} {trend.value}
          </Badge>
        )}
      </CardContent>
    </Card>
  );
};