import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-white py-[40px] px-[49px] bg-sky-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Flexora</h3>
            <p className="text-gray-300">
              Connect with top freelancers and clients. No commission, just pure value.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">For Clients</h4>
            <ul className="space-y-2">
              <li><a href="/post-project" className="text-gray-300 hover:text-white transition-colors">Post a Project</a></li>
              <li><a href="/find-freelancers" className="text-gray-300 hover:text-white transition-colors">Find Freelancers</a></li>
              <li><a href="/client-pricing" className="text-gray-300 hover:text-white transition-colors">Client Plans</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-4">
              <a
                href="https://forms.gle/7HspB3m6w4aUbSFZ8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Give Feedback
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>© {new Date().getFullYear()} Flexora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};