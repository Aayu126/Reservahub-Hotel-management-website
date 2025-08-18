import { StatCard } from "@/components/ui/stat-card";
import { 
  Bed, 
  Users, 
  DollarSign, 
  Calendar,
  TrendingUp,
  Clock
} from "lucide-react";

export function OverviewStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <StatCard
        title="Total Rooms"
        value="124"
        icon={Bed}
        description="8 available now"
        trend={{ value: 12, label: "vs last month" }}
      />
      
      <StatCard
        title="Active Guests"
        value="89"
        icon={Users}
        description="Check-ins today: 12"
        trend={{ value: 8, label: "vs yesterday" }}
      />
      
      <StatCard
        title="Revenue Today"
        value="$12,450"
        icon={DollarSign}
        description="Target: $15,000"
        trend={{ value: -5, label: "vs yesterday" }}
      />
      
      <StatCard
        title="Reservations"
        value="45"
        icon={Calendar}
        description="This week"
        trend={{ value: 15, label: "vs last week" }}
      />
      
      <StatCard
        title="Occupancy Rate"
        value="87%"
        icon={TrendingUp}
        description="Above average"
        trend={{ value: 3, label: "vs last month" }}
      />
      
      <StatCard
        title="Avg. Stay"
        value="2.4"
        icon={Clock}
        description="Days per guest"
        trend={{ value: 0.2, label: "vs last month" }}
      />
    </div>
  );
}