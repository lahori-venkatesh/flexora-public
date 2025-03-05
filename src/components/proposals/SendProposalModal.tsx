import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
interface SendProposalModalProps {
  projectId: number;
  projectTitle: string;
}
interface ProposalFormData {
  coverLetter: string;
  bidAmount: string;
  deliveryTime: string;
}
export function SendProposalModal({
  projectId,
  projectTitle
}: SendProposalModalProps) {
  const {
    toast
  } = useToast();
  const form = useForm<ProposalFormData>({
    defaultValues: {
      coverLetter: "",
      bidAmount: "",
      deliveryTime: ""
    }
  });
  const onSubmit = (data: ProposalFormData) => {
    console.log("Submitting proposal:", {
      projectId,
      ...data
    });
    // Here you would typically make an API call to submit the proposal

    toast({
      title: "Proposal Submitted",
      description: "Your proposal has been sent successfully!"
    });
  };
  return <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full mt-4 text-white">Send Proposal</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Send Proposal for {projectTitle}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField control={form.control} name="coverLetter" render={({
            field
          }) => <FormItem>
                  <FormLabel>Cover Letter</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Explain why you're the best fit for this project..." className="min-h-[120px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>} />
            <FormField control={form.control} name="bidAmount" render={({
            field
          }) => <FormItem>
                  <FormLabel>Bid Amount (₹)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter your bid amount" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>} />
            <FormField control={form.control} name="deliveryTime" render={({
            field
          }) => <FormItem>
                  <FormLabel>Delivery Time (in days)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter delivery time" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>} />
            <Button type="submit" className="w-full">Submit Proposal</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>;
}