// src/app/contact/page.tsx

import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="bg-black text-white">

      {/* Full-width Hero Banner */}
      <section
  className="bg-gradient-to-r from-heroAccent to-gray-800  /* ← gradient here */
    bg-heroAccent border-b border-gray-800
    h-17 md:h-20
    px-6 md:px-24
    flex items-center
  "
>
  <h1 className="text-2xl md:text-4xl font-extrabold text-white">
    Contact Me
  </h1>
</section>

      {/* Padded Content Wrapper */}
      <section className="px-6 md:px-20 py-20">
        {/* Social Proof */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-xl font-semibold text-heroAccent mb-6">
            Trusted by Peers & Clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <blockquote className="bg-heroDark p-6 rounded-lg shadow-lg">
              <p className="text-gray-300 italic">
                “Lukas’s work ethic and skillset made our launch a smashing success. I couldn’t recommend him more!”
              </p>
              <footer className="mt-4 text-gray-500">— Jane Doe, CEO at TechStart</footer>
            </blockquote>
            <blockquote className="bg-heroDark p-6 rounded-lg shadow-lg">
              <p className="text-gray-300 italic">
                “His designs are both beautiful and intuitive. He truly understands user needs.”
              </p>
              <footer className="mt-4 text-gray-500">— John Smith, Product Manager</footer>
            </blockquote>
          </div>
        </div>

        {/* Scarcity + Reciprocity */}
        <div className="max-w-4xl mx-auto bg-heroDark p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Limited-Time Offer</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            For the next <span className="text-heroAccent font-semibold">7 days</span>, I’m offering a
            <span className="text-heroAccent font-semibold"> free 30-minute website audit</span> to the
            first <span className="text-heroAccent font-semibold">10 respondents</span>. It’s my way of
            giving back and helping you get a head start.
          </p>
          <p className="text-gray-300">Slots are limited—don’t miss your chance!</p>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-heroAccent mb-6">Ready to Collaborate?</h2>
          <form action="#" method="POST" className="grid gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 rounded bg-heroDark border border-gray-800 text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-4 rounded bg-heroDark border border-gray-800 text-white"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              className="w-full p-4 rounded bg-heroDark border border-gray-800 text-white"
            ></textarea>
            <button
              type="submit"
              className="bg-heroAccent hover:bg-heroPrimary transition py-4 px-6 rounded font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
