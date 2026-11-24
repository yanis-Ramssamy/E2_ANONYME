/**
 * Liste de badges de technologies (utilisée par les cartes et les modals).
 * @param {{ technologies: string[] }} props
 */
function TechBadges({ technologies }) {
  return (
    <div>
      {technologies.map((tech) => (
        <span key={tech} className="badge-techno">{tech}</span>
      ))}
    </div>
  );
}

export default TechBadges;
