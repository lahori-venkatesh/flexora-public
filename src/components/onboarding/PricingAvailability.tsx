import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PricingAvailabilityProps {
  data: {
    hourlyRate?: string;
    availability?: string;
    workingHours?: string;
    timezone?: string;
    preferredProjectSize?: string;
  };
  updateData: (data: any) => void;
}

const PricingAvailability = ({ data = {}, updateData }: PricingAvailabilityProps) => {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="hourlyRate">Hourly Rate (USD)</Label>
        <Input
          id="hourlyRate"
          type="number"
          value={data.hourlyRate || ""}
          onChange={(e) => updateData({ ...data, hourlyRate: e.target.value })}
          placeholder="e.g., 50"
        />
      </div>

      <div>
        <Label htmlFor="availability">Availability</Label>
        <Select
          value={data.availability}
          onValueChange={(value) => updateData({ ...data, availability: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select your availability" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="full-time">Full Time</SelectItem>
            <SelectItem value="part-time">Part Time</SelectItem>
            <SelectItem value="contract">Contract</SelectItem>
            <SelectItem value="freelance">Freelance</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="workingHours">Preferred Working Hours</Label>
        <Input
          id="workingHours"
          value={data.workingHours || ""}
          onChange={(e) => updateData({ ...data, workingHours: e.target.value })}
          placeholder="e.g., 9 AM - 5 PM"
        />
      </div>

      <div>
        <Label htmlFor="timezone">Timezone</Label>
        <Input
          id="timezone"
          value={data.timezone || ""}
          onChange={(e) => updateData({ ...data, timezone: e.target.value })}
          placeholder="e.g., UTC+5:30"
        />
      </div>

      <div>
        <Label htmlFor="preferredProjectSize">Preferred Project Size</Label>
        <Select
          value={data.preferredProjectSize}
          onValueChange={(value) => updateData({ ...data, preferredProjectSize: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select preferred project size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="small">Small ($100-$1,000)</SelectItem>
            <SelectItem value="medium">Medium ($1,000-$5,000)</SelectItem>
            <SelectItem value="large">Large ($5,000-$20,000)</SelectItem>
            <SelectItem value="enterprise">Enterprise ($20,000+)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default PricingAvailability;