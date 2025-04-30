import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#2B2D42] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">Contact Us</h1>
            <p className="mt-6 text-xl text-white/80">
              Have questions or want to learn more about our organization? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-[#2B2D42] mb-6">Get In Touch</h2>
              <div className="h-1 w-20 bg-[#A47149] mb-6"></div>
              <p className="text-[#2B2D42]/80 mb-8">
                Whether you have a question about our initiatives, want to volunteer, or are interested in partnering
                with us, our team is here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#C2A78F]/20 text-[#A47149]">
                      <MapPin className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-[#2B2D42]">Our Location</h3>
                    <p className="mt-1 text-[#2B2D42]/80">
                      123 University Ave
                      <br />
                      Troy, MI 48084
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#C2A78F]/20 text-[#A47149]">
                      <Mail className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-[#2B2D42]">Email Us</h3>
                    <p className="mt-1 text-[#2B2D42]/80">
                      info@futurescholar.org
                      <br />
                      partnerships@futurescholar.org
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#C2A78F]/20 text-[#A47149]">
                      <Phone className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-[#2B2D42]">Call Us</h3>
                    <p className="mt-1 text-[#2B2D42]/80">
                      (123) 456-7890
                      <br />
                      Monday - Friday, 9am - 5pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#C2A78F]/20 text-[#A47149]">
                      <Clock className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-[#2B2D42]">Office Hours</h3>
                    <p className="mt-1 text-[#2B2D42]/80">
                      Monday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card className="border-[#C2A78F]/30 shadow-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-[#2B2D42] mb-6">Send Us a Message</h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[#C2A78F]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#2B2D42]">Find Us</h2>
            <p className="mt-2 text-[#2B2D42]/80">Visit our office at Troy High School.</p>
          </div>

          <div className="bg-white p-2 rounded-lg shadow-sm">
            <div className="aspect-[16/9] w-full bg-gray-200 rounded-md overflow-hidden">
              {/* In a real implementation, this would be a Google Maps embed */}
              <div className="w-full h-full flex items-center justify-center bg-[#C2A78F]/20 text-[#2B2D42]">
                <div className="text-center p-8">
                  <MapPin className="h-12 w-12 mx-auto text-[#A47149] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Map Coming Soon</h3>
                  <p>
                    123 University Ave
                    <br />
                    Troy, MI 48084
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2B2D42] sm:text-4xl">Frequently Asked Questions</h2>
            <div className="mt-2 h-1 w-20 bg-[#A47149] mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  question: "How can I get involved with The Future Scholar's Network?",
                  answer:
                    "There are many ways to get involved! You can volunteer for our events, become a mentor, partner with us as a business, or donate to support our initiatives. Check out our 'Get Involved' page for more information.",
                },
                {
                  question: "Do you offer internships for high school students?",
                  answer:
                    "Yes, we offer internship opportunities for high school students throughout the year. These internships provide valuable experience in nonprofit management, event planning, marketing, and more.",
                },
                {
                  question: "How can my business partner with The Future Scholar's Network?",
                  answer:
                    "We offer various partnership opportunities for businesses, including sponsorship of events, mentorship programs, and collaborative initiatives. Contact our partnerships team at partnerships@futurescholar.org to discuss options.",
                },
                {
                  question: "Are donations to The Future Scholar's Network tax-deductible?",
                  answer:
                    "Yes, The Future Scholar's Network is a registered 501(c)(3) nonprofit organization, and all donations are tax-deductible to the extent allowed by law.",
                },
              ].map((faq, index) => (
                <div key={index} className="border-b border-[#C2A78F]/30 pb-6">
                  <h3 className="text-xl font-semibold text-[#2B2D42] mb-3">{faq.question}</h3>
                  <p className="text-[#2B2D42]/80">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
