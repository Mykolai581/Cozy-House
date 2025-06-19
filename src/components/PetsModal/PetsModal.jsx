import "./PetsModal.css";
import { useEffect } from "react";

export default function PetsModal({ img, name, title, text, age, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-container")) {
      onClose();
    }
  };

  return (
    <div className="modal-container" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="pet-modal__image">
          <img src={img} alt="Image" />
        </div>
        <div className="modal-pet__content">
          <div className="modal-pet__name">{name}</div>
          <div className="modal-pet__title">{title}</div>
          <div className="modal-pet__text">{text}</div>
          <div className="modal-pet__sub-content">
            <div className="modal-pet__age">Age: {age}</div>
            <div className="modal-pet__inoculations">Inoculations: none</div>
            <div className="modal-pet__diseases">Diseases: none</div>
            <div className="modal-pet__parasites">Parasites: none</div>
          </div>
        </div>
      </div>
    </div>
  );
}
