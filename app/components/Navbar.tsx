interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = "" }: NavbarProps) {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-gray-900/98 backdrop-blur-sm border-b border-gray-700 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-200 hover:text-white transition-colors duration-200 font-semibold text-base md:text-lg px-2 py-1"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

