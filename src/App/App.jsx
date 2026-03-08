import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ImageGallery from "./ImageGallery/ImageGallery";
import { fetchPhotos } from "../photosAPI";
import { ClipLoader } from "react-spinners";
import SearchBar from "./SearchBar/SearchBar";
import LoadMore from "./LoadMore/LoadMore";
import ImageModal from "./ImageModal/ImageModal";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [totalPages, setTootalPages] = useState(999);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = async (newImage) => {
    setPhotos([]);
    setImage(newImage);
  };
  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    if (image === "") {
      return;
    }

    async function getPhoto() {
      try {
        setLoading(true);
        const data = await fetchPhotos(image, page);
        setTootalPages(data.total_pages);
        if (data.length === 0) {
          return;
        }
        setPhotos((prevFotos) => {
          return [...prevFotos, ...data];
        });
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
    getPhoto();
  }, [image, page]);

  return (
    <>
      <div>APISHKA</div>
      <SearchBar onSubmit={handleSearch} />
      {loading && <ClipLoader />}
      {page >= totalPages && <p>Finish</p>}
      {photos.length > 0 && (
        <ImageGallery photos={photos} onImageClick={openModal} />
      )}
      {photos.length > 0 && <LoadMore load={handleLoadMore} />}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        image={selectedImage}
      />
      <Toaster />
    </>
  );
}

// Dpn2JcRODl1Oc3yVJ20xFYCJ7BNfAfqbYeBPMBo2ZB4;
