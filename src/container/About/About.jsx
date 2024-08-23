import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">I Love Creating<span> Beautiful User Experiences</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <div>
            {about.title &&<h2 className="bold-text" style={{ marginTop: 20,marginLeft:"24px" }}>{about.title}</h2>}
            <p className="p-text" style={{ marginTop: 10,marginLeft:"24px",fontSize:"20px" }}>{about.description}</p>
            <button type="button" className="p-text" onClick={()=>window?.open("https://github.com/shefalisawant/Resume")}>Check Resume</button>
            <button type="button" className="p-text" onClick={()=>document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>Hire Me</button>
            </div>
            
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
