import { Sidebar } from "@/components/layout/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bed, Users, Wifi, Car, Coffee } from "lucide-react";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      number: "101",
      type: "Standard Single",
      status: "occupied",
      guest: "John Doe",
      checkOut: "2024-01-20",
      price: 120,
    },
    {
      id: 2,
      number: "102",
      type: "Deluxe Double",
      status: "available",
      guest: null,
      checkOut: null,
      price: 180,
    },
    {
      id: 3,
      number: "201",
      type: "Suite",
      status: "maintenance",
      guest: null,
      checkOut: null,
      price: 350,
    },
    {
      id: 4,
      number: "202",
      type: "Standard Double",
      status: "cleaning",
      guest: null,
      checkOut: null,
      price: 150,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "occupied": return "destructive";
      case "available": return "default";
      case "maintenance": return "secondary";
      case "cleaning": return "outline";
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
              <h1 className="text-3xl font-bold text-foreground">Room Management</h1>
              <p className="text-muted-foreground">
                Monitor and manage all hotel rooms
              </p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 transition-all duration-200 hover:scale-105">
              Add New Room
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => (
              <Card 
                key={room.id} 
                className="border border-border/50 shadow-luxury bg-gradient-card transition-all duration-200 hover:scale-105 hover:shadow-gold"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-semibold text-foreground">
                        Room {room.number}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {room.type}
                      </CardDescription>
                    </div>
                    <Badge variant={getStatusColor(room.status)}>
                      {room.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {room.guest && (
                    <div>
                      <p className="text-sm font-medium text-foreground">Current Guest:</p>
                      <p className="text-sm text-muted-foreground">{room.guest}</p>
                      <p className="text-sm text-muted-foreground">Check-out: {room.checkOut}</p>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-accent">${room.price}/night</span>
                  </div>
                  
                  <div className="flex gap-2 text-muted-foreground">
                    <Bed className="h-4 w-4" />
                    <Users className="h-4 w-4" />
                    <Wifi className="h-4 w-4" />
                    <Car className="h-4 w-4" />
                    <Coffee className="h-4 w-4" />
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Details
                    </Button>
                    {room.status === "available" && (
                      <Button size="sm" className="flex-1">
                        Book Room
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

export default Rooms;