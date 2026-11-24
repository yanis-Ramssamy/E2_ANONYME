/**
 * Barre de recherche réutilisable (champ contrôlé par le parent).
 * @param {{ value: string, onChange: (text: string) => void, placeholder: string }} props
 */
function SearchBar({ value, onChange, placeholder }) {
  return (
    <input
      type="search"
      value={value}
      placeholder={placeholder}
      aria-label={placeholder}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

export default SearchBar;
