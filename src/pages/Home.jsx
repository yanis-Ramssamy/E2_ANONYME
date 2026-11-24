import Hero from '../components/Hero';
import { SITE_NAME } from '../config/constants';

function Home() {
  return (
    <>
      <Hero
        title={SITE_NAME}
        subtitle="Portail WebCraft Solutions — portfolio clients, catalogue de formations."
      />
    </>
  );
}

export default Home;
