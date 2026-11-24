import { Link } from 'react-router-dom';

/**
 * Bouton d'inscription : lien vers le formulaire, ou bouton désactivé si la formation est complète.
 * @param {{ available: boolean, label: string }} props
 */
function RegisterButton({ available, label }) {
  if (available) {
    return <Link className="btn-principal" to="/inscription">{label}</Link>;
  }
  return <button type="button" className="btn-principal" disabled>{label}</button>;
}

export default RegisterButton;
