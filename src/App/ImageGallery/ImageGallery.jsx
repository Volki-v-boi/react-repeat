import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ photos }) {
  return (
    <ul>
      {photos.map((photo) => {
        // console.log(photo);

        return (
          <li key={photo.id}>
            <ImageCard photo={photo} />
          </li>
        );
      })}
    </ul>
  );
}
