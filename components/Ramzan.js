import React from 'react';
import '../styles/Home.module.css'; // Import the CSS module

export default function Ramzan({ sehriTime, iftariTime,sehriTimeJafria, iftariTimeJafria, city, date }) {
  return (
    <div className="bgRamadan d-flex flex-column align-items-center justify-content-between text-white">
      <div className="text-center">
        <img
          src="/logo.png"
          className="img-fluid color-invert w-50"
          alt="Logo"
        />
      </div>
      <div className="text-center mt-2 font-shadow">
        <h5 className="mb-1">{city}</h5>
        {/* <p className="mb-0 small">1ST RAMAZAN 1446H</p> */}
        <p className="mb-0 small">{date}</p>
      </div>

      {/* Iftari Table */}
      <div className="d-flex flex-column align-items-center mt-3 w-100 sm-font">
        <table
          className="table w-75 text-center"
          style={{ borderSpacing: '4px', borderCollapse: 'separate' }} // Added spacing here
        >
          <tbody>
            <tr> 
              <td className="text-left md-font align-middle border-0 head-color" rowSpan="2">Iftari</td>
              <td className="span-bg font-heading">HANAFI</td>
              <td className="span-bg time">{iftariTime} </td>
            </tr>
            <tr>
              <td className="span-bg font-heading">JAFRI</td>
              <td className="span-bg time">{iftariTimeJafria}</td>
            </tr>
            <tr className="spacing-row"></tr>
            {/* Sehri Table */}
            
            <tr>
              <td rowSpan="2" className="text-left md-font align-middle border-0 head-color">Sehri</td>
              <td className="span-bg font-heading">HANAFI</td>
              <td className="span-bg time">{sehriTime}</td>
            </tr>
            <tr>
              <td className="span-bg font-heading">JAFRI</td>
              <td className="span-bg time">{sehriTimeJafria}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="p-note">Disclaimer: Sehri and Iftar times may vary slightly (±1 min).</p>
    </div>
  );
}
