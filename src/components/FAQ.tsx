import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
export const FAQ = () => {
  return <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">How does JiffConnects work?</AccordionTrigger>
              <AccordionContent>
                JiffConnects is a platform that connects clients with freelancers. Clients can post projects for free and freelancers can submit proposals. We facilitate the connection while ensuring quality and reliability.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">Is it free to post a project?</AccordionTrigger>
              <AccordionContent>
                Yes, posting projects is completely free! You can post your project and view up to 4 freelancer contact details per project at no cost. Premium options are available for enhanced features.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">What are the fees for freelancers?</AccordionTrigger>
              <AccordionContent>
                Freelancers can submit up to 10 proposals per month for free. Premium plans starting at ₹3,999/month offer unlimited proposals and direct client leads.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg">How do you ensure quality?</AccordionTrigger>
              <AccordionContent>
                We verify freelancer profiles, maintain a review system, and offer premium features like dedicated project managers to ensure project success and quality delivery.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg">What types of projects can I post?</AccordionTrigger>
              <AccordionContent>
                You can post projects across various categories including web development, mobile apps, design, writing, marketing, and more. Our platform supports both technical and creative projects.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>;
};