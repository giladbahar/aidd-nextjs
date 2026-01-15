import { Project } from '../types/project';
import ProjectCard from './ProjectCard';

interface ProjectsContentProps {
  className?: string;
}

export default function ProjectsContent({ className = "" }: ProjectsContentProps) {
  
  const projects: Project[] = [
    {
      id: "allertag",
      title: "AllerTag",
      description: "Mobile app prototype for real-time allergen detection using React Native and NFC technology. The app delivers offline, personalized risk alerts, helping users identify allergens in products instantly. Won 1st place among 20 teams with over 200 participants at the National Hackathon at HIT.",
      technologies: ["React Native", "NFC", "JavaScript"],
      image: "/images/allertag-team.jpg", // תמונה של חברי הצוות
      articleUrl: "https://www.hit.ac.il/news/250410731/",
      certificateUrl: "/images/allertag-certificate.jpg", // תעודה
      achievement: "1st Place - National Hackathon, HIT | April 2025"
    },
    {
      id: "cost-manager",
      title: "Cost Manager",
      description: "A modern, responsive expense tracking application built with React and Material-UI. Manage your expenses efficiently with support for multiple currencies, category-based organization, and comprehensive reporting. Features include dashboard overview, monthly reports with charts, yearly expense trends, and multi-currency support with automatic exchange rate conversion.",
      technologies: ["React", "Material-UI", "React Router", "Vite", "IndexedDB"],
      image: "/images/front project image.jpeg",
      githubUrl: "https://github.com/MorAvnaim/Cost-Manager-Front-End",
      liveUrl: "https://cost-manager-front-end-8yva.onrender.com/",
      videoUrl: "https://youtu.be/Wt17AULF5s4?si=Q_dZsEm09LRC932L"
    },
    {
      id: "cost-manager-backend",
      title: "Cost Manager RESTful Web Services",
      description: "Final project in Asynchronous Server-Side Development course. A RESTful web service for managing costs, organized as 4 microservices: Users Service, Costs Service, Logs Service, and Admin Service. Features include Computed Design Pattern for cached reports, centralized logging with Pino, and microservices architecture with MongoDB.",
      technologies: ["Node.js", "MongoDB", "REST APIs", "Microservices", "Pino"],
      githubUrl: "https://github.com/giladbahar/server-side-project",
      liveUrl: "https://cost-manager-users.onrender.com",
      videoUrl: "https://youtu.be/V1uJZrT8Piw"
    },
    {
      id: "ml-house-prices",
      title: "House Price Prediction - ML Project",
      description: "Final project implementing a complete regression pipeline to predict median house values using California housing data. Features include data preprocessing, exploratory data analysis (EDA) with visualizations, and multiple regression models (Linear, Ridge, Lasso, Random Forest) with GridSearchCV for hyperparameter optimization. Evaluates models using R² scores and provides comprehensive comparison tables.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn"],
      image: "/images/ML Project.jpeg",
      githubUrl: "https://github.com/giladbahar/ML-Final-Project",
      videoUrl: "https://www.youtube.com/watch?v=BC3fJ7bLiBA"
    }
  ];

  return (
    <div className={`mt-8 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

