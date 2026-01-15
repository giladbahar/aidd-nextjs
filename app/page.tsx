import Hero from './components/Hero';
import SectionTitle from './components/SectionTitle';
import AboutMeContent from './components/AboutMeContent';
import SkillsContent from './components/SkillsContent';
import ProjectsContent from './components/ProjectsContent';

export default function Home() {
  return (
    <main>
      <Hero 
        name="Gilad Bahar"
        role="Computer Science Student & Full-Stack Developer"
      />
      
      {/* About Me Section */}
      <section id="about" className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            label="Get to know me"
            title="About Me"
          />
          <AboutMeContent />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            label="My Work"
            title="Featured Projects"
          />
          <ProjectsContent />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            label="Technologies"
            title="Skills & Expertise"
          />
          <SkillsContent />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            label="My Journey"
            title="Experience"
          />
          <div className="mt-8">
            {/* Content will be added in future branch */}
          </div>
        </div>
      </section>
    </main>
  );
}
