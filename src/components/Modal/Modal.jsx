import ReactDOM from "react-dom";
import "./Modal.css";

export default function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button
          style={{
            padding: "5px 10px",
            borderRadius: "50%",
            fontSize: "20px",
            margin: "-20px 0px 0px 0px",
          }}
          className="modal-close"
          onClick={onClose}
        >
          ✖
        </button>{" "}
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
