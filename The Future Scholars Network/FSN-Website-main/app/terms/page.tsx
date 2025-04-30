export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#2B2D42] py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Terms of Service</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <p className="text-lg text-[#2B2D42]/80">Last Updated: April 30, 2025</p>

            <h2 className="text-2xl font-bold text-[#2B2D42] mt-8">Agreement to Terms</h2>
            <p className="text-[#2B2D42]/80">
              These Terms of Service constitute a legally binding agreement made between you and The Future Scholar's
              Network ("we," "us," or "our"), concerning your access to and use of the website as well as any other
              media form, media channel, mobile website or mobile application related, linked, or otherwise connected
              thereto (collectively, the "Site").
            </p>

            <h2 className="text-2xl font-bold text-[#2B2D42] mt-8">Intellectual Property Rights</h2>
            <p className="text-[#2B2D42]/80">
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases,
              functionality, software, website designs, audio, video, text, photographs, and graphics on the Site
              (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks")
              are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and
              various other intellectual property rights.
            </p>

            <h2 className="text-2xl font-bold text-[#2B2D42] mt-8">User Representations</h2>
            <p className="text-[#2B2D42]/80">By using the Site, you represent and warrant that:</p>
            <ul className="list-disc pl-6 text-[#2B2D42]/80">
              <li>All registration information you submit will be true, accurate, current, and complete.</li>
              <li>
                You will maintain the accuracy of such information and promptly update such registration information as
                necessary.
              </li>
              <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
              <li>
                You are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental
                permission to use the Site.
              </li>
              <li>
                You will not access the Site through automated or non-human means, whether through a bot, script, or
                otherwise.
              </li>
              <li>You will not use the Site for any illegal or unauthorized purpose.</li>
              <li>Your use of the Site will not violate any applicable law or regulation.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#2B2D42] mt-8">Donations</h2>
            <p className="text-[#2B2D42]/80">
              We may accept donations through the Site. All donations are final and non-refundable. By making a
              donation, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 text-[#2B2D42]/80">
              <li>The donation is made voluntarily and is not in exchange for goods or services.</li>
              <li>You are authorized to use the payment method provided.</li>
              <li>
                You understand that your donation may be tax-deductible and that you should consult with a tax
                professional regarding the deductibility of your donation.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#2B2D42] mt-8">Limitation of Liability</h2>
            <p className="text-[#2B2D42]/80">
              In no event will we or our directors, employees, or agents be liable to you or any third party for any
              direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost
              profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have
              been advised of the possibility of such damages.
            </p>

            <h2 className="text-2xl font-bold text-[#2B2D42] mt-8">Contact Us</h2>
            <p className="text-[#2B2D42]/80">
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the
              Site, please contact us at: info@futurescholar.org
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
