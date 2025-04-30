import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Clock } from "lucide-react"

export default function EventsPage() {
  // Sample events data - in a real app, this would come from a database
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Fundraising Gala",
      date: "May 15, 2025",
      time: "6:00 PM - 10:00 PM",
      location: "City Convention Center",
      description:
        "We're planning our first annual fundraising gala featuring dinner, entertainment, and a silent auction to support our scholarship fund.",
      image: "gala",
      month: "MAY",
      day: "15",
    },
    {
      id: 2,
      title: "Leadership Workshop",
      date: "June 10, 2025",
      time: "1:00 PM - 4:00 PM",
      location: "University Campus",
      description:
        "We're planning our first workshop designed to help students develop leadership skills and learn about nonprofit management from industry professionals.",
      image: "workshop",
      month: "JUN",
      day: "10",
    },
    {
      id: 3,
      title: "Community Service Day",
      date: "July 8, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "City Park",
      description:
        "Join us for our inaugural day of community service projects, including park cleanup, tree planting, and more.",
      image: "service",
      month: "JUL",
      day: "08",
    },
    {
      id: 4,
      title: "Business Networking Mixer",
      date: "August 22, 2025",
      time: "5:30 PM - 7:30 PM",
      location: "Downtown Business Center",
      description:
        "We're organizing our first networking event to connect with local business leaders and explore partnership opportunities with The Future Scholar's Network.",
      image: "networking",
      month: "AUG",
      day: "22",
    },
  ]

  const pastEvents = [
    {
      id: 5,
      title: "Planning Meeting",
      date: "April 12, 2025",
      location: "Troy High School",
      description:
        "Our founding members met to establish The Future Scholar's Network and outline our mission and goals.",
      image: "meeting",
    },
    {
      id: 6,
      title: "Organization Launch",
      date: "April 30, 2025",
      location: "Troy High School",
      description: "We officially launched The Future Scholar's Network and began recruiting student volunteers.",
      image: "launch",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#2B2D42] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">Events</h1>
            <p className="mt-6 text-xl text-white/80">
              Join us at our upcoming events and see how you can get involved with The Future Scholar's Network.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2B2D42] sm:text-4xl">Upcoming Events</h2>
            <div className="mt-2 h-1 w-20 bg-[#A47149] mx-auto"></div>
            <p className="mt-4 text-lg text-[#2B2D42]/80 max-w-2xl mx-auto">
              Check out our calendar of upcoming events and register to attend.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="border-[#C2A78F]/30 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-[#A47149] text-white p-3 rounded-lg text-center min-w-16">
                      <div className="text-sm">{event.month}</div>
                      <div className="text-2xl font-bold">{event.day}</div>
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-[#2B2D42]">{event.title}</CardTitle>
                      <CardDescription>
                        {event.date} • {event.location}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=200&width=400&text=${event.image}`}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[#2B2D42]/80 mb-4">{event.description}</p>
                  <div className="flex flex-col gap-2 text-sm text-[#2B2D42]/70">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-[#A47149]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-[#A47149]" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#2B2D42] hover:bg-[#1d1e2d] text-white">Register Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 bg-[#C2A78F]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#2B2D42]">Event Calendar</h2>
            <p className="mt-2 text-[#2B2D42]/80">View our full calendar of events and activities.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-center p-8 border-2 border-dashed border-[#C2A78F]">
              <Calendar className="h-12 w-12 mx-auto text-[#A47149] mb-4" />
              <h3 className="text-xl font-semibold text-[#2B2D42] mb-2">Full Calendar Coming Soon</h3>
              <p className="text-[#2B2D42]/80">
                We're working on implementing a full interactive calendar. Check back soon!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2B2D42] sm:text-4xl">Past Events</h2>
            <div className="mt-2 h-1 w-20 bg-[#A47149] mx-auto"></div>
            <p className="mt-4 text-lg text-[#2B2D42]/80 max-w-2xl mx-auto">
              Take a look at some of our previous events and their impact.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event) => (
              <Card key={event.id} className="border-[#C2A78F]/30 shadow-sm">
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=${event.image}`}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#2B2D42] mb-2">{event.title}</h3>
                  <div className="flex items-center text-sm text-[#2B2D42]/70 mb-3">
                    <Calendar className="h-4 w-4 mr-2 text-[#A47149]" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-[#2B2D42]/70 mb-4">
                    <MapPin className="h-4 w-4 mr-2 text-[#A47149]" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-[#2B2D42]/80">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Host an Event CTA */}
      <section className="bg-[#2B2D42] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Want to Host an Event?</h2>
            <p className="mt-4 text-lg text-white/80">
              If you're interested in hosting an event with The Future Scholar's Network, we'd love to hear from you.
            </p>
            <div className="mt-8">
              <Button className="bg-[#A47149] hover:bg-[#8a5e3c] text-white">Contact Us About Events</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
