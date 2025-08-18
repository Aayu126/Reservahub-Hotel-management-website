import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, Hotel } from 'lucide-react';
import heroImage from '@/assets/hotel-hero.jpg';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginForm = z.infer<typeof loginSchema>;

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true);
    
    const success = await login(data.email, data.password);
    
    if (success) {
      toast({
        title: "Login successful",
        description: "Welcome to ReservaHub Pro",
      });
      navigate('/');
    } else {
      toast({
        title: "Login failed",
        description: "Invalid email or password",
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Hero Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src={heroImage}
          alt="Luxury hotel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-6 p-8">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Hotel className="h-12 w-12 text-gold" />
              <h1 className="text-4xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                ReservaHub Pro
              </h1>
            </div>
            <h2 className="text-3xl font-bold">Welcome Back</h2>
            <p className="text-xl opacity-90">
              Professional hotel management at your fingertips
            </p>
            <div className="space-y-2 text-sm opacity-75">
              <p>Demo Credentials:</p>
              <p>Admin: admin@hotel.com / admin123</p>
              <p>Staff: staff@hotel.com / staff123</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md animate-fade-in">
          <Card className="border border-border/50 shadow-luxury bg-gradient-card">
            <CardHeader className="space-y-1 text-center">
              <div className="flex items-center justify-center gap-2 mb-4 lg:hidden">
                <Hotel className="h-8 w-8 text-accent" />
                <span className="text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                  ReservaHub Pro
                </span>
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">Sign In</CardTitle>
              <CardDescription className="text-muted-foreground">
                Enter your credentials to access the dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="admin@hotel.com"
                            type="email"
                            {...field}
                            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="Enter your password"
                              type={showPassword ? "text" : "password"}
                              {...field}
                              className="pr-10 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4 text-muted-foreground" />
                              ) : (
                                <Eye className="h-4 w-4 text-muted-foreground" />
                              )}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 transition-all duration-200 hover:scale-[1.02]"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;