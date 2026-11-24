import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import FormField from './FormField';
import { validateField, validateForm } from '../utils/validation';
import { URL_FORMATIONS } from '../config/constants';

const INITIAL_VALUES = {
  prenom: '',
  nom: '',
  email: '',
  telephone: '',
  formation: '',
  niveau: '',
  motivation: '',
};

// Formulaire d'inscription : la liste des formations et des niveaux vient de l'API 2
function InscriptionForm() {
  const { data, isLoading, error } = useFetch(URL_FORMATIONS);
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  // À chaque saisie : on met à jour la valeur et on revalide le champ (temps réel)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
    setSuccessMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validateForm(values);
    setErrors(newErrors);

    // Une erreur ou plus : on n'envoie pas
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setSuccessMessage(`Merci ${values.prenom}, votre inscription est bien enregistrée !`);
    setValues(INITIAL_VALUES);
    setErrors({});
  };

  // Props communes à tous les champs
  const fieldProps = (name) => ({
    name,
    value: values[name],
    error: errors[name],
    onChange: handleChange,
  });

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorMessage message={error} />;
  }

  const courseTitles = data.courses.map((course) => course.title);

  return (
    <>
      {successMessage && <p className="message-succes" role="status">{successMessage}</p>}

      <form onSubmit={handleSubmit} noValidate>
        <FormField label="Prénom" {...fieldProps('prenom')} />
        <FormField label="Nom" {...fieldProps('nom')} />
        <FormField label="Email" type="email" {...fieldProps('email')} />
        <FormField
          label="Téléphone"
          type="tel"
          placeholder="+33612345678"
          {...fieldProps('telephone')}
        />
        <FormField label="Formation" type="select" options={courseTitles} {...fieldProps('formation')} />
        <FormField label="Niveau" type="select" options={data.levels} {...fieldProps('niveau')} />
        <FormField
          label="Motivation (50 caractères minimum)"
          type="textarea"
          {...fieldProps('motivation')}
        />
        <button type="submit" className="btn-principal">S'inscrire</button>
      </form>
    </>
  );
}

export default InscriptionForm;
