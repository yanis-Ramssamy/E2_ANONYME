/**
 * Message d'erreur affiché quand une API ne répond pas.
 * @param {{ message: string }} props - message : texte de l'erreur
 */
function ErrorMessage({ message }) {
  return <p className="message-erreur" role="alert">{message}</p>;
}

export default ErrorMessage;
