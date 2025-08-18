import { Sidebar } from "@/components/layout/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Clock, MapPin, Phone } from "lucide-react";

const Staff = () => {
  const staffMembers = [
    {
      id: 1,
      name: "Alice Johnson",
      role: "Front Desk Manager",
      department: "Reception",
      status: "on-duty",
      shift: "Morning (8AM - 4PM)",
      location: "Front Desk",
      phone: "+1 (555) 123-4567"
    },
    {
      id: 2,
      name: "Bob Smith",
      role: "Head Chef",
      department: "Kitchen",
      status: "on-duty",
      shift: "Afternoon (2PM - 10PM)",
      location: "Main Kitchen",
      phone: "+1 (555) 234-5678"
    },
    {
      id: 3,
      name: "Carol Davis",
      role: "Housekeeping Supervisor",
      department: "Housekeeping",
      status: "off-duty",
      shift: "Morning (6AM - 2PM)",
      location: "Housekeeping Office",
      phone: "+1 (555) 345-6789"
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Maintenance Engineer",
      department: "Engineering",
      status: "on-call",
      shift: "Night (10PM - 6AM)",
      location: "Engineering Room",
      phone: "+1 (555) 456-7890"
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "on-duty": return "default";
      case "off-duty": return "secondary";
      case "on-call": return "outline";
      default: return "secondary";
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-auto animate-fade-in">
        <div className="p-8 space-y-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Staff Management</h1>
              <p className="text-muted-foreground">
                Monitor staff schedules and assignments
              </p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 transition-all duration-200 hover:scale-105">
              Add Staff Member
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {staffMembers.map((staff) => (
              <Card 
                key={staff.id} 
                className="border border-border/50 shadow-luxury bg-gradient-card transition-all duration-200 hover:scale-105 hover:shadow-gold"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-gradient-gold text-navy font-semibold">
                        {getInitials(staff.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl font-semibold text-foreground">
                            {staff.name}
                          </CardTitle>
                          <CardDescription className="text-muted-foreground">
                            {staff.role}
                          </CardDescription>
                        </div>
                        <Badge variant={getStatusColor(staff.status)}>
                          {staff.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Shift:</span>
                      <span className="text-foreground">{staff.shift}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Location:</span>
                      <span className="text-foreground">{staff.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Phone:</span>
                      <span className="text-foreground">{staff.phone}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Schedule
                    </Button>
                    <Button size="sm" className="flex-1">
                      Assign Task
                    </Button>
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

export default Staff;