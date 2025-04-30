import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, HandHeart, Users, Building, Mail, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import NewsletterSignup from "@/components/newsletter-signup"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#C2A78F]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#C2A78F]/90 to-[#C2A78F]/70 z-10" />
        <div className="container relative z-20 mx-auto px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-[#2B2D42] sm:text-5xl md:text-6xl">
              <span className="block">The Future</span>
              <span className="block text-white">Scholar's Network</span>
            </h1>
            <p className="mt-6 max-w-xl text-xl text-[#2B2D42]">
              A student-run nonprofit hub dedicated to raising funds for local charities through business partnerships
              and student-led initiatives.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <Button className="bg-[#2B2D42] hover:bg-[#1d1e2d] text-white">
                  Get Involved <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/initiatives">
                <Button variant="outline" className="border-[#2B2D42] text-[#2B2D42] hover:bg-[#C2A78F]/20">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2B2D42] sm:text-4xl">Our Mission</h2>
            <div className="mt-2 h-1 w-20 bg-[#A47149] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="border-[#C2A78F]/30 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="rounded-full bg-[#C2A78F]/20 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <HandHeart className="h-6 w-6 text-[#A47149]" />
                </div>
                <CardTitle className="text-xl font-semibold text-[#2B2D42]">Empower Students</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#2B2D42]/80">
                  We provide students with leadership opportunities and real-world experience in nonprofit management
                  and fundraising.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#C2A78F]/30 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="rounded-full bg-[#C2A78F]/20 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-[#A47149]" />
                </div>
                <CardTitle className="text-xl font-semibold text-[#2B2D42]">Support Local Charities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#2B2D42]/80">
                  We partner with local charities to raise funds and awareness for important causes in our community.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#C2A78F]/30 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="rounded-full bg-[#C2A78F]/20 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#A47149]" />
                </div>
                <CardTitle className="text-xl font-semibold text-[#2B2D42]">Build Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#2B2D42]/80">
                  We create connections between students, businesses, and nonprofit organizations to strengthen our
                  community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-[#2B2D42] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Impact</h2>
            <div className="mt-2 h-1 w-20 bg-[#A47149] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-center">
            <div>
              <div className="text-4xl font-bold text-[#C2A78F] mb-2">$0</div>
              <p className="text-white/80">Raised for Local Charities</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#C2A78F] mb-2">0</div>
              <p className="text-white/80">Student Volunteers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#C2A78F] mb-2">0</div>
              <p className="text-white/80">Business Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2B2D42] sm:text-4xl">Our Initiatives</h2>
            <div className="mt-2 h-1 w-20 bg-[#A47149] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-[#C2A78F]/30 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#2B2D42]">Scholarship Fund</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Scholarship Fund"
                  width={400}
                  height={200}
                  className="rounded-md mb-4"
                />
                <p className="text-[#2B2D42]/80">
                  We provide scholarships to deserving students who demonstrate leadership and commitment to community
                  service.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/initiatives" className="w-full">
                  <Button variant="outline" className="w-full border-[#2B2D42] text-[#2B2D42] hover:bg-[#C2A78F]/10">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="border-[#C2A78F]/30 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#2B2D42]">Business Mentorship</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Business Mentorship"
                  width={400}
                  height={200}
                  className="rounded-md mb-4"
                />
                <p className="text-[#2B2D42]/80">
                  We connect students with business professionals for mentorship and career guidance opportunities.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/initiatives" className="w-full">
                  <Button variant="outline" className="w-full border-[#2B2D42] text-[#2B2D42] hover:bg-[#C2A78F]/10">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="border-[#C2A78F]/30 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#2B2D42]">Community Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Community Projects"
                  width={400}
                  height={200}
                  className="rounded-md mb-4"
                />
                <p className="text-[#2B2D42]/80">
                  We organize and execute community service projects that address local needs and create positive
                  change.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/initiatives" className="w-full">
                  <Button variant="outline" className="w-full border-[#2B2D42] text-[#2B2D42] hover:bg-[#C2A78F]/10">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-[#C2A78F]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2B2D42] sm:text-4xl">Upcoming Events</h2>
            <div className="mt-2 h-1 w-20 bg-[#A47149] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="border-[#C2A78F]/30 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-[#A47149] text-white p-3 rounded-lg text-center min-w-16">
                    <div className="text-sm">MAY</div>
                    <div className="text-2xl font-bold">15</div>
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold text-[#2B2D42]">Annual Fundraising Gala</CardTitle>
                    <CardDescription>6:00 PM - 10:00 PM • City Convention Center</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#2B2D42]/80">
                  Join us for our annual fundraising gala featuring dinner, entertainment, and a silent auction to
                  support our scholarship fund.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/events" className="w-full">
                  <Button className="bg-[#2B2D42] hover:bg-[#1d1e2d] text-white w-full">Register Now</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="border-[#C2A78F]/30 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-[#A47149] text-white p-3 rounded-lg text-center min-w-16">
                    <div className="text-sm">JUN</div>
                    <div className="text-2xl font-bold">10</div>
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold text-[#2B2D42]">Leadership Workshop</CardTitle>
                    <CardDescription>1:00 PM - 4:00 PM • University Campus</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#2B2D42]/80">
                  A workshop designed to help students develop leadership skills and learn about nonprofit management
                  from industry professionals.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/events" className="w-full">
                  <Button className="bg-[#2B2D42] hover:bg-[#1d1e2d] text-white w-full">Register Now</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="text-center mt-10">
            <Link href="/events">
              <Button variant="outline" className="border-[#2B2D42] text-[#2B2D42] hover:bg-[#C2A78F]/20">
                View All Events <Calendar className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2B2D42] sm:text-4xl">Our Partners</h2>
            <div className="mt-2 h-1 w-20 bg-[#A47149] mx-auto"></div>
            <p className="mt-4 text-lg text-[#2B2D42]/80 max-w-2xl mx-auto">
              We're looking for organizations to support our mission and help us make a difference.
            </p>
          </div>
          <div className="text-center p-8 border-2 border-dashed border-[#C2A78F] rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-[#2B2D42] mb-4">Become Our First Partner</h3>
            <p className="text-[#2B2D42]/80 mb-6">
              We're just getting started and looking for founding partners to help launch our initiatives.
            </p>
            <Link href="/contact">
              <Button variant="outline" className="border-[#2B2D42] text-[#2B2D42] hover:bg-[#C2A78F]/20">
                Become a Partner <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[#C2A78F]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#2B2D42]">Stay Updated</h2>
              <p className="mt-2 text-[#2B2D42]/80">
                Subscribe to our newsletter to receive updates on our initiatives and upcoming events.
              </p>
            </div>
            <NewsletterSignup />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2B2D42] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to Make a Difference?</h2>
            <p className="mt-4 text-lg text-white/80">
              Join our network of students, businesses, and nonprofits working together to create positive change in our
              community.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about">
                <Button className="bg-[#A47149] hover:bg-[#8a5e3c] text-white">Get Involved</Button>
              </Link>
              <Link href="/donate">
                <Button variant="outline" className="border-white/60 text-white hover:bg-white/10">
                  Donate Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2B2D42] sm:text-4xl">Contact Us</h2>
            <div className="mt-2 h-1 w-20 bg-[#A47149] mx-auto"></div>
            <p className="mt-4 text-lg text-[#2B2D42]/80 max-w-2xl mx-auto">
              Have questions or want to learn more about our organization? We'd love to hear from you.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Card className="border-[#C2A78F]/30 shadow-sm">
              <CardContent className="p-6">
                <Link href="/contact" className="w-full">
                  <Button className="w-full bg-[#2B2D42] hover:bg-[#1d1e2d] text-white">
                    Contact Us <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
