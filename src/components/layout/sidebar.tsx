import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavLink, useLocation } from "react-router-dom";
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
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Rooms", href: "/rooms", icon: Bed },
  { name: "Restaurant", href: "/restaurant", icon: UtensilsCrossed },
  { name: "Billing", href: "/billing", icon: CreditCard },
  { name: "Staff", href: "/staff", icon: Users },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();

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
          const isActive = location.pathname === item.href;
          return (
            <NavLink
              key={item.name}
              to={item.href}
              className="block"
            >
              <Button
                variant={isActive ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 h-11 transition-all duration-200",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-md animate-scale-in" 
                    : "text-foreground/70 hover:text-foreground hover:bg-muted/50 hover:scale-105"
                )}
              >
                <Icon className="h-5 w-5" />
                {item.name}
              </Button>
            </NavLink>
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