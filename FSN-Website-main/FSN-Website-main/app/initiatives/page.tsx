import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function InitiativesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#2B2D42] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Our Initiatives
            </h1>
            <p className="mt-6 text-xl text-white/80">
              Discover the various programs and projects we're planning to make a difference in our community.
            </p>
          </div>
        </div>
      </section>

      {/* Initiatives Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="education" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-[#C2A78F]/20">
                <TabsTrigger
                  value="education"
                  className="data-[state=active]:bg-[#2B2D42] data-[state=active]:text-white"
                >
                  Education
                </TabsTrigger>
                <TabsTrigger
                  value="community"
                  className="data-[state=active]:bg-[#2B2D42] data-[state=active]:text-white"
                >
                  Community
                </TabsTrigger>
                <TabsTrigger
                  value="fundraising"
                  className="data-[state=active]:bg-[#2B2D42] data-[state=active]:text-white"
                >
                  Fundraising
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="education">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Scholarship Fund",
                    description:
                      "We plan to provide scholarships to deserving students who demonstrate leadership and commitment to community service.",
                    image: "scholarship",
                  },
                  {
                    title: "Mentorship Program",
                    description:
                      "We aim to connect students with professionals in various fields for guidance, advice, and career exploration.",
                    image: "mentorship",
                  },
                  {
                    title: "STEM Workshops",
                    description:
                      "We will organize hands-on workshops to engage students in science, technology, engineering, and mathematics.",
                    image: "stem",
                  },
                ].map((initiative, index) => (
                  <Card key={index} className="border-[#C2A78F]/30 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-[#2B2D42]">{initiative.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={`/placeholder.svg?height=200&width=400&text=${initiative.image}`}
                        alt={initiative.title}
                        width={400}
                        height={200}
                        className="rounded-md mb-4"
                      />
                      <p className="text-[#2B2D42]/80">{initiative.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/contact" className="w-full">
                        <Button
                          variant="outline"
                          className="w-full border-[#2B2D42] text-[#2B2D42] hover:bg-[#C2A78F]/10"
                        >
                          Get Involved
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="community">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Community Garden",
                    description:
                      "We plan to maintain a community garden that provides fresh produce to local food banks and teaches sustainable gardening practices.",
                    image: "garden",
                  },
                  {
                    title: "Senior Connect",
                    description:
                      "We will organize regular visits to senior centers to provide companionship and assistance to elderly community members.",
                    image: "senior",
                  },
                  {
                    title: "Neighborhood Cleanup",
                    description:
                      "We will coordinate monthly cleanup events to keep our community beautiful and environmentally friendly.",
                    image: "cleanup",
                  },
                ].map((initiative, index) => (
                  <Card key={index} className="border-[#C2A78F]/30 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-[#2B2D42]">{initiative.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={`/placeholder.svg?height=200&width=400&text=${initiative.image}`}
                        alt={initiative.title}
                        width={400}
                        height={200}
                        className="rounded-md mb-4"
                      />
                      <p className="text-[#2B2D42]/80">{initiative.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/contact" className="w-full">
                        <Button
                          variant="outline"
                          className="w-full border-[#2B2D42] text-[#2B2D42] hover:bg-[#C2A78F]/10"
                        >
                          Get Involved
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="fundraising">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Annual Gala",
                    description:
                      "Our flagship fundraising event will feature dinner, entertainment, and a silent auction to support our scholarship fund.",
                    image: "gala",
                  },
                  {
                    title: "Business Partnership Program",
                    description:
                      "We will work with local businesses to create mutually beneficial partnerships that support our initiatives.",
                    image: "business",
                  },
                  {
                    title: "Student Entrepreneurship Fair",
                    description:
                      "We will showcase student-run businesses and products, with proceeds supporting our community projects.",
                    image: "entrepreneur",
                  },
                ].map((initiative, index) => (
                  <Card key={index} className="border-[#C2A78F]/30 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-[#2B2D42]">{initiative.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={`/placeholder.svg?height=200&width=400&text=${initiative.image}`}
                        alt={initiative.title}
                        width={400}
                        height={200}
                        className="rounded-md mb-4"
                      />
                      <p className="text-[#2B2D42]/80">{initiative.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/contact" className="w-full">
                        <Button
                          variant="outline"
                          className="w-full border-[#2B2D42] text-[#2B2D42] hover:bg-[#C2A78F]/10"
                        >
                          Get Involved
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-[#C2A78F]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2B2D42] sm:text-4xl">Our Future Impact</h2>
            <div className="mt-2 h-1 w-20 bg-[#A47149] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "$0", label: "Raised for Local Charities" },
              { number: "0", label: "Community Projects Completed" },
              { number: "0", label: "Volunteer Hours" },
              { number: "0", label: "Community Members Impacted" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-[#A47149] mb-2">{stat.number}</div>
                <p className="text-[#2B2D42]/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="bg-[#2B2D42] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Get Involved</h2>
            <p className="mt-4 text-lg text-white/80">
              There are many ways to support our initiatives, from volunteering your time to making a donation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about">
                <Button className="bg-[#A47149] hover:bg-[#8a5e3c] text-white">Volunteer</Button>
              </Link>
              <Link href="/donate">
                <Button variant="outline" className="border-white/60 text-white hover:bg-white/10">
                  Donate
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
