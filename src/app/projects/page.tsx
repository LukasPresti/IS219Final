// src/app/projects/page.tsx

import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: 'AI Chat Assistant',
    image: '/ai.png',
    link: 'https://aiproject-production-e527.up.railway.app',
    description:
      'Wield the power of Retrieval-Augmented Generation with my AI Chat Assistant: built on LangChain.js and OpenAI embeddings to deliver precise, context-rich responses at the speed of a hero’s blade.',
  },
  {
    title: 'DataViz Health Tracker',
    image: '/dataviz.png',
    link: 'https://seed-oils-history-consumption-and-health-impact.vercel.app/',
    description:
      'Chart the battlefield of health with the DataViz Health Tracker: interactive graphs reveal the epic saga between seed oil consumption and rising obesity rates, powered by D3.js and Chart.js.',
  },
  {
    title: 'Real-Time Chatroom',
    image: '/chat.png',
    link: 'https://projectchoice-production.up.railway.app/',
    description:
      'Forge real-time alliances in the Chatroom: a WebSocket-powered hub built with Express & Socket.IO, complete with typing indicators and a live user roster for hero-level collaboration.',
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-black text-white">

      {/* ————————————————————————————————
          FULL-WIDTH HERO BANNER
      ———————————————————————————————— */}
      <section
        className="
          bg-gradient-to-r from-heroAccent to-gray-800
          border-b border-heroAccent
          h-32 md:h-40
          flex flex-col justify-center space-y-2
        "
      >
        <h1 className="text-2xl md:text-4xl font-extrabold text-white px-6 md:px-24">
          Dive Into My Work
        </h1>
        <p className="text-md md:text-lg text-gray-100 max-w-2xl px-6 md:px-24">
          Each project is a milestone on my journey — from crafting interfaces to building intelligent systems.
        </p>
      </section>

      {/* ————————————————————————————————
          PADDED CONTENT: PROJECTS GRID
      ———————————————————————————————— */}
      <section className="px-6 md:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <Link
              href={project.link}
              key={idx}
              className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              {/* Image + Title Overlay */}
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                  <h2 className="text-white text-xl font-semibold">
                    {project.title}
                  </h2>
                </div>
              </div>
              {/* Heroic Description */}
              <div className="px-4 py-6 bg-heroDark">
                <p className="text-gray-300 text-sm md:text-base">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
    </main>
  );
}
