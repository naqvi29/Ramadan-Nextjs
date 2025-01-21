
import React from 'react';
import '../styles/Home.module.css'; // Import the CSS module

export default function Ramzan({ sehriTime, iftariTime }) {
  return (
    <div className="bgRamadan d-flex flex-column align-items-center justify-content-center text-white">
      <div className="text-center">
        <img
          src="/logo.png"
          className="img-fluid color-invert w-50"
          alt="Logo"
        />
      </div>
      <div className="text-center mt-2">
        <h5 className="mb-1">KARACHI</h5>
        <p className="mb-0">1ST RAMAZAN 1446H</p>
      </div>
      <div className="d-flex flex-column align-items-center mt-3 w-100">
        <div className="d-flex justify-content-between w-75">
          <span>Iftari</span>
          <span>Hanafi: {iftariTime} PM</span>
        </div>
        <div className="d-flex justify-content-between w-75">
          <span></span>
          <span>Jafri: {iftariTime} PM</span>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center mt-2 w-100">
        <div className="d-flex justify-content-between w-75">
          <span>Sehri</span>
          <span>Hanafi: {sehriTime} AM</span>
        </div>
        <div className="d-flex justify-content-between w-75">
          <span></span>
          <span>Jafri: {sehriTime} AM</span>
        </div>
      </div>
    </div>
  );
}

