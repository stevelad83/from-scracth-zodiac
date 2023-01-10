import React from 'react';
import './Main.css';
import background from '../../background.jpg';
import ZodiacCard from '../ZodiacCard/Zodiac.js';
import { zodiac } from '../../data.js';

export default function Main() {
  return (
    <div className="main" style={{ backgroundImage: `url(${background})` }}>
      Main
    </div>
  );
}
