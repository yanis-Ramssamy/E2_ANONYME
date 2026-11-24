import { useState } from 'react';

/**
 * Hook personnalisé : filtre une liste par catégorie, niveau et technologie.
 * Remplace la partie filtres de filtrerProjets() et filtrerFormations() de l'E1.
 * Un filtre vide ('') est ignoré, et les filtres actifs se cumulent.
 *
 * @param {Array<object>} items - la liste à filtrer
 * @returns {{ filters: object, updateFilter: Function, results: Array<object> }}
 *   filters      : valeurs actuelles { category, level, technology }
 *   updateFilter : (name, value) pour changer un filtre
 *   results      : éléments qui respectent tous les filtres actifs
 */
function useFilter(items) {
  const [filters, setFilters] = useState({
    category: '',
    level: '',
    technology: '',
  });

  const updateFilter = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  const results = items.filter((item) => {
    const okCategory = filters.category === '' || item.category === filters.category;
    const okLevel = filters.level === '' || item.level === filters.level;
    const okTechnology =
      filters.technology === '' || item.technologies.includes(filters.technology);
    return okCategory && okLevel && okTechnology;
  });

  return { filters, updateFilter, results };
}

export default useFilter;
