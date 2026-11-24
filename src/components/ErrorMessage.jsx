// Message d'erreur affiché quand une API ne répond pas
function ErrorMessage({ message }) {
  return <p className="message-erreur" role="alert">{message}</p>;
}

export default ErrorMessage;
