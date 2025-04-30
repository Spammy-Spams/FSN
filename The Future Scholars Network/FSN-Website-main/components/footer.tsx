import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2B2D42] text-white/80">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              <span className="text-[#C2A78F]">FSN</span> Network
            </h3>
            <p className="text-white/60 mb-4">
              A student-run nonprofit hub dedicated to raising funds for local charities through business partnerships
              and student-led initiatives.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/60 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/60 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/60 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/initiatives" className="text-white/60 hover:text-white transition-colors">
                  Our Initiatives
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-white/60 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/60 hover:text-white transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-white/60 hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-white transition-colors">
                  Become a Partner
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-white transition-colors">
                  Sponsorship Opportunities
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#A47149] mr-2 mt-0.5" />
                <span>123 University Ave, Troy, MI 48084</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#A47149] mr-2" />
                <span>Coming Soon</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#A47149] mr-2" />
                <span>info@futurescholar.org</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} The Future Scholar's Network. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
