import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Experience.scss";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Work Experience</h2>

      <div className="app__skills-container">
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <h5>{work.company}</h5>
                      {work?.desc?.map((item, index) => (
                        <p
                          className="p-text"
                          style={{ fontSize: "16px" }}
                          key={index}
                          dangerouslySetInnerHTML={{ __html: item }}
                        ></p>
                      ))}
                    </motion.div>
                  </>
                ))} 
              
              </motion.div>
            </motion.div>
          ))}
             <button
                  type="button"
                  className="p-text"
                  onClick={() =>
                    window?.open("https://github.com/shefalisawant/Resume")
                  }
                >
                  Check Resume
                </button>
        </div>

      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Experience, "app__skills"),
  "work",
  "app__primarybg"
);
