import { Sidebar } from "@/components/layout/sidebar";
import { OverviewStats } from "@/components/dashboard/overview-stats";
import { QuickActions } from "@/components/dashboard/quick-actions";
import heroImage from "@/assets/hotel-hero.jpg";

const Index = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-auto">
        {/* Hero Section */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={heroImage}
            alt="Luxury hotel lobby"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-start p-8">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-2">
                Welcome to ReservaHub Pro
              </h1>
              <p className="text-xl opacity-90">
                Professional hotel management at your fingertips
              </p>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-8 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Dashboard Overview
            </h2>
            <p className="text-muted-foreground">
              Monitor your hotel's performance and manage operations efficiently
            </p>
          </div>

          <OverviewStats />
          
          <QuickActions />
          
          {/* Additional Dashboard Widgets */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gradient-card border border-border/50 rounded-lg shadow-luxury p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                Today's Schedule
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border/30">
                  <span className="text-sm text-foreground">Staff Meeting</span>
                  <span className="text-sm text-muted-foreground">9:00 AM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/30">
                  <span className="text-sm text-foreground">Room Inspections</span>
                  <span className="text-sm text-muted-foreground">11:00 AM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-foreground">VIP Guest Arrival</span>
                  <span className="text-sm text-muted-foreground">3:00 PM</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-card border border-border/50 rounded-lg shadow-luxury p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                Room Status
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground">Occupied</span>
                  <span className="text-sm font-medium text-accent">89 rooms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground">Available</span>
                  <span className="text-sm font-medium text-green-500">8 rooms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground">Maintenance</span>
                  <span className="text-sm font-medium text-red-500">3 rooms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground">Cleaning</span>
                  <span className="text-sm font-medium text-muted-foreground">24 rooms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;