interface AboutMeContentProps {
  className?: string;  // Additional wrapper classes
}

export default function AboutMeContent({ 
  className = "" 
}: AboutMeContentProps) {
  return (
    <div className={`mt-8 ${className}`}>
      <p className="text-gray-300 leading-relaxed text-base md:text-lg">
        <strong className="text-white">Computer Science student in the final year</strong> with strong foundations in software engineering and hands-on <strong className="text-white">full stack development</strong> experience. Experienced in <strong className="text-white">React, backend development</strong>, and building end-to-end systems through academic and personal projects. Fast learner with strong problem-solving skills and the ability to work effectively in a team environment. Seeking a <strong className="text-white">student full stack developer role</strong> to contribute to real world products and continue professional growth.
      </p>
    </div>
  );
}

