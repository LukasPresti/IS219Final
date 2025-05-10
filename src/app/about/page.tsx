// src/app/about/page.tsx

import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* ————————————————————————————————
          HERO-STYLE BANNER
      ———————————————————————————————— */}
<section
  className="bg-gradient-to-r from-heroAccent to-gray-800  /* ← gradient here */
    bg-heroAccent border-b border-gray-800
    h-17 md:h-20
    px-6 md:px-24
    flex items-center
  "
>
  <h1 className="text-2xl md:text-4xl font-extrabold text-white">
    About Me
  </h1>
</section>



      {/* ————————————————————————————————
          INTRO (IMAGE + PARAGRAPHS)
      ———————————————————————————————— */}
      <div className="max-w-5xl mx-auto px-6 md:px-24 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Profile Photo */}
        <div className="rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="/me.jpg"
            alt="Lukas Presti"
            width={600}
            height={600}
            className="object-cover"
          />
        </div>

        {/* Right: Your story */}
        <div className="space-y-5 text-gray-300">
          <p className="text-lg leading-relaxed">
            I’m Lukas Presti, an Information Technology major at NJIT with a specialization in front-end web development and a minor in Game Design. Over the years, I’ve worn many hats — from building UIs and shipping code to walking the runway as a freelance model and leading the largest social fraternity on campus.
          </p>
          <p className="text-lg leading-relaxed">
            I thrive on courage, challenge, and creative problem-solving — qualities that define the Hero archetype. In every project, I lead with purpose and act with intention. As Grand Master of Ceremonies for my fraternity, I’ve developed strong leadership and organizational skills that I apply to both team collaboration and technical execution.
          </p>
          <p className="text-lg leading-relaxed">
            I believe in consistency and commitment. From mastering new frameworks to executing under pressure, I’ve built a track record of following through — the foundation of trust in any professional relationship.
          </p>
        </div>
      </div>

      {/* ————————————————————————————————
          SKILLS & VALUES GRID
      ———————————————————————————————— */}
      <div className="max-w-5xl mx-auto px-6 md:px-24 pb-20">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Skills & Education */}
          <div>
            <h2 className="text-2xl font-bold text-heroAccent mb-4">
              Skills & Education
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>B.S. in Information Technology, NJIT (in progress)</li>
              <li>Minor in Game Design</li>
              <li>Specialization in Front-End Web Development</li>
              <li>HTML, CSS, JavaScript, React, Python, Next.js</li>
              <li>Responsive & accessible UI/UX design</li>
            </ul>
          </div>

          {/* Values & Mission */}
          <div>
            <h2 className="text-2xl font-bold text-heroAccent mb-4">
              Values & Mission
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Lead with integrity and action</li>
              <li>Inspire others through bold, purpose-driven work</li>
              <li>Create digital experiences that leave a lasting impact</li>
              <li>Always improve, always deliver</li>
            </ul>
          </div>
        </div>
      </div>

    </main>
  );
}
