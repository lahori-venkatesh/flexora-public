import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
const About = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mt-16 container mx-auto px-4 py-8">
        <h1 className="font-bold text-center mb-8 text-3xl">About TalentHire</h1>
        <div className="max-w-3xl mx-auto space-y-8 text-left">
          <section>
            <p className="text-lg leading-relaxed">
              TalentHire is a cutting-edge freelance marketplace designed to connect talented professionals 
              with businesses seeking expertise. Our platform streamlines the hiring process, making it 
              efficient and transparent for both clients and freelancers.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              To create meaningful connections between businesses and freelancers, 
              fostering a community where talent meets opportunity, and quality work 
              is rewarded fairly. We believe in empowering professionals to achieve their 
              full potential while helping businesses find the perfect talent for their needs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg leading-relaxed">
              Founded in 2024, TalentHire emerged from a simple observation: the traditional 
              hiring process was too slow and complicated. Our founders, experienced in both 
              freelancing and hiring, decided to create a platform that would make the process 
              seamless and enjoyable for everyone involved.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-semibold text-gray-600">JS</span>
                    </div>
                    <h3 className="text-xl font-semibold">Jacob Smith</h3>
                    <p className="text-gray-600">Co-Founder & CEO</p>
                    <p className="mt-2 text-sm">Former freelance developer with a passion for creating efficient systems.</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-semibold text-gray-600">RL</span>
                    </div>
                    <h3 className="text-xl font-semibold">Rachel Lee</h3>
                    <p className="text-gray-600">Co-Founder & COO</p>
                    <p className="mt-2 text-sm">Product strategist who previously managed hiring at tech startups.</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-semibold text-gray-600">MP</span>
                    </div>
                    <h3 className="text-xl font-semibold">Marco Patel</h3>
                    <p className="text-gray-600">CTO</p>
                    <p className="mt-2 text-sm">Software architect with expertise in marketplace platforms.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Why Choose TalentHire?</h2>
            <ul className="list-disc pl-6 space-y-3 text-lg">
              <li>Quick and efficient matching system powered by advanced algorithms</li>
              <li>Secure payment protection with escrow services</li>
              <li>Verified professional profiles with skill validation</li>
              <li>24/7 dedicated support for both clients and freelancers</li>
              <li>Transparent feedback and rating system</li>
              <li>Competitive pricing with no hidden fees</li>
              <li>Advanced project management tools</li>
              <li>Seamless communication channels</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                <p className="text-lg">We believe in clear communication and honest business practices.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-lg">We maintain high standards in every aspect of our service.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-lg">We continuously improve our platform with cutting-edge technology.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-lg">We foster a supportive environment for professional growth.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
            <p className="text-lg leading-relaxed mb-4">
              Have questions or suggestions? We'd love to hear from you! Reach out to our team
              through our contact page or send us an email at support@talenthire.com.
            </p>
            <div className="flex justify-center mt-6">
              <a href="/contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
                Contact Us
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>;
};
export default About;