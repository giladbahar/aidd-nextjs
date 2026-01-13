interface SkillsContentProps {
  className?: string;  // Additional wrapper classes
}

export default function SkillsContent({ 
  className = "" 
}: SkillsContentProps) {
  return (
    <div className={`mt-8 ${className}`}>
      <div className="space-y-6">
        {/* Soft Skills */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm">
              Fast Learning
            </span>
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm">
              Responsibility
            </span>
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm">
              Problem-Solving
            </span>
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm">
              Team Collaboration
            </span>
          </div>
        </div>

        {/* Programming Languages */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Programming Languages</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm">
              Python
            </span>
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm">
              Java
            </span>
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm">
              C
            </span>
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm">
              C++
            </span>
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm">
              SQL
            </span>
          </div>
        </div>

        {/* Frontend */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm">
              React
            </span>
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm">
              Next.js
            </span>
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm">
              HTML
            </span>
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm">
              CSS
            </span>
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm">
              Tailwind CSS
            </span>
          </div>
        </div>

        {/* Backend */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Backend</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm">
              Node.js
            </span>
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm">
              Flask
            </span>
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm">
              REST APIs
            </span>
          </div>
        </div>

        {/* Tools & Environment */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Tools & Environment</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm">
              Git
            </span>
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm">
              GitHub
            </span>
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm">
              Linux
            </span>
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm">
              Docker
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

