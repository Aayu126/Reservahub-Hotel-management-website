import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { 
  Plus, 
  UserPlus, 
  Receipt, 
  Calendar,
  MessageSquare,
  Bell
} from "lucide-react";

export function QuickActions() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAction = (actionTitle: string, route: string) => {
    navigate(route);
    toast({
      title: `${actionTitle} initiated`,
      description: `Navigating to ${actionTitle.toLowerCase()} page.`,
    });
  };

  const actions = [
    {
      title: "New Reservation",
      description: "Book a room for guest",
      icon: Plus,
      variant: "default" as const,
      route: "/rooms"
    },
    {
      title: "Check-in Guest",
      description: "Process guest arrival",
      icon: UserPlus,
      variant: "outline" as const,
      route: "/rooms"
    },
    {
      title: "Generate Bill",
      description: "Create guest invoice",
      icon: Receipt,
      variant: "outline" as const,
      route: "/billing"
    },
    {
      title: "Schedule Event",
      description: "Add to calendar",
      icon: Calendar,
      variant: "outline" as const,
      route: "/staff"
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="bg-gradient-card border-border/50 shadow-luxury">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-accent" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <Button
                key={action.title}
                variant={action.variant}
                className="w-full justify-start gap-3 h-12 transition-all duration-200 hover:scale-105"
                onClick={() => handleAction(action.title, action.route)}
              >
                <Icon className="h-4 w-4" />
                <div className="text-left">
                  <div className="font-medium">{action.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {action.description}
                  </div>
                </div>
              </Button>
            );
          })}
        </CardContent>
      </Card>

      <Card className="bg-gradient-card border-border/50 shadow-luxury">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-accent" />
            Recent Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
              <div className="h-2 w-2 rounded-full bg-accent mt-2" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">New reservation #1247</p>
                <p className="text-xs text-muted-foreground">
                  Room 205 - John Smith - 2 nights
                </p>
                <p className="text-xs text-muted-foreground">2 min ago</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/20">
              <div className="h-2 w-2 rounded-full bg-primary mt-2" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">Guest checked out</p>
                <p className="text-xs text-muted-foreground">
                  Room 312 - Payment processed
                </p>
                <p className="text-xs text-muted-foreground">15 min ago</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/20">
              <div className="h-2 w-2 rounded-full bg-muted-foreground mt-2" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">Maintenance request</p>
                <p className="text-xs text-muted-foreground">
                  Room 108 - AC not working
                </p>
                <p className="text-xs text-muted-foreground">1 hour ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}