
import FreelancerDashboardLayout from "@/components/freelancer/FreelancerDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FreelancerDashboard = () => {
  const stats = [
    { title: "Active Proposals", value: "5" },
    { title: "Accepted Projects", value: "2" },
    { title: "Proposals Left", value: "15" },
    { title: "Earnings", value: "₹75,000" },
  ];

  const monthlyEarnings = [
    { month: 'Jan', amount: 45000 },
    { month: 'Feb', amount: 52000 },
    { month: 'Mar', amount: 48000 },
    { month: 'Apr', amount: 75000 },
    { month: 'May', amount: 62000 },
    { month: 'Jun', amount: 70000 },
  ];

  const projectStats = [
    { name: 'Web Dev', completed: 4, ongoing: 2 },
    { name: 'Mobile App', completed: 2, ongoing: 1 },
    { name: 'UI/UX', completed: 3, ongoing: 2 },
    { name: 'Backend', completed: 5, ongoing: 1 },
  ];

  return (
    <FreelancerDashboardLayout>
      <div className="space-y-5 md:space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Dashboard</h1>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {stats.map((stat) => (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-1 md:pb-2 px-3 md:px-4 pt-3 md:pt-4">
                <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground whitespace-normal">
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-3 md:px-4 pb-3 md:pb-4">
                <div className="text-base sm:text-xl md:text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <Card>
            <CardHeader className="px-3 md:px-6 py-2 md:py-4">
              <CardTitle className="text-base md:text-lg">Monthly Earnings</CardTitle>
            </CardHeader>
            <CardContent className="h-[200px] md:h-[300px] px-2 md:px-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyEarnings}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" fontSize={12} />
                  <YAxis fontSize={12} width={45} />
                  <Tooltip contentStyle={{ fontSize: '12px' }} />
                  <Legend wrapperStyle={{ fontSize: '12px', marginTop: '10px' }} />
                  <Line type="monotone" dataKey="amount" stroke="#3498db" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="px-3 md:px-6 py-2 md:py-4">
              <CardTitle className="text-base md:text-lg">Project Statistics</CardTitle>
            </CardHeader>
            <CardContent className="h-[200px] md:h-[300px] px-2 md:px-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={projectStats}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" fontSize={12} />
                  <YAxis fontSize={12} width={30} />
                  <Tooltip contentStyle={{ fontSize: '12px' }} />
                  <Legend wrapperStyle={{ fontSize: '12px', marginTop: '10px' }} />
                  <Bar dataKey="completed" fill="#2ecc71" />
                  <Bar dataKey="ongoing" fill="#3498db" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </FreelancerDashboardLayout>
  );
};

export default FreelancerDashboard;
