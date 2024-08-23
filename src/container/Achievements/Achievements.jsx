import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Achievements.scss';
import { urlFor, client } from '../../client';

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const query = '*[_type == "achievements"]';

    client.fetch(query).then((data) => {
      setAchievements(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text"><span>Achievements</span></h2>

      <div className="app__achievement">
        {achievements.map((item, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__achievement-item"
            key={item.title + index}
          >
            <img src={urlFor(item.imgUrl)} alt={item.title} />
            <div>
            <h2 className="bold-text" style={{ marginTop: 20}}>{item.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{item.description}</p>
            </div>
            
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Achievements, 'app__about'),
  'achievements',
  'app__whitebg',
);
