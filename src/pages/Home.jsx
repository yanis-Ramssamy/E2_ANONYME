import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import { SITE_NAME } from '../config/constants';

function Home() {
  return (
    <>
      <Hero
        title={SITE_NAME}
        subtitle="Portail WebCraft Solutions — portfolio clients, catalogue de formations."
      />
      <ProjectsSection />
    </>
  );
}

export default Home;
