import { Facebook, Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 mt-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              &copy; ZEPBOOKS. All rights reserved.
            </p>
          </div>
          <div className="flex mb-4 md:mb-0">
            <a href="#" className="mx-2 hover:text-gray-300">
              About
            </a>
            <a href="#" className="mx-2 hover:text-gray-300">
              Contact
            </a>
            <a href="#" className="mx-2 hover:text-gray-300">
              Privacy Policy
            </a>
          </div>
          <div className="flex">
            <a href="#" className="mx-2 hover:text-gray-300">
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="mx-2 hover:text-gray-300">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="mx-2 hover:text-gray-300">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="mx-2 hover:text-gray-300">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
