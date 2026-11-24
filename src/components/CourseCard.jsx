import TechBadges from './TechBadges';
import AvailabilityBadge from './AvailabilityBadge';
import RegisterButton from './RegisterButton';

/**
 * Carte d'une formation.
 * @param {{ course: object, onSelect: (course: object) => void }} props
 *   onSelect est appelé avec la formation quand on clique sur "Voir détails".
 */
function CourseCard({ course, onSelect }) {
  return (
    <article className="carte">
      <img src={course.image} alt={course.title} />
      <div className="carte-corps">
        <h3>{course.title}</h3>
        <p>{course.category}</p>
        <div>
          <span className="badge-niveau">{course.level}</span>
          <AvailabilityBadge available={course.available} />
        </div>
        <p>{course.duration} - {course.price} €</p>
        <p>{course.rating} ★ ({course.students} étudiants)</p>
        <TechBadges technologies={course.technologies} />
        <div className="carte-boutons">
          <button
            type="button"
            className="btn-principal"
            onClick={() => onSelect(course)}
          >
            Voir détails
          </button>
          <RegisterButton available={course.available} label="S'inscrire" />
        </div>
      </div>
    </article>
  );
}

export default CourseCard;
