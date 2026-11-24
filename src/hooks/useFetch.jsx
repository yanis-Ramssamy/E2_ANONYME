import { useState, useEffect } from 'react';

/**
 * Hook personnalisé : charge des données JSON depuis une API.
 * Remplace la fonction chargerDonnees() de l'E1.
 *
 * @param {string} url - adresse de l'API à appeler
 * @returns {{ data: object|null, isLoading: boolean, error: string|null }}
 *   data      : les données reçues (null tant qu'elles ne sont pas chargées)
 *   isLoading : true pendant le chargement
 *   error     : message d'erreur si l'appel échoue (null sinon)
 */
function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Permet d'annuler l'appel si le composant disparaît avant la réponse
    const controller = new AbortController();

    async function fetchData() {
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);
        }
        setData(await response.json());
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(`Impossible de charger les données (${err.message})`);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
