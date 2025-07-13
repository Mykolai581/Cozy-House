import "./MainDonationSection.css";
import ButtonElement from "../ButtonElement/ButtonElement.jsx";
import Image from "../../../Images/MainDonationSection/donation-dog.png";
import ImageCart from "../../../Images/MainDonationSection/credit-card.svg";
import Animation from "../ScrollAnimation/ScrollAnimation.jsx";

export default function MainDonationSection() {
  return (
    <section className="main__donation donation">
      <div className="donation__container">
        <div className="donation__image">
          <img src={Image} alt="Donation dog" loading="lazy" />
        </div>
        <Animation>
          <div className="donation__content">
            <h2 className="donation__title">You can also make a donation</h2>
            <div className="donation__name">
              Name of the bank / Type of bank account
            </div>

            <ButtonElement
              icon={ImageCart}
              text={"8380 2880 8028 8791 7435"}
              style={{ marginBottom: 24 }}
            />
            <div className="donation__text">
              Legal information and lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed
              ac diam. Praesent ultrices maximus tortor et vulputate. Interdum
              et malesuada fames ac ante ipsum primis in faucibus.
            </div>
          </div>
        </Animation>
      </div>
    </section>
  );
}
