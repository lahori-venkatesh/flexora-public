import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PersonalInfoProps {
  data: any;
  updateData: (data: any) => void;
}

const PersonalInfo = ({ data, updateData }: PersonalInfoProps) => {
  const [profileImage, setProfileImage] = useState<string>("");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
        updateData({ ...data, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center space-y-4">
        <Avatar className="w-24 h-24">
          <AvatarImage src={profileImage} />
          <AvatarFallback>Upload</AvatarFallback>
        </Avatar>
        <Input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="max-w-xs"
        />
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            value={data.fullName || ""}
            onChange={(e) => updateData({ ...data, fullName: e.target.value })}
            placeholder="John Doe"
          />
        </div>

        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={data.location || ""}
            onChange={(e) => updateData({ ...data, location: e.target.value })}
            placeholder="City, Country"
          />
        </div>

        <div>
          <Label htmlFor="bio">Professional Bio</Label>
          <Textarea
            id="bio"
            value={data.bio || ""}
            onChange={(e) => updateData({ ...data, bio: e.target.value })}
            placeholder="Tell us about yourself and your professional background"
            className="h-32"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;