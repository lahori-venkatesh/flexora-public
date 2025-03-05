import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

interface Education {
  institution: string;
  degree: string;
  year: string;
  field: string;
}

interface EducationCertificationsProps {
  data: Education[];
  updateData: (data: Education[]) => void;
}

const EducationCertifications = ({ data = [], updateData }: EducationCertificationsProps) => {
  const addEducation = () => {
    updateData([
      ...data,
      { institution: "", degree: "", year: "", field: "" }
    ]);
  };

  const removeEducation = (index: number) => {
    const newData = data.filter((_, i) => i !== index);
    updateData(newData);
  };

  const updateEducation = (index: number, field: string, value: string) => {
    const newData = data.map((edu, i) => {
      if (i === index) {
        return { ...edu, [field]: value };
      }
      return edu;
    });
    updateData(newData);
  };

  return (
    <div className="space-y-6">
      {data.map((education, index) => (
        <div key={index} className="p-4 border rounded-lg space-y-4 relative">
          <button
            onClick={() => removeEducation(index)}
            className="absolute top-4 right-4 text-red-500 hover:text-red-700"
          >
            <Trash2 className="h-5 w-5" />
          </button>

          <div>
            <Label htmlFor={`institution-${index}`}>Institution</Label>
            <Input
              id={`institution-${index}`}
              value={education.institution}
              onChange={(e) => updateEducation(index, "institution", e.target.value)}
              placeholder="University/Institution name"
            />
          </div>

          <div>
            <Label htmlFor={`degree-${index}`}>Degree</Label>
            <Input
              id={`degree-${index}`}
              value={education.degree}
              onChange={(e) => updateEducation(index, "degree", e.target.value)}
              placeholder="e.g., Bachelor's, Master's"
            />
          </div>

          <div>
            <Label htmlFor={`field-${index}`}>Field of Study</Label>
            <Input
              id={`field-${index}`}
              value={education.field}
              onChange={(e) => updateEducation(index, "field", e.target.value)}
              placeholder="e.g., Computer Science"
            />
          </div>

          <div>
            <Label htmlFor={`year-${index}`}>Year of Completion</Label>
            <Input
              id={`year-${index}`}
              value={education.year}
              onChange={(e) => updateEducation(index, "year", e.target.value)}
              placeholder="e.g., 2020"
            />
          </div>
        </div>
      ))}

      <Button
        type="button"
        variant="outline"
        className="w-full"
        onClick={addEducation}
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Education
      </Button>
    </div>
  );
};

export default EducationCertifications;