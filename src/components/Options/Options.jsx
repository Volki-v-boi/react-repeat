export default function Options({ updateFeedback, total }) {
  return (
    <>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      {total > 0 && (
        <button onClick={() => updateFeedback("reset")}>Reset</button>
      )}
    </>
  );
}
