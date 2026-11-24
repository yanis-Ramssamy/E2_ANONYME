// Règles de validation du formulaire d'inscription (reprises de l'E1)
const MIN_NAME_LENGTH = 2;
const MIN_MOTIVATION_LENGTH = 50;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+[0-9]{8,15}$/;

/**
 * Vérifie qu'un champ n'est pas vide.
 * @param {string} value - valeur saisie
 * @returns {string} message d'erreur, ou '' si la valeur est valide
 */
export function validateRequired(value) {
  return value.trim() === '' ? 'Ce champ est obligatoire.' : '';
}

/**
 * Vérifie qu'un texte a une longueur minimale.
 * @param {string} value - valeur saisie
 * @param {number} min - nombre minimum de caractères
 * @returns {string} message d'erreur, ou '' si la valeur est valide
 */
export function validateMinLength(value, min) {
  return value.trim().length < min ? `Minimum ${min} caractères.` : '';
}

/**
 * Valide un champ du formulaire selon son nom.
 * @param {string} name - nom du champ (prenom, nom, email, telephone, formation, niveau, motivation)
 * @param {string} value - valeur saisie
 * @returns {string} message d'erreur, ou '' si la valeur est valide
 */
export function validateField(name, value) {
  const requiredError = validateRequired(value);
  if (requiredError) {
    return requiredError;
  }

  switch (name) {
    case 'prenom':
    case 'nom':
      return validateMinLength(value, MIN_NAME_LENGTH);
    case 'email':
      return EMAIL_REGEX.test(value)
        ? ''
        : 'Adresse email invalide (exemple : nom@mail.com).';
    case 'telephone':
      return PHONE_REGEX.test(value)
        ? ''
        : 'Format international attendu (exemple : +33612345678).';
    case 'motivation':
      return validateMinLength(value, MIN_MOTIVATION_LENGTH);
    default:
      return '';
  }
}

/**
 * Valide tout le formulaire d'un coup.
 * @param {Object<string, string>} values - valeurs des champs, par nom de champ
 * @returns {Object<string, string>} erreurs par nom de champ ({} si tout est valide)
 */
export function validateForm(values) {
  const errors = {};
  Object.keys(values).forEach((name) => {
    const error = validateField(name, values[name]);
    if (error) {
      errors[name] = error;
    }
  });
  return errors;
}
