import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DonationForm from "@/components/donation-form"

export default function DonatePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#2B2D42] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Support Our Mission
            </h1>
            <p className="mt-6 text-xl text-white/80">
              Your donation helps us empower students and support local charities through our initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2B2D42] sm:text-4xl">Make a Donation</h2>
            <div className="mt-2 h-1 w-20 bg-[#A47149] mx-auto"></div>
            <p className="mt-4 text-lg text-[#2B2D42]/80 max-w-2xl mx-auto">
              Choose how you'd like to support The Future Scholar's Network.
            </p>
          </div>

          <Tabs defaultValue="one-time" className="w-full max-w-3xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-[#C2A78F]/20">
                <TabsTrigger
                  value="one-time"
                  className="data-[state=active]:bg-[#2B2D42] data-[state=active]:text-white"
                >
                  One-Time Donation
                </TabsTrigger>
                <TabsTrigger
                  value="monthly"
                  className="data-[state=active]:bg-[#2B2D42] data-[state=active]:text-white"
                >
                  Monthly Giving
                </TabsTrigger>
                <TabsTrigger
                  value="specific"
                  className="data-[state=active]:bg-[#2B2D42] data-[state=active]:text-white"
                >
                  Fund a Project
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="one-time">
              <Card className="border-[#C2A78F]/30">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[#2B2D42]">One-Time Donation</CardTitle>
                  <CardDescription>Make a single donation to support our general fund.</CardDescription>
                </CardHeader>
                <CardContent>
                  <DonationForm donationType="one-time" />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="monthly">
              <Card className="border-[#C2A78F]/30">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[#2B2D42]">Monthly Giving</CardTitle>
                  <CardDescription>Become a sustaining supporter with a monthly donation.</CardDescription>
                </CardHeader>
                <CardContent>
                  <DonationForm donationType="monthly" />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specific">
              <Card className="border-[#C2A78F]/30">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[#2B2D42]">Fund a Project</CardTitle>
                  <CardDescription>Direct your donation to a specific initiative.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6 mb-6">
                    {[
                      {
                        name: "Scholarship Fund",
                        description: "Help deserving students pursue higher education.",
                        goal: 10000,
                        raised: 7500,
                      },
                      {
                        name: "Community Garden",
                        description: "Support our sustainable gardening initiative.",
                        goal: 5000,
                        raised: 2800,
                      },
                      {
                        name: "Leadership Workshop Series",
                        description: "Fund workshops to develop student leadership skills.",
                        goal: 3000,
                        raised: 1200,
                      },
                    ].map((project, index) => (
                      <div key={index} className="border border-[#C2A78F]/30 rounded-lg p-4">
                        <h3 className="font-semibold text-[#2B2D42] mb-2">{project.name}</h3>
                        <p className="text-[#2B2D42]/80 text-sm mb-3">{project.description}</p>
                        <div className="w-full bg-[#C2A78F]/20 rounded-full h-2.5 mb-2">
                          <div
                            className="bg-[#A47149] h-2.5 rounded-full"
                            style={{ width: `${(project.raised / project.goal) * 100}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-sm text-[#2B2D42]/70">
                          <span>${project.raised.toLocaleString()} raised</span>
                          <span>Goal: ${project.goal.toLocaleString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <DonationForm donationType="specific" />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-[#C2A78F]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2B2D42] sm:text-4xl">Your Impact</h2>
            <div className="mt-2 h-1 w-20 bg-[#A47149] mx-auto"></div>
            <p className="mt-4 text-lg text-[#2B2D42]/80 max-w-2xl mx-auto">
              See how your donation makes a difference in our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-[#C2A78F]/30 bg-white">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#A47149] mb-2">$25</div>
                <p className="text-[#2B2D42]">Provides supplies for one student in our mentorship program</p>
              </CardContent>
            </Card>

            <Card className="border-[#C2A78F]/30 bg-white">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#A47149] mb-2">$100</div>
                <p className="text-[#2B2D42]">Funds a leadership workshop for 10 students</p>
              </CardContent>
            </Card>

            <Card className="border-[#C2A78F]/30 bg-white">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#A47149] mb-2">$500</div>
                <p className="text-[#2B2D42]">Provides a scholarship for one deserving student</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2B2D42] sm:text-4xl">Other Ways to Give</h2>
            <div className="mt-2 h-1 w-20 bg-[#A47149] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-[#C2A78F]/30">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#2B2D42]">Corporate Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#2B2D42]/80 mb-4">
                  Many companies match employee donations to nonprofit organizations. Check with your employer to see if
                  they offer a matching gift program.
                </p>
                <Button variant="outline" className="border-[#2B2D42] text-[#2B2D42] hover:bg-[#C2A78F]/10">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-[#C2A78F]/30">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#2B2D42]">Planned Giving</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#2B2D42]/80 mb-4">
                  Include The Future Scholar's Network in your estate planning to create a lasting legacy that supports
                  student leadership and community service.
                </p>
                <Button variant="outline" className="border-[#2B2D42] text-[#2B2D42] hover:bg-[#C2A78F]/10">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donor Recognition */}
      <section className="bg-[#2B2D42] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Supporters</h2>
            <p className="mt-4 text-lg text-white/80">
              We're grateful for the generous support of our donors and partners who make our work possible.
            </p>
            <div className="mt-8">
              <Button className="bg-[#A47149] hover:bg-[#8a5e3c] text-white">View Donor Wall</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
