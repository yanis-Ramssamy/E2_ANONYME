// Une liste déroulante avec son option "Tous"
function FilterSelect({ name, options, allLabel, value, onChange }) {
  return (
    <select
      aria-label={allLabel}
      value={value}
      onChange={(event) => onChange(name, event.target.value)}
    >
      <option value="">{allLabel}</option>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
}

// Filtres réutilisables : seules les listes reçues en props sont affichées
// (projets : categories + technologies / formations : + levels)
function FilterBar({ categories, levels, technologies, values, onChange }) {
  return (
    <>
      {categories && (
        <FilterSelect
          name="category"
          options={categories}
          allLabel="Toutes les catégories"
          value={values.category}
          onChange={onChange}
        />
      )}
      {levels && (
        <FilterSelect
          name="level"
          options={levels}
          allLabel="Tous les niveaux"
          value={values.level}
          onChange={onChange}
        />
      )}
      {technologies && (
        <FilterSelect
          name="technology"
          options={technologies}
          allLabel="Toutes les technologies"
          value={values.technology}
          onChange={onChange}
        />
      )}
    </>
  );
}

export default FilterBar;
