/**
 * Un champ de formulaire : label + champ (input, select ou textarea) + message d'erreur.
 * @param {{
 *   name: string, label: string, value: string, error?: string,
 *   type?: 'text'|'email'|'tel'|'select'|'textarea', options?: string[],
 *   placeholder?: string, onChange: (event: Event) => void
 * }} props
 */
function FormField({ name, label, type = 'text', value, error, onChange, options = [], placeholder }) {
  const className = error ? 'invalide' : '';

  let field;
  if (type === 'select') {
    field = (
      <select id={name} name={name} value={value} onChange={onChange} className={className}>
        <option value="">Choisir...</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    );
  } else if (type === 'textarea') {
    field = (
      <textarea id={name} name={name} rows="4" value={value} onChange={onChange} className={className} />
    );
  } else {
    field = (
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
      />
    );
  }

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {field}
      <span className="erreur-champ">{error}</span>
    </div>
  );
}

export default FormField;
