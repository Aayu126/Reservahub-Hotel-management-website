import { Sidebar } from "@/components/layout/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign, Users } from "lucide-react";

const Restaurant = () => {
  const orders = [
    {
      id: 1,
      table: "Table 5",
      items: ["Caesar Salad", "Grilled Salmon", "Wine"],
      total: 85.50,
      status: "preparing",
      time: "15 mins",
      waiter: "Alice Johnson"
    },
    {
      id: 2,
      table: "Room 201",
      items: ["Continental Breakfast", "Orange Juice"],
      total: 32.00,
      status: "ready",
      time: "2 mins",
      waiter: "Bob Smith"
    },
    {
      id: 3,
      table: "Table 12",
      items: ["Steak Dinner", "Side Salad", "Beer"],
      total: 95.75,
      status: "served",
      time: "Completed",
      waiter: "Carol Davis"
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "preparing": return "secondary";
      case "ready": return "default";
      case "served": return "outline";
      default: return "default";
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-auto animate-fade-in">
        <div className="p-8 space-y-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Restaurant Management</h1>
              <p className="text-muted-foreground">
                Manage orders and dining services
              </p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 transition-all duration-200 hover:scale-105">
              New Order
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {orders.map((order) => (
              <Card 
                key={order.id} 
                className="border border-border/50 shadow-luxury bg-gradient-card transition-all duration-200 hover:scale-105 hover:shadow-gold"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-semibold text-foreground">
                        Order #{order.id}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {order.table}
                      </CardDescription>
                    </div>
                    <Badge variant={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Items:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {order.items.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-accent" />
                      <span className="font-bold text-accent">${order.total}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{order.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{order.waiter}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Details
                    </Button>
                    {order.status === "ready" && (
                      <Button size="sm" className="flex-1">
                        Mark Served
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Restaurant;