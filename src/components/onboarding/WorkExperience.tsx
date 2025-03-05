import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";

interface WorkExperienceProps {
  data: Array<{
    company: string;
    position: string;
    duration: string;
    description: string;
  }>;
  updateData: (data: any) => void;
}

const WorkExperience = ({ data = [], updateData }: WorkExperienceProps) => {
  const addExperience = () => {
    updateData([
      ...data,
      { company: "", position: "", duration: "", description: "" }
    ]);
  };

  const removeExperience = (index: number) => {
    const newData = data.filter((_, i) => i !== index);
    updateData(newData);
  };

  const updateExperience = (index: number, field: string, value: string) => {
    const newData = data.map((exp, i) => {
      if (i === index) {
        return { ...exp, [field]: value };
      }
      return exp;
    });
    updateData(newData);
  };

  return (
    <div className="space-y-6">
      {data.map((experience, index) => (
        <div key={index} className="p-4 border rounded-lg space-y-4 relative">
          <button
            onClick={() => removeExperience(index)}
            className="absolute top-4 right-4 text-red-500 hover:text-red-700"
          >
            <Trash2 className="h-5 w-5" />
          </button>
          
          <div>
            <Label htmlFor={`company-${index}`}>Company Name</Label>
            <Input
              id={`company-${index}`}
              value={experience.company}
              onChange={(e) => updateExperience(index, "company", e.target.value)}
              placeholder="Company name"
            />
          </div>

          <div>
            <Label htmlFor={`position-${index}`}>Position</Label>
            <Input
              id={`position-${index}`}
              value={experience.position}
              onChange={(e) => updateExperience(index, "position", e.target.value)}
              placeholder="Your role"
            />
          </div>

          <div>
            <Label htmlFor={`duration-${index}`}>Duration</Label>
            <Input
              id={`duration-${index}`}
              value={experience.duration}
              onChange={(e) => updateExperience(index, "duration", e.target.value)}
              placeholder="e.g., Jan 2020 - Present"
            />
          </div>

          <div>
            <Label htmlFor={`description-${index}`}>Description</Label>
            <Textarea
              id={`description-${index}`}
              value={experience.description}
              onChange={(e) => updateExperience(index, "description", e.target.value)}
              placeholder="Describe your responsibilities and achievements"
            />
          </div>
        </div>
      ))}

      <Button
        type="button"
        variant="outline"
        className="w-full"
        onClick={addExperience}
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Work Experience
      </Button>
    </div>
  );
};

export default WorkExperience;