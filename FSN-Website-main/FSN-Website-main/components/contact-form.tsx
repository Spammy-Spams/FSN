"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { submitContactForm } from "@/lib/actions"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await submitContactForm(formData)
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-[#2B2D42]">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md border border-[#C2A78F]/50 px-3 py-2 text-[#2B2D42] placeholder-[#2B2D42]/50 focus:border-[#A47149] focus:outline-none focus:ring-1 focus:ring-[#A47149]"
            placeholder="Your name"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-[#2B2D42]">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md border border-[#C2A78F]/50 px-3 py-2 text-[#2B2D42] placeholder-[#2B2D42]/50 focus:border-[#A47149] focus:outline-none focus:ring-1 focus:ring-[#A47149]"
            placeholder="Your email"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-[#2B2D42]">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          className="w-full rounded-md border border-[#C2A78F]/50 px-3 py-2 text-[#2B2D42] placeholder-[#2B2D42]/50 focus:border-[#A47149] focus:outline-none focus:ring-1 focus:ring-[#A47149]"
          placeholder="Subject"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-[#2B2D42]">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-md border border-[#C2A78F]/50 px-3 py-2 text-[#2B2D42] placeholder-[#2B2D42]/50 focus:border-[#A47149] focus:outline-none focus:ring-1 focus:ring-[#A47149]"
          placeholder="Your message"
          required
        />
      </div>
      <Button type="submit" className="w-full bg-[#2B2D42] hover:bg-[#1d1e2d] text-white" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"} <Mail className="ml-2 h-4 w-4" />
      </Button>
    </form>
  )
}
