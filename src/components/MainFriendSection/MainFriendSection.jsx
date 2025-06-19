import ButtonElement from "../ButtonElement/ButtonElement";
import "./MainFriendSection.css";
import Image from "../../../Images/MainFriendSection/Dog.png";
import { motion } from "framer-motion";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

export default function MainFriendSection() {
  return (
    <section className="main__friend friend">
      <div className="friend__container">
        <div className="friend__content">
          <ScrollAnimation>
            <h2 className="friend__title">Not only people need a house</h2>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="friend__text">
              We offer to give a chance to a little and nice puppy with an
              extremely wide and open heart. He or she will love you more than
              anybody else in the world, you will see!
            </div>
          </ScrollAnimation>

          <ButtonElement text={"Make a friend"} />
        </div>

        <div className="friend__image">
          <img src={Image} alt="Image" />
        </div>
      </div>
    </section>
  );
}
