import useFetch from '../hooks/useFetch';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import ProjectCard from './ProjectCard';
import { URL_PROJETS } from '../config/constants';

// Section Projets : charge l'API 1 et affiche la grille de cartes
function ProjectsSection() {
  const { data, isLoading, error } = useFetch(URL_PROJETS);

  // Temporaire : le modal de détails arrive à l'étape 11
  const handleSelect = (project) => console.log(project);

  return (
    <section id="projets">
      <div className="container">
        <h2>Projets</h2>
        <p>Découvrez nos projets récents et nos réalisations.</p>

        {isLoading && <Loader />}
        {error && <ErrorMessage message={error} />}

        {data && (
          <div className="grille">
            {data.projects.length === 0 && <p>Aucun projet trouvé.</p>}
            {data.projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={handleSelect}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectsSection;
