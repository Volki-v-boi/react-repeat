export default function ImageCard({
  photo: {
    urls: { regular },
    alt_description,
  },
}) {
  return (
    <div>
      <img src={regular} alt={alt_description} />
    </div>
  );
}
