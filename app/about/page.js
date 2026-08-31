import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 lg:py-24">
      {/* Subtle background decorative element (top) */}
      <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#8B1E1E] to-[#C62828]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* LEFT COLUMN - Content */}
          <div className="space-y-8">
            
            {/* Breadcrumb / Label */}
            <p className="text-sm font-medium tracking-wide text-gray-500 uppercase">
              / About Us
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#8B1E1E] leading-tight">
              We Care for Every Move You Make.
            </h1>

            {/* Quote Block */}
            <blockquote className="border-l-4 border-[#8B1E1E] pl-4 py-2">
              <p className="text-lg italic text-gray-700 font-serif">
                &ldquo;To find health should be the object of the doctor. Anyone can find disease&rdquo;
              </p>
              <footer className="mt-2 text-sm text-gray-500 font-medium">
                — By A.T. Still (Father of Osteopathy)
              </footer>
            </blockquote>

            {/* Body Copy */}
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="font-semibold text-gray-800">
                End Your Search for Effective Spine & Joint Pain healing...
              </p>
              <p>
                Aditya Spine & Joint Rehab LLP is a specialized rehabilitation centre in Borivali West, Mumbai, created to provide structured, personalized care for spine, joint, neurological and movement-related conditions. The centre brings together clinical assessment, experienced hands-on care, guided therapeutic exercise and advanced rehabilitation technology in a spacious, patient-focused setting.
              </p>
              <p>
                Our approach is simple: understand the patient before selecting the treatment. Every person's pain, diagnosis, lifestyle, strength, mobility and recovery goals are different. We therefore avoid a one-size-fits-all programme and build care around the patient's current ability and measurable functional needs.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              {/* Card 1: Team Skilled */}
              <div className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="shrink-0 mt-1">
                  <svg className="w-8 h-8 text-[#8B1E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm">Highly Skilled Team</h3>
                  <p className="text-xs text-gray-500 mt-1">Team of highly skilled and experienced professionals.</p>
                </div>
              </div>

              {/* Card 2: Certified */}
              <div className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="shrink-0 mt-1">
                  <svg className="w-8 h-8 text-[#8B1E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm">Certified Experts</h3>
                  <p className="text-xs text-gray-500 mt-1">Team is composed of certified, high-trained specialists.</p>
                </div>
              </div>
            </div>

            {/* Red Highlight Box */}
            <div className="bg-[#8B1E1E] text-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">The Best In Physiotherapy Care</h3>
              <ul className="space-y-2">
                {["Expert", "Effective", "Expert Team", "Compassionate"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* RIGHT COLUMN - Image */}
          <div className="relative hidden lg:block">
            {/* Decorative blurred circle behind image */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-50" />
            
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              {/* Replace src with your actual physiotherapy image URL */}
              <Image 
                src="/images/physiotherapy-care.jpg" 
                alt="Physiotherapist assisting elderly patient with rehabilitation exercises"
                width={600}
                height={700}
                className="object-cover w-full h-[600px]"
                priority
              />
              
              {/* Overlay gradient for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}