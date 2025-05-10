import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/hero-bg.jpg"
          alt="Snowy forest background"
          fill
          priority
          className="object-cover scale-100 hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-start px-6 md:px-24">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            The Heroic Journey of Lukas Presti
          </h1>
          <p className="text-md md:text-xl max-w-xl mb-6">
            Empowering solutions through data, design, and AI-driven innovation.
          </p>
          <Link href="/projects">
            <button className="bg-green-600 hover:bg-green-700 hover:scale-105 transition-transform duration-300 text-white px-6 py-3 font-semibold rounded">
              Explore My Work
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full grid md:grid-cols-2 gap-8 py-20 px-6 md:px-24 bg-black">
        {/* Left: Image with hover zoom */}
        <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
          <Image
            src="/profile.jpg"
            alt="Lukas on the mountain"
            width={800}
            height={500}
            className="object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Driven by Purpose, Guided by Skill
          </h2>
          <div className="space-y-6 text-sm md:text-base text-gray-300">
            <div>
              <h3 className="font-semibold text-white">Technical Skills</h3>
              <p>
                Proficient in JavaScript, Python, React, and data visualization libraries like D3.js and Chart.js.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Education</h3>
              <p>
                B.S. in Information Systems — grounding in software engineering, AI, and business systems.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Mission & Values</h3>
              <p>
                Lukas is driven by a passion to tackle complex problems with creativity, integrity, and strategic vision—
                hallmarks of a Hero in tech.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
