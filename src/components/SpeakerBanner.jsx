import React from 'react';
import allSpeakerOf2024 from '../../public/Speakers2024/AllSpeakerOfTEDxJSPMRSCOE.jpg';

export default function SpeakerBanner() {
  return (
    <div className='w-100vw h-100vh flex justify-center items-center mt-10'>
      <img src={allSpeakerOf2024} alt="All Speakers of TEDxJSPMRSCOE 2024" />
    </div>
  );
}
