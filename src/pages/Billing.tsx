import { Sidebar } from "@/components/layout/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, FileText, Calendar } from "lucide-react";

const Billing = () => {
  const invoices = [
    {
      id: 1,
      guestName: "John Doe",
      room: "101",
      checkIn: "2024-01-15",
      checkOut: "2024-01-20",
      amount: 850.00,
      status: "paid",
      services: ["Room Service", "Laundry", "Spa"]
    },
    {
      id: 2,
      guestName: "Jane Smith",
      room: "205",
      checkIn: "2024-01-18",
      checkOut: "2024-01-22",
      amount: 1200.50,
      status: "pending",
      services: ["Restaurant", "Mini Bar", "Conference Room"]
    },
    {
      id: 3,
      guestName: "Mike Johnson",
      room: "312",
      checkIn: "2024-01-10",
      checkOut: "2024-01-17",
      amount: 2100.75,
      status: "overdue",
      services: ["Room Service", "Spa", "Business Center"]
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid": return "default";
      case "pending": return "secondary";
      case "overdue": return "destructive";
      default: return "outline";
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-auto animate-fade-in">
        <div className="p-8 space-y-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Billing & Invoices</h1>
              <p className="text-muted-foreground">
                Manage guest bills and payment processing
              </p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 transition-all duration-200 hover:scale-105">
              Generate Invoice
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {invoices.map((invoice) => (
              <Card 
                key={invoice.id} 
                className="border border-border/50 shadow-luxury bg-gradient-card transition-all duration-200 hover:scale-105 hover:shadow-gold"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-semibold text-foreground">
                        Invoice #{invoice.id.toString().padStart(4, '0')}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {invoice.guestName} - Room {invoice.room}
                      </CardDescription>
                    </div>
                    <Badge variant={getStatusColor(invoice.status)}>
                      {invoice.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-foreground">Check-in:</p>
                      <p className="text-muted-foreground">{invoice.checkIn}</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Check-out:</p>
                      <p className="text-muted-foreground">{invoice.checkOut}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Services:</p>
                    <div className="flex gap-1 flex-wrap">
                      {invoice.services.map((service, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-accent" />
                      <span className="text-2xl font-bold text-accent">
                        ${invoice.amount.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <FileText className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      {invoice.status !== "paid" && (
                        <Button size="sm">
                          Process Payment
                        </Button>
                      )}
                    </div>
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

export default Billing;