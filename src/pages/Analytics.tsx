import { Sidebar } from "@/components/layout/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, DollarSign } from "lucide-react";

const Analytics = () => {
  const stats = [
    {
      title: "Occupancy Rate",
      value: "89%",
      change: "+5.2%",
      icon: BarChart3,
      color: "text-accent"
    },
    {
      title: "Revenue This Month",
      value: "$125,340",
      change: "+12.3%",
      icon: DollarSign,
      color: "text-green-500"
    },
    {
      title: "Guest Satisfaction",
      value: "4.8/5",
      change: "+0.3",
      icon: Users,
      color: "text-blue-500"
    },
    {
      title: "Average Daily Rate",
      value: "$180",
      change: "+8.1%",
      icon: TrendingUp,
      color: "text-purple-500"
    }
  ];

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-auto animate-fade-in">
        <div className="p-8 space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
            <p className="text-muted-foreground">
              Hotel performance insights and metrics
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card 
                  key={index} 
                  className="border border-border/50 shadow-luxury bg-gradient-card transition-all duration-200 hover:scale-105 hover:shadow-gold"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </CardTitle>
                      <IconComponent className={`h-5 w-5 ${stat.color}`} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <p className="text-sm text-green-500">
                      {stat.change} from last month
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border border-border/50 shadow-luxury bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-foreground">Monthly Revenue</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Revenue trends over the past 12 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  Revenue Chart Placeholder
                  <br />
                  (Chart component would go here)
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/50 shadow-luxury bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-foreground">Occupancy Trends</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Room occupancy over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  Occupancy Chart Placeholder
                  <br />
                  (Chart component would go here)
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;