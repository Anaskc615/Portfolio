import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="expereince__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
             <div>
             <h4>Native Android</h4>
              <small className="text-light">Experienced</small>
             </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
             <div>
             <h4>Flutter </h4>
              <small className="text-light">Experienced</small>
             </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
             <div>
             <h4>React js</h4>
              <small className="text-light">Experienced</small>
             </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
             <div>
             <h4>React Native</h4>
              <small className="text-light">Experienced</small>
             </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="expereince__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Node js</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
             <div>
             <h4>Php</h4>
              <small className="text-light">Experienced</small>
             </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
             <div>
             <h4>Go</h4>
              <small className="text-light">Experienced</small>
             </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Java</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Javascript</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
