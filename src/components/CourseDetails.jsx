import AvailabilityBadge from './AvailabilityBadge';
import RegisterButton from './RegisterButton';

/**
 * Contenu du modal pour une formation.
 * @param {{ course: object }} props
 */
function CourseDetails({ course }) {
  return (
    <>
      <img src={course.image} alt={course.title} />
      <h2>{course.title}</h2>
      <p>
        <span className="badge-niveau">{course.level}</span>
        <AvailabilityBadge available={course.available} />
      </p>
      <p>Formateur : {course.instructor}</p>
      <p>
        {course.duration} - {course.price} € - {course.rating} ★ ({course.students} étudiants)
      </p>
      <p>{course.description}</p>
      <ul>
        {course.modules.map((module) => (
          <li key={module}>{module}</li>
        ))}
      </ul>
      <RegisterButton available={course.available} label="S'inscrire maintenant" />
    </>
  );
}

export default CourseDetails;
