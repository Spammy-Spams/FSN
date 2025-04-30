"use client"

import type React from "react"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { CreditCard } from "lucide-react"

interface DonationFormProps {
  donationType: "one-time" | "monthly" | "specific"
}

export default function DonationForm({ donationType }: DonationFormProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [amount, setAmount] = useState<string>("50")
  const [customAmount, setCustomAmount] = useState<string>("")
  const [project, setProject] = useState<string>("Scholarship Fund")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real app, this would process the payment
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Thank you for your donation!",
        description: `Your ${donationType} donation of $${amount === "custom" ? customAmount : amount}${donationType === "specific" ? ` to the ${project} project` : ""} has been processed.`,
      })

      // Reset form
      setAmount("50")
      setCustomAmount("")
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your donation couldn't be processed. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Amount Selection */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-[#2B2D42]">Select Amount</label>
        <div className="grid grid-cols-3 gap-3">
          {["25", "50", "100", "250", "500", "custom"].map((value) => (
            <button
              key={value}
              type="button"
              className={`py-2 px-4 rounded-md border ${
                amount === value
                  ? "bg-[#2B2D42] text-white border-[#2B2D42]"
                  : "bg-white text-[#2B2D42] border-[#C2A78F]/50 hover:bg-[#C2A78F]/10"
              }`}
              onClick={() => setAmount(value)}
            >
              {value === "custom" ? "Custom" : `$${value}`}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Amount */}
      {amount === "custom" && (
        <div className="space-y-2">
          <label htmlFor="customAmount" className="text-sm font-medium text-[#2B2D42]">
            Enter Amount
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2B2D42]/70">$</span>
            <input
              id="customAmount"
              type="number"
              min="1"
              step="1"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="w-full rounded-md border border-[#C2A78F]/50 pl-8 pr-3 py-2 text-[#2B2D42] placeholder-[#2B2D42]/50 focus:border-[#A47149] focus:outline-none focus:ring-1 focus:ring-[#A47149]"
              placeholder="Enter amount"
              required
            />
          </div>
        </div>
      )}

      {/* Project Selection for Specific Donations */}
      {donationType === "specific" && (
        <div className="space-y-2">
          <label htmlFor="project" className="text-sm font-medium text-[#2B2D42]">
            Select Project
          </label>
          <select
            id="project"
            value={project}
            onChange={(e) => setProject(e.target.value)}
            className="w-full rounded-md border border-[#C2A78F]/50 px-3 py-2 text-[#2B2D42] focus:border-[#A47149] focus:outline-none focus:ring-1 focus:ring-[#A47149]"
            required
          >
            <option value="Scholarship Fund">Scholarship Fund</option>
            <option value="Community Garden">Community Garden</option>
            <option value="Leadership Workshop Series">Leadership Workshop Series</option>
          </select>
        </div>
      )}

      {/* Donor Information */}
      <div className="space-y-4">
        <h3 className="font-medium text-[#2B2D42]">Donor Information</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm font-medium text-[#2B2D42]">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              className="w-full rounded-md border border-[#C2A78F]/50 px-3 py-2 text-[#2B2D42] placeholder-[#2B2D42]/50 focus:border-[#A47149] focus:outline-none focus:ring-1 focus:ring-[#A47149]"
              placeholder="First name"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm font-medium text-[#2B2D42]">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              className="w-full rounded-md border border-[#C2A78F]/50 px-3 py-2 text-[#2B2D42] placeholder-[#2B2D42]/50 focus:border-[#A47149] focus:outline-none focus:ring-1 focus:ring-[#A47149]"
              placeholder="Last name"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-[#2B2D42]">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full rounded-md border border-[#C2A78F]/50 px-3 py-2 text-[#2B2D42] placeholder-[#2B2D42]/50 focus:border-[#A47149] focus:outline-none focus:ring-1 focus:ring-[#A47149]"
            placeholder="Your email"
            required
          />
        </div>
      </div>

      {/* Payment Information - In a real app, this would integrate with a payment processor */}
      <div className="space-y-4">
        <h3 className="font-medium text-[#2B2D42]">Payment Information</h3>
        <div className="p-4 bg-[#C2A78F]/10 rounded-md text-center text-[#2B2D42]/80">
          <p>This is a demo. No actual payment will be processed.</p>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-[#2B2D42] hover:bg-[#1d1e2d] text-white"
        disabled={isSubmitting || (amount === "custom" && !customAmount)}
      >
        {isSubmitting ? "Processing..." : `Donate ${amount === "custom" ? `$${customAmount}` : `$${amount}`}`}{" "}
        <CreditCard className="ml-2 h-4 w-4" />
      </Button>
    </form>
  )
}
