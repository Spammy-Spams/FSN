export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#2B2D42] py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Privacy Policy</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <p className="text-lg text-[#2B2D42]/80">Last Updated: April 30, 2025</p>

            <h2 className="text-2xl font-bold text-[#2B2D42] mt-8">Introduction</h2>
            <p className="text-[#2B2D42]/80">
              The Future Scholar's Network ("we," "our," or "us") respects your privacy and is committed to protecting
              it through our compliance with this policy. This policy describes the types of information we may collect
              from you or that you may provide when you visit our website and our practices for collecting, using,
              maintaining, protecting, and disclosing that information.
            </p>

            <h2 className="text-2xl font-bold text-[#2B2D42] mt-8">Information We Collect</h2>
            <p className="text-[#2B2D42]/80">
              We may collect several types of information from and about users of our website, including:
            </p>
            <ul className="list-disc pl-6 text-[#2B2D42]/80">
              <li>
                Personal information such as name, email address, and contact information when you fill out forms on our
                website.
              </li>
              <li>
                Information about your internet connection, the equipment you use to access our website, and usage
                details.
              </li>
              <li>Information you provide when making a donation or registering for an event.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#2B2D42] mt-8">How We Use Your Information</h2>
            <p className="text-[#2B2D42]/80">We use information that we collect about you or that you provide to us:</p>
            <ul className="list-disc pl-6 text-[#2B2D42]/80">
              <li>To present our website and its contents to you.</li>
              <li>To provide you with information, products, or services that you request from us.</li>
              <li>To fulfill any other purpose for which you provide it.</li>
              <li>
                To notify you about changes to our website or any products or services we offer or provide through it.
              </li>
              <li>To communicate with you about our organization, events, and initiatives.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#2B2D42] mt-8">Disclosure of Your Information</h2>
            <p className="text-[#2B2D42]/80">
              We may disclose aggregated information about our users without restriction. We may disclose personal
              information that we collect or you provide:
            </p>
            <ul className="list-disc pl-6 text-[#2B2D42]/80">
              <li>
                To our contractors, service providers, and other third parties we use to support our organization.
              </li>
              <li>To comply with any court order, law, or legal process.</li>
              <li>To enforce or apply our terms of use and other agreements.</li>
              <li>
                If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of our
                organization, our users, or others.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#2B2D42] mt-8">Data Security</h2>
            <p className="text-[#2B2D42]/80">
              We have implemented measures designed to secure your personal information from accidental loss and from
              unauthorized access, use, alteration, and disclosure.
            </p>

            <h2 className="text-2xl font-bold text-[#2B2D42] mt-8">Changes to Our Privacy Policy</h2>
            <p className="text-[#2B2D42]/80">
              It is our policy to post any changes we make to our privacy policy on this page. If we make material
              changes to how we treat our users' personal information, we will notify you through a notice on the
              website home page.
            </p>

            <h2 className="text-2xl font-bold text-[#2B2D42] mt-8">Contact Information</h2>
            <p className="text-[#2B2D42]/80">
              To ask questions or comment about this privacy policy and our privacy practices, contact us at:
              info@futurescholar.org
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
