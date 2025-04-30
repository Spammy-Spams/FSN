"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { subscribeToNewsletter } from "@/lib/actions"

export default function NewsletterSignup() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await subscribeToNewsletter({ email })
      toast({
        title: "Thank you for subscribing!",
        description: "You've been added to our newsletter list.",
      })
      setEmail("")
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "We couldn't subscribe you to the newsletter. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="flex-grow rounded-md border border-[#C2A78F]/50 px-3 py-2 text-[#2B2D42] placeholder-[#2B2D42]/50 focus:border-[#A47149] focus:outline-none focus:ring-1 focus:ring-[#A47149]"
        required
      />
      <Button
        type="submit"
        className="bg-[#2B2D42] hover:bg-[#1d1e2d] text-white whitespace-nowrap"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  )
}
