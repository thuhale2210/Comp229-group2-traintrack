import React from 'react';
import { Button } from '../components'
import ExerciseHeroBannerImage from '../../images/exercises-banner.jpg';

const HeroBanner = () => (
  <div className='h-screen relative overflow-hidden'>
    <img src={ExerciseHeroBannerImage} alt="hero-banner" className="w-screen h-full object-cover" />
    <div className='flex-col absolute top-1/4 ml-10 text-primary-white'>
      <p className="font-bold text-4xl leading-snug">
        Sweat, Smile <br />
        And Repeat
      </p>
      <p className="text-base mt-5">
        Check out the most effective exercises personalized to you
      </p>
      <div className="mt-5 text-base">
        <a href="#exercises">
          <Button>Explore Exercises</Button>
        </a>
      </div>
    </div>
  </div>

);

export default HeroBanner;