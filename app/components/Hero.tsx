import Image from 'next/image';

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
        <div className="mb-4 flex justify-center">
          <Image 
            src="/images/לינקדין 1.jpg"
            alt={name}
            width={190}
            height={160}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-top"
          />
        </div>
        
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

