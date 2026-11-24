import TechBadges from './TechBadges';

// Contenu du modal pour un projet
function ProjectDetails({ project }) {
  return (
    <>
      <img src={project.image} alt={project.title} />
      <h2>{project.title}</h2>
      <p>Client : {project.client} - {project.category}</p>
      <p>Année : {project.year} - Durée : {project.duration}</p>
      <p>{project.description}</p>
      <ul>
        {project.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <TechBadges technologies={project.technologies} />
      <p>
        <a href={project.url} target="_blank" rel="noreferrer">Voir le projet</a>
      </p>
    </>
  );
}

export default ProjectDetails;
