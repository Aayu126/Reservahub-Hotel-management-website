import { Sidebar } from "@/components/layout/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { user, logout } = useAuth();
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-auto animate-fade-in">
        <div className="p-8 space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Settings</h1>
            <p className="text-muted-foreground">
              Manage your account and application preferences
            </p>
          </div>

          <div className="grid gap-6 max-w-2xl">
            <Card className="border border-border/50 shadow-luxury bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-foreground">Profile Information</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Update your personal details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Name</Label>
                    <Input 
                      id="name" 
                      value={user?.name || ""} 
                      className="bg-muted/30 border-border/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input 
                      id="email" 
                      value={user?.email || ""} 
                      className="bg-muted/30 border-border/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-foreground">Role</Label>
                  <Input 
                    id="role" 
                    value={user?.role || ""} 
                    disabled 
                    className="bg-muted/30 border-border/50"
                  />
                </div>
                <Button onClick={handleSave} className="w-full">
                  Save Changes
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-border/50 shadow-luxury bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-foreground">Notifications</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Configure how you receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-foreground">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications via email
                    </p>
                  </div>
                  <Switch />
                </div>
                <Separator className="bg-border/50" />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-foreground">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive push notifications in browser
                    </p>
                  </div>
                  <Switch />
                </div>
                <Separator className="bg-border/50" />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-foreground">SMS Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive critical alerts via SMS
                    </p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/50 shadow-luxury bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-destructive">Danger Zone</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Actions that cannot be undone
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="destructive" 
                  onClick={handleLogout}
                  className="w-full"
                >
                  Sign Out
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;