export default function BookList({ books }) {
  return (
    <>
      <h1>Books of the week</h1>
      <ul>
        {books.map((book) => {
          return <li key={book.id}>{book.name}</li>;
        })}
      </ul>
    </>
  );
}
