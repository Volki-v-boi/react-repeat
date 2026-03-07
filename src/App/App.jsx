import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ImageGallery from "./ImageGallery/ImageGallery";
import { fetchPhotos } from "../photosAPI";
import { ClipLoader } from "react-spinners";
import SearchBar from "./SearchBar/SearchBar";
import LoadMore from "./LoadMore/LoadMore";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [totalPages, setTootalPages] = useState(999);

  const handleSearch = async (newImage) => {
    setPhotos([]);
    setImage(newImage);
  };
  const handleLoadMore = () => {
    setPage(page + 1);
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
      {photos.length > 0 && <ImageGallery photos={photos} />}
      {photos.length > 0 && <LoadMore load={handleLoadMore} />}
      <Toaster />
    </>
  );
}

// Dpn2JcRODl1Oc3yVJ20xFYCJ7BNfAfqbYeBPMBo2ZB4;
