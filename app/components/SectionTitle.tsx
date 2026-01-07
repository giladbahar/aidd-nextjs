interface SectionTitleProps {
  label?: string;        // Small text above (e.g., "Focus", "Currently")
  title: string;         // Main heading (required)
  headingLevel?: 2 | 3;  // HTML heading level (default: 2)
  className?: string;   // Additional wrapper classes
}

export default function SectionTitle({ 
  label,
  title,
  headingLevel = 2,
  className = ""
}: SectionTitleProps) {
  const HeadingTag = headingLevel === 3 ? 'h3' : 'h2';
  
  return (
    <div className={className}>
      {label && (
        <p className="text-sm font-medium text-gray-400 tracking-wide mb-0">
          {label}
        </p>
      )}
      <HeadingTag className="text-2xl md:text-3xl font-semibold text-white mt-2 mb-0">
        {title}
      </HeadingTag>
    </div>
  );
}

