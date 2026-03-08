import Modal from "react-modal";

Modal.setAppElement("#root");
export default function ImageModal({ isOpen, onClose, image }) {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description || "Large image"}
        style={{ maxWidth: "90vw", maxHeight: "90vh" }}
      />
    </Modal>
  );
}
