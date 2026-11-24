import TechBadges from './TechBadges';

// Carte d'un projet. onSelect est appelé avec le projet quand on clique sur "Voir détails".
function ProjectCard({ project, onSelect }) {
  return (
    <article className="carte">
      <img src={project.image} alt={project.title} />
      <div className="carte-corps">
        <h3>{project.title}</h3>
        <p>Client : {project.client}</p>
        <p>Catégorie : {project.category}</p>
        <TechBadges technologies={project.technologies} />
        <div className="carte-boutons">
          <button
            type="button"
            className="btn-principal"
            onClick={() => onSelect(project)}
          >
            Voir détails
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
