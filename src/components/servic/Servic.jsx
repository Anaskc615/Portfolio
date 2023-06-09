import React from "react";
import "./servic.css";
import { AiOutlineCheck } from "react-icons/ai";

const Servic = () => {
  return (
    <section id="servic">
      <h5>What I Offer</h5>
      <h2>Service</h2>

      <div className="container services__container">
        <article className="servic">
          <div className="service__head">
            <h3>Mobile App Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

           
          </ul>
        </article>

        <article className="servic">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>

        <article className="servic">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Servic;
