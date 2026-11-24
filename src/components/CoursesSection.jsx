import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import useSearch from '../hooks/useSearch';
import useFilter from '../hooks/useFilter';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import CourseCard from './CourseCard';
import CourseDetails from './CourseDetails';
import Modal from './Modal';
import { URL_FORMATIONS } from '../config/constants';

// Champs dans lesquels la recherche s'effectue
const SEARCH_FIELDS = ['title', 'instructor'];

// Section Formations : même structure que les projets, avec les mêmes composants réutilisés
function CoursesSection() {
  const { data, isLoading, error } = useFetch(URL_FORMATIONS);
  const courses = data ? data.courses : [];

  const { inputValue, setInputValue, results: searched } = useSearch(courses, SEARCH_FIELDS);
  const { filters, updateFilter, results } = useFilter(searched);

  // Formation affichée dans le modal (null = modal fermé)
  const [selectedCourse, setSelectedCourse] = useState(null);
  const closeModal = () => setSelectedCourse(null);

  return (
    <section id="formations">
      <div className="container">
        <h2>Formations</h2>
        <p>Explorez nos formations et développez vos compétences.</p>

        {isLoading && <Loader />}
        {error && <ErrorMessage message={error} />}

        {data && (
          <>
            <div className="filtres">
              <SearchBar
                value={inputValue}
                onChange={setInputValue}
                placeholder="Rechercher une formation..."
              />
              <FilterBar
                categories={data.categories}
                levels={data.levels}
                technologies={data.technologies}
                values={filters}
                onChange={updateFilter}
              />
            </div>

            <div className="grille">
              {results.length === 0 && <p>Aucune formation trouvée.</p>}
              {results.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onSelect={setSelectedCourse}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {selectedCourse && (
        <Modal onClose={closeModal}>
          <CourseDetails course={selectedCourse} />
        </Modal>
      )}
    </section>
  );
}

export default CoursesSection;
