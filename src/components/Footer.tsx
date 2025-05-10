// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="w-full bg-heroDark border-t border-gray-800 py-8 px-6 md:px-24 text-gray-300">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        {/* Contact Details */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-white font-bold text-lg mb-2">Contact Me</h3>
          <p>Email: lukas.presti@example.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
        {/* Social Links */}
        <div className="flex space-x-8">
          <a
            href="https://linkedin.com/in/lukas-presti"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/lukas-presti"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
