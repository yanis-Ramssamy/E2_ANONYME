import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import CoursesSection from '../components/CoursesSection';
import { SITE_NAME } from '../config/constants';

function Home() {
  return (
    <>
      <Hero
        title={SITE_NAME}
        subtitle="Portail WebCraft Solutions — portfolio clients, catalogue de formations."
      />
      <ProjectsSection />
      <CoursesSection />
    </>
  );
}

export default Home;
