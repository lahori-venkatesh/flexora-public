import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PaymentDetailsProps {
  data: {
    paymentMethod?: string;
    accountName?: string;
    accountNumber?: string;
    bankName?: string;
    ifscCode?: string;
    upiId?: string;
    paypalEmail?: string;
  };
  updateData: (data: any) => void;
}

const PaymentDetails = ({ data = {}, updateData }: PaymentDetailsProps) => {
  const renderPaymentFields = () => {
    switch (data.paymentMethod) {
      case "bank":
        return (
          <>
            <div>
              <Label htmlFor="accountName">Account Holder Name</Label>
              <Input
                id="accountName"
                value={data.accountName || ""}
                onChange={(e) => updateData({ ...data, accountName: e.target.value })}
                placeholder="Enter account holder name"
              />
            </div>
            <div>
              <Label htmlFor="accountNumber">Account Number</Label>
              <Input
                id="accountNumber"
                value={data.accountNumber || ""}
                onChange={(e) => updateData({ ...data, accountNumber: e.target.value })}
                placeholder="Enter account number"
              />
            </div>
            <div>
              <Label htmlFor="bankName">Bank Name</Label>
              <Input
                id="bankName"
                value={data.bankName || ""}
                onChange={(e) => updateData({ ...data, bankName: e.target.value })}
                placeholder="Enter bank name"
              />
            </div>
            <div>
              <Label htmlFor="ifscCode">IFSC Code</Label>
              <Input
                id="ifscCode"
                value={data.ifscCode || ""}
                onChange={(e) => updateData({ ...data, ifscCode: e.target.value })}
                placeholder="Enter IFSC code"
              />
            </div>
          </>
        );
      case "upi":
        return (
          <div>
            <Label htmlFor="upiId">UPI ID</Label>
            <Input
              id="upiId"
              value={data.upiId || ""}
              onChange={(e) => updateData({ ...data, upiId: e.target.value })}
              placeholder="Enter UPI ID"
            />
          </div>
        );
      case "paypal":
        return (
          <div>
            <Label htmlFor="paypalEmail">PayPal Email</Label>
            <Input
              id="paypalEmail"
              type="email"
              value={data.paypalEmail || ""}
              onChange={(e) => updateData({ ...data, paypalEmail: e.target.value })}
              placeholder="Enter PayPal email"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="paymentMethod">Payment Method</Label>
        <Select
          value={data.paymentMethod}
          onValueChange={(value) => updateData({ ...data, paymentMethod: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select payment method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bank">Bank Transfer</SelectItem>
            <SelectItem value="upi">UPI</SelectItem>
            <SelectItem value="paypal">PayPal</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {renderPaymentFields()}
    </div>
  );
};

export default PaymentDetails;