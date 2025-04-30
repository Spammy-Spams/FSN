import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#2B2D42] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">About Us</h1>
            <p className="mt-6 text-xl text-white/80">
              Learn more about The Future Scholar's Network, our mission, and the team behind our initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#2B2D42] mb-6">Our Story</h2>
              <div className="h-1 w-20 bg-[#A47149] mb-6"></div>
              <p className="text-[#2B2D42]/80 mb-4">
                The Future Scholar's Network is being founded in 2025 by a group of passionate students at Troy High
                School who want to make a difference in their community. We're starting as a small club with big
                ambitions.
              </p>
              <p className="text-[#2B2D42]/80 mb-4">
                Our founding members recognize that students have incredible potential to create positive change, but
                often lack the resources and connections to make their ideas a reality. By creating a network that
                connects students with businesses and nonprofit organizations, we aim to amplify the impact of
                student-led initiatives.
              </p>
              <p className="text-[#2B2D42]/80">
                As we grow, we plan to expand our reach, providing more opportunities for students to develop leadership
                skills, gain real-world experience, and make a meaningful difference in their communities.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Our Story"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-[#C2A78F]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2B2D42] sm:text-4xl">Our Team</h2>
            <div className="mt-2 h-1 w-20 bg-[#A47149] mx-auto"></div>
            <p className="mt-4 text-lg text-[#2B2D42]/80 max-w-2xl mx-auto">
              Meet the dedicated students and advisors who lead The Future Scholar's Network.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Position Open", role: "President", image: "team-1" },
              { name: "Position Open", role: "Vice President", image: "team-2" },
              { name: "Position Open", role: "Treasurer", image: "team-3" },
              { name: "Position Open", role: "Secretary", image: "team-4" },
            ].map((member, index) => (
              <Card key={index} className="border-[#C2A78F]/30 overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=${member.image}`}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-lg text-[#2B2D42]">{member.name}</h3>
                  <p className="text-[#2B2D42]/70">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-[#2B2D42] mb-8">Advisory Board</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Position Open", role: "Faculty Advisor", image: "advisor-1" },
                { name: "Position Open", role: "Community Liaison", image: "advisor-2" },
                { name: "Position Open", role: "Business Mentor", image: "advisor-3" },
              ].map((advisor, index) => (
                <Card key={index} className="border-[#C2A78F]/30">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={`/placeholder.svg?height=100&width=100&text=${advisor.image}`}
                        alt={advisor.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2B2D42]">{advisor.name}</h3>
                      <p className="text-[#2B2D42]/70">{advisor.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2B2D42] sm:text-4xl">Our Values</h2>
            <div className="mt-2 h-1 w-20 bg-[#A47149] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Leadership",
                description:
                  "We believe in empowering students to take initiative and develop their leadership skills through hands-on experience.",
              },
              {
                title: "Collaboration",
                description:
                  "We value partnerships and teamwork, bringing together diverse perspectives to create innovative solutions.",
              },
              {
                title: "Impact",
                description:
                  "We are committed to creating meaningful change in our community through targeted initiatives and sustainable programs.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C2A78F]/20 mb-4">
                  <span className="text-2xl font-bold text-[#A47149]">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2B2D42] mb-3">{value.title}</h3>
                <p className="text-[#2B2D42]/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2B2D42] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Join Our Team</h2>
            <p className="mt-4 text-lg text-white/80">
              Interested in becoming part of The Future Scholar's Network? We're always looking for passionate students
              to join our team.
            </p>
            <div className="mt-8">
              <Button className="bg-[#A47149] hover:bg-[#8a5e3c] text-white">Apply Now</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
