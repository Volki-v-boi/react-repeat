export default function SearchBar({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.query.value.trim();
    if (query) {
      onSubmit(query);
      form.reset();
    }
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          //   autocomplete="off"
          //   autofocus
          placeholder="Search images and photos"
          name="query"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
