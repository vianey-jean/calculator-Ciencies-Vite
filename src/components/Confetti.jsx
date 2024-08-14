// src/components/Confetti.js
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

// eslint-disable-next-line react/prop-types
const Confetti = ({ trigger }) => {
  return (
    trigger && <ConfettiExplosion />
  );
};

export default Confetti;
