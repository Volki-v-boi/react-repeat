import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ photos, onImageClick }) {
  return (
    <ul>
      {photos.map((photo) => {
        // console.log(photo);

        return (
          <li
            key={photo.id}
            onClick={() => {
              onImageClick(photo);
            }}
          >
            <ImageCard photo={photo} />
          </li>
        );
      })}
    </ul>
  );
}
