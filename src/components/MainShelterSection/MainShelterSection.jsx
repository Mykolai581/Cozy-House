import "./MainShelterSection.css";
import Animation from "../ScrollAnimation/ScrollAnimation.jsx";

export default function MainShelterSection() {
  const images = import.meta.glob("../../../Images/MainShelterSection/*.svg", {
    eager: true,
    as: "url",
  });
  const imageUrls = Object.values(images);
  const items = [
    { img: imageUrls[0], text: "Pet food" },
    { img: imageUrls[1], text: "Transportation" },
    { img: imageUrls[2], text: "Toys" },
    { img: imageUrls[3], text: "Bowls and cups" },
    { img: imageUrls[4], text: "Shampoos" },
    { img: imageUrls[5], text: "Vitamins" },
    { img: imageUrls[6], text: "Medicines" },
    { img: imageUrls[7], text: "Collars / leashes" },
    { img: imageUrls[8], text: "Sleeping areas" },
  ];

  return (
    <section className="main__shelter shelter">
      <div className="shelter__container">
        <Animation>
          <h2 className="shelter__title">How you can help our shelter</h2>
        </Animation>
        <div className="shelter__items">
          {items.map((item, index) => (
            <Animation key={`${item.text}-${index + 1}`}>
              <div className="shelter__item">
                <div className="shelter__image">
                  <img src={item.img} alt={item.text} />
                </div>
                <div className="shelter__text">{item.text}</div>
              </div>
            </Animation>
          ))}
        </div>
      </div>
    </section>
  );
}
