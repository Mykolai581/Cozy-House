import "./MainPetsCart.css";
import Modal from "../Modal/Modal.jsx";
import PetsModal from "../PetsModal/PetsModal";
import ButtonElement from "../ButtonElement/ButtonElement.jsx";
import { useState } from "react";

export default function MainPetsCart({ img, name, title, text, age }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="cart__pet pet">
        <div className="pet__image">
          <img src={img} alt="Pet" loading="lazy" />
        </div>
        <div className="pet__name">{name}</div>
        <ButtonElement
          style={{
            backgroundColor: "#fff",
            border: "2px solid #c5a48c",
            color: "#292929",
          }}
          text={"Learn more"}
          onClick={openModal}
        />
      </div>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <PetsModal
            img={img}
            name={name}
            title={title}
            text={text}
            age={age}
            onClose={closeModal}
          />
        </Modal>
      )}
    </>
  );
}
