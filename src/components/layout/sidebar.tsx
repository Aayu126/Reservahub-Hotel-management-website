import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Bed, 
  UtensilsCrossed, 
  CreditCard, 
  Users, 
  Settings,
  BarChart3
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

const navigation = [
  { name: "Dashboard", href: "/", icon: Home, current: true },
  { name: "Rooms", href: "/rooms", icon: Bed, current: false },
  { name: "Restaurant", href: "/restaurant", icon: UtensilsCrossed, current: false },
  { name: "Billing", href: "/billing", icon: CreditCard, current: false },
  { name: "Staff", href: "/staff", icon: Users, current: false },
  { name: "Analytics", href: "/analytics", icon: BarChart3, current: false },
  { name: "Settings", href: "/settings", icon: Settings, current: false },
];

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn(
      "flex h-full w-64 flex-col bg-gradient-luxury border-r border-border/50",
      className
    )}>
      <div className="flex h-16 items-center justify-center border-b border-border/50">
        <h1 className="text-xl font-bold bg-gradient-gold bg-clip-text text-transparent">
          ReservaHub Pro
        </h1>
      </div>
      
      <nav className="flex-1 space-y-2 p-4">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.name}
              variant={item.current ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 h-11",
                item.current 
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
              )}
            >
              <Icon className="h-5 w-5" />
              {item.name}
            </Button>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-border/50">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
          <div className="h-8 w-8 rounded-full bg-gradient-gold flex items-center justify-center">
            <span className="text-sm font-medium text-navy">
              A
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground">
              Admin User
            </p>
            <p className="text-xs text-muted-foreground truncate">
              admin@hotel.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}