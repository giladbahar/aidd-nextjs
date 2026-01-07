interface HeroProps {
  name?: string;
  role?: string;
}

export default function Hero({ 
  name = "Gilad Bahar", 
  role = "Computer Science Student & Full-Stack Developer" 
}: HeroProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
      <div className="text-center space-y-6 max-w-2xl">
        {/* Avatar/Icon */}
        <div className="text-6xl mb-4">🧑‍💻</div>
        
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          {name}
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          {role}
        </p>
        
        {/* Contact Button */}
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
          יצירת קשר
        </button>
      </div>
    </div>
  );
}

