import React from 'react';
import '../../styles/Home.module.css'; // Import the CSS module

export default function Mrec({ loading, sehriTime, iftariTime,sehriTimeJafria, iftariTimeJafria, city, date }) {

  if (loading) {
    return (
      <div className="bgRamadanG d-flex flex-column align-items-center justify-content-center text-white">
        <div className="text-center mt-5">
          <div className="spinner-border " style={{ width: '3rem', height: '3rem', color: '#FFF' }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3" style={{ color: '#FFF', textShadow: '2px 3px 10px #000' }}>Loading...</p>
        </div>
      </div>
    );
  }


  return (
    <div className="bgRamadanG d-flex flex-column align-items-center justify-content-between text-white">
      {/* <div className="text-center">
        <img
          src="/k&ns.png"
          className="img-fluid logo-mrecK"
          alt="Logo"
        />
      </div> */}
      <div className="text-center custom-gfs-margin font-shadowK">
        <h5 className="mb-1">{city}</h5>
        {/* <p className="mb-0 small">1ST RAMAZAN 1446H</p> */}
        <p className="mb-0 small">{date}</p>
      </div>

      {/* Iftari Table */}
      <div className="d-flex flex-column align-items-center mt-3 w-100 sm-font">
        <table
          className="table w-75 text-center"
          style={{ borderSpacing: '2px', borderCollapse: 'separate' }} // Added spacing here
        >
          <tbody>
            <tr> 
              <td className="text-left md-font align-middle border-0 head-colorK" rowSpan="2">Iftari</td>
              <td className="span-bgK font-headingK">HANAFI</td>
              <td className="span-bgK timeK">{iftariTime} </td>
            </tr>
            <tr>
              <td className="span-bgK font-headingK">JAFRI</td>
              <td className="span-bgK timeK">{iftariTimeJafria}</td>
            </tr>
            <tr className="spacing-row"></tr>
            {/* Sehri Table */}
            
            <tr>
              <td rowSpan="2" className="text-left md-font align-middle border-0 head-colorK">Sehri</td>
              <td className="span-bgK font-headingK">HANAFI</td>
              <td className="span-bgK timeK">{sehriTime}</td>
            </tr>
            <tr>
              <td className="span-bgK font-headingK">JAFRI</td>
              <td className="span-bgK timeK">{sehriTimeJafria}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <p className="p-note">Sehri and Iftar times may vary slightly (±1 min).</p> */}
      <p className="p-note m-0 p-0">Sehri and Iftar times may vary slightly (±1 min).</p>
    </div>
  );
}
