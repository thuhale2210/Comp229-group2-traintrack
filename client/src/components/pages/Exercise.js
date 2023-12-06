import React, { useState } from 'react';

import NavBar from '../customerNavBar';
import Exercises from '../customerExercises/Exercises';
import SearchExercises from '../customerExercises/SearchExercises';
import HeroBanner from '../customerExercises/HeroBanner';

const Exercise = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <>
      <NavBar />
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </>
  );
};

export default Exercise;
