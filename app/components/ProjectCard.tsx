import { Project } from '../types/project';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className = "" }: ProjectCardProps) {
  return (
    <div className={`bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg ${className}`}>
      {/* תמונה */}
      {project.image && (
        <div className="w-full h-48 overflow-hidden relative">
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="p-6">
        {/* Achievement Badge */}
        {project.achievement && (
          <div className="mb-3">
            <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {project.achievement}
            </span>
          </div>
        )}

        {/* כותרת */}
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>

        {/* תיאור */}
        <p className="text-gray-300 leading-relaxed text-sm mb-4">
          {project.description}
        </p>

        {/* תגי טכנולוגיות */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* כפתורי קישורים */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-600 hover:border-gray-500 bg-transparent hover:bg-gray-700 rounded text-gray-300 hover:text-white text-sm transition-colors inline-flex items-center gap-2"
            >
              <span>🔗</span>
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-600 hover:border-gray-500 bg-transparent hover:bg-gray-700 rounded text-gray-300 hover:text-white text-sm transition-colors inline-flex items-center gap-2"
            >
              <span>🌐</span>
              Live Demo
            </a>
          )}
          {project.videoUrl && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-600 hover:border-gray-500 bg-transparent hover:bg-gray-700 rounded text-gray-300 hover:text-white text-sm transition-colors inline-flex items-center gap-2"
            >
              <span>▶️</span>
              Video
            </a>
          )}
          {project.articleUrl && (
            <a
              href={project.articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-600 hover:border-gray-500 bg-transparent hover:bg-gray-700 rounded text-gray-300 hover:text-white text-sm transition-colors inline-flex items-center gap-2"
            >
              <span>📰</span>
              Article
            </a>
          )}
          {project.certificateUrl && (
            <a
              href={project.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-600 hover:border-gray-500 bg-transparent hover:bg-gray-700 rounded text-gray-300 hover:text-white text-sm transition-colors inline-flex items-center gap-2"
            >
              <span>🏆</span>
              Certificate
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

