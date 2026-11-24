import { useEffect } from 'react';

/**
 * Modal réutilisable (projets et formations).
 * Se ferme avec la croix, un clic à l'extérieur ou la touche Échap.
 * @param {{ onClose: () => void, children: React.ReactNode }} props
 */
function Modal({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // On ferme seulement si le clic est sur le fond sombre, pas sur le contenu
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-perso" onClick={handleOverlayClick}>
      <div className="modal-contenu" role="dialog" aria-modal="true">
        <button
          type="button"
          className="modal-fermer"
          onClick={onClose}
          aria-label="Fermer"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
