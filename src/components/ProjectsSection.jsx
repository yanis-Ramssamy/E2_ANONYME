import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import useSearch from '../hooks/useSearch';
import useFilter from '../hooks/useFilter';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';
import Modal from './Modal';
import { URL_PROJETS } from '../config/constants';

// Champs dans lesquels la recherche s'effectue
const SEARCH_FIELDS = ['title', 'client'];

// Section Projets : charge l'API 1, recherche + filtres, grille de cartes, modal de détails
function ProjectsSection() {
  const { data, isLoading, error } = useFetch(URL_PROJETS);
  const projects = data ? data.projects : [];

  // On cherche d'abord, puis on applique les filtres sur le résultat
  const { inputValue, setInputValue, results: searched } = useSearch(projects, SEARCH_FIELDS);
  const { filters, updateFilter, results } = useFilter(searched);

  // Projet affiché dans le modal (null = modal fermé)
  const [selectedProject, setSelectedProject] = useState(null);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projets">
      <div className="container">
        <h2>Projets</h2>
        <p>Découvrez nos projets récents et nos réalisations.</p>

        {isLoading && <Loader />}
        {error && <ErrorMessage message={error} />}

        {data && (
          <>
            <div className="filtres">
              <SearchBar
                value={inputValue}
                onChange={setInputValue}
                placeholder="Rechercher un projet..."
              />
              <FilterBar
                categories={data.categories}
                technologies={data.technologies}
                values={filters}
                onChange={updateFilter}
              />
            </div>

            <div className="grille">
              {results.length === 0 && <p>Aucun projet trouvé.</p>}
              {results.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={setSelectedProject}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {selectedProject && (
        <Modal onClose={closeModal}>
          <ProjectDetails project={selectedProject} />
        </Modal>
      )}
    </section>
  );
}

export default ProjectsSection;
