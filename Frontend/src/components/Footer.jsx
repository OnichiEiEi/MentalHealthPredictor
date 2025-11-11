export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-8 px-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">

        {/* Center */}
        <div className="flex flex-col items-center">
          <p className="font-medium">Contact Us</p>
          <a
            href="mailto:screentime.team@gmail.com"
            className="text-sm hover:underline"
          >
            screentime.team@gmail.com
          </a>
          <p className="text-sm">+66 62-004-5282</p>
        </div>

        {/* Right side */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition"
          >
            Twitter
          </a>
        </div>
      </div>

      <div className="border-t border-white/20 mt-6 pt-4 text-center text-xs opacity-80">
        © {new Date().getFullYear()} ScreenTime | All rights reserved.
      </div>
    </footer>
  );
}
