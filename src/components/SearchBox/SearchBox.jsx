export default function SearchBox({ value, onSearch }) {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <>
      <p>Find contacts by name:</p>
      <input type="text" value={value} onChange={handleChange} />
    </>
  );
}
