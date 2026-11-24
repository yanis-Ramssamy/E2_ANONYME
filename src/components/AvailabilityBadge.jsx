// Badge "Disponible" ou "Complet" d'une formation
function AvailabilityBadge({ available }) {
  if (available) {
    return <span className="badge-dispo">Disponible</span>;
  }
  return <span className="badge-complet">Complet</span>;
}

export default AvailabilityBadge;
