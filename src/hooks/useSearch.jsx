import { useState, useEffect } from 'react';
import { SEARCH_DELAY_MS } from '../config/constants';

/**
 * Hook personnalisé : recherche en temps réel dans une liste.
 * Remplace debounce() et la partie recherche de filtrerProjets() de l'E1.
 *
 * @param {Array<object>} items - la liste à filtrer
 * @param {string[]} fields - les champs texte où chercher (ex : ['title', 'client'])
 * @returns {{ inputValue: string, setInputValue: Function, results: Array<object> }}
 *   inputValue    : texte tapé (mis à jour à chaque touche)
 *   setInputValue : à brancher sur la SearchBar
 *   results       : éléments qui correspondent, filtrés après SEARCH_DELAY_MS
 */
function useSearch(items, fields) {
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Debounce : on attend que l'utilisateur arrête de taper avant de filtrer
  useEffect(() => {
    const timer = setTimeout(() => setSearchTerm(inputValue), SEARCH_DELAY_MS);
    return () => clearTimeout(timer);
  }, [inputValue]);

  const term = searchTerm.toLowerCase();
  const results = items.filter((item) =>
    fields.some((field) => item[field].toLowerCase().includes(term))
  );

  return { inputValue, setInputValue, results };
}

export default useSearch;
