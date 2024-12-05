import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const CountdownModal = ({ isOpen, onClose, targetDate }) => {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance <= 0) {
        clearInterval(interval);
        setCountdown('Countdown Over');
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal">
      <h2 className="text-xl font-bold mb-4">Countdown Modal</h2>
      <div className="flex justify-center items-center text-4xl font-bold text-center">
        <span className="mr-2">{countdown.split(' ')[0]}</span>
        <span className="mr-2">{countdown.split(' ')[1]}</span>
        <span className="mr-2 text-red-500">{countdown.split(' ')[2]}</span>
        <span className="text-red-500">{countdown.split(' ')[3]}</span>
      </div>
      <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">Close</button>
    </Modal>
  );
};

export default CountdownModal;
