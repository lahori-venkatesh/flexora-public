import React from "react";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle, Clock } from "lucide-react";

type Project = {
  id: string;
  title: string;
  status: "active" | "completed" | "pending";
  budget: string;
  proposals: number;
  date: string;
};

const mockProjects: Project[] = [
  {
    id: "1",
    title: "Website Redesign",
    status: "active",
    budget: "₹50,000",
    proposals: 4,
    date: "2024-02-20"
  },
  {
    id: "2",
    title: "Mobile App Development",
    status: "completed",
    budget: "₹150,000",
    proposals: 8,
    date: "2024-02-15"
  },
  {
    id: "3",
    title: "E-commerce Integration",
    status: "pending",
    budget: "₹75,000",
    proposals: 2,
    date: "2024-02-22"
  }
];

const statusIcons = {
  active: <Clock className="h-4 w-4 text-blue-500" />,
  completed: <CheckCircle className="h-4 w-4 text-green-500" />,
  pending: <AlertCircle className="h-4 w-4 text-yellow-500" />
};

const statusStyles = {
  active: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
  pending: "bg-yellow-100 text-yellow-800"
};

export function ProjectList() {
  return (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Budget</TableHead>
            <TableHead>Proposals</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockProjects.map((project) => (
            <TableRow key={project.id}>
              <TableCell className="font-medium">{project.title}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {statusIcons[project.status]}
                  <Badge variant="secondary" className={statusStyles[project.status]}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </Badge>
                </div>
              </TableCell>
              <TableCell>{project.budget}</TableCell>
              <TableCell>{project.proposals}</TableCell>
              <TableCell>{new Date(project.date).toLocaleDateString()}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}