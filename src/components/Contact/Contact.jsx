export default function Contact({
  contact: { id, name, number },
  deleteContact,
}) {
  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <button
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </button>
    </>
  );
}
