import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface SkillsExpertiseProps {
  data: string[];
  updateData: (data: string[]) => void;
}

const SkillsExpertise = ({ data, updateData }: SkillsExpertiseProps) => {
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newSkill.trim()) {
      e.preventDefault();
      if (!data.includes(newSkill.trim())) {
        updateData([...data, newSkill.trim()]);
      }
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    updateData(data.filter(skill => skill !== skillToRemove));
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="skills">Add Your Skills</Label>
        <Input
          id="skills"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyDown={handleAddSkill}
          placeholder="Type a skill and press Enter"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {data.map((skill, index) => (
          <Badge key={index} variant="secondary" className="px-3 py-1">
            {skill}
            <button
              onClick={() => removeSkill(skill)}
              className="ml-2 hover:text-destructive"
            >
              <X className="h-3 w-3" />
            </button>
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default SkillsExpertise;