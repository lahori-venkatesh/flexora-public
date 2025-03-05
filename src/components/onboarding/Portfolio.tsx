import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";

interface PortfolioItem {
  title: string;
  description: string;
  link: string;
  image?: string;
}

interface PortfolioProps {
  data: PortfolioItem[];
  updateData: (data: PortfolioItem[]) => void;
}

const Portfolio = ({ data = [], updateData }: PortfolioProps) => {
  const addPortfolioItem = () => {
    updateData([
      ...data,
      { title: "", description: "", link: "" }
    ]);
  };

  const removePortfolioItem = (index: number) => {
    const newData = data.filter((_, i) => i !== index);
    updateData(newData);
  };

  const updatePortfolioItem = (index: number, field: string, value: string) => {
    const newData = data.map((item, i) => {
      if (i === index) {
        return { ...item, [field]: value };
      }
      return item;
    });
    updateData(newData);
  };

  const handleImageUpload = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updatePortfolioItem(index, "image", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      {data.map((item, index) => (
        <div key={index} className="p-4 border rounded-lg space-y-4 relative">
          <button
            onClick={() => removePortfolioItem(index)}
            className="absolute top-4 right-4 text-red-500 hover:text-red-700"
          >
            <Trash2 className="h-5 w-5" />
          </button>

          <div>
            <Label htmlFor={`title-${index}`}>Project Title</Label>
            <Input
              id={`title-${index}`}
              value={item.title}
              onChange={(e) => updatePortfolioItem(index, "title", e.target.value)}
              placeholder="Project name"
            />
          </div>

          <div>
            <Label htmlFor={`description-${index}`}>Description</Label>
            <Textarea
              id={`description-${index}`}
              value={item.description}
              onChange={(e) => updatePortfolioItem(index, "description", e.target.value)}
              placeholder="Describe your project"
            />
          </div>

          <div>
            <Label htmlFor={`link-${index}`}>Project Link</Label>
            <Input
              id={`link-${index}`}
              value={item.link}
              onChange={(e) => updatePortfolioItem(index, "link", e.target.value)}
              placeholder="https://..."
            />
          </div>

          <div>
            <Label htmlFor={`image-${index}`}>Project Image</Label>
            <Input
              id={`image-${index}`}
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(index, e)}
            />
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="mt-2 max-w-xs rounded-lg"
              />
            )}
          </div>
        </div>
      ))}

      <Button
        type="button"
        variant="outline"
        className="w-full"
        onClick={addPortfolioItem}
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Portfolio Item
      </Button>
    </div>
  );
};

export default Portfolio;