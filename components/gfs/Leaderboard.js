import React from "react";
import "../../styles/Home.module.css"; // Import the CSS module

export default function LeaderboardGFS({
  loading,
  sehriTime,
  iftariTime,
  sehriTimeJafria,
  iftariTimeJafria,
  city,
  date,
}) {
  if (loading) {
    return (
      <div className="bgRamadanLBFGS d-flex flex-column  text-white">
        <div className="text-center">
          <div
            className="spinner-border "
            style={{ width: "3rem", height: "3rem", color: "#ffdb9d" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <p style={{ color: "#ffdb9d", textShadow: "2px 3px 10px #000" }}>
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bgRamadanLBFGS d-flex flex-column text-white">
  <div className="container">
    <div className="row px-5">
      <div className="col-3 px-2">
        <div className="row d-flex flex-column align-items-center justify-content-center">
          <div className="text-center">
            <img
              src="/bg/gfs/logoGFS.png"
              className="img-fluid logo-leaderboard mt-1"
              
              alt="Logo"
            />
          </div>
        </div>
      </div>
      <div className="col-9">
        <div className="text-center font-shadow mt-2">
          <h5 className="city-font-longBanner">{city} <span> ({date})</span></h5>
          {/* <p className="small date-font-longBanner"></p> */}
        </div>
        {/* Wrap the two tables in a new row */}
        <div className="row mt-2">
          <div className="col-6 d-flex justify-content-end align-items-center col-two-longBanner">
            {/* Iftari Table */}
            <div className="sm-font">
              <table
                className="table text-center mb-0"
                style={{ borderSpacing: "2px", borderCollapse: "separate" }}
              >
                <tbody>
                  <tr className="text-center">
                    <td
                      className="text-left md-font-longBanner align-middle border-0 head-color"
                      rowSpan="2"
                    >
                      Iftari
                    </td>
                    <td className="span-bg-longBanner font-heading">HANAFI</td>
                    <td className="span-bg-longBanner time">{iftariTime.replace(/[\s.]/g, '')}</td>

                  </tr>
                  <tr className="text-center">
                    <td className="span-bg-longBanner font-heading">JAFRI</td>
                    <td className="span-bg-longBanner time">{iftariTimeJafria.replace(/[\s.]/g, '')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-start align-items-center col-three-longBanner">
            {/* Sehri Table */}
            <div className="sm-font">
              <table
                className="table text-left mb-0"
                style={{ borderSpacing: "2px", borderCollapse: "separate" }}
              >
                <tbody>
                  <tr className="text-center">
                    <td
                      className="text-left md-font-longBanner align-middle border-0 head-color"
                      rowSpan="2"
                    >
                      Sehri
                    </td>
                    <td className="span-bg-longBanner font-heading">HANAFI</td>
                    <td className="span-bg-longBanner time">{sehriTime.replace(/[\s.]/g, '')}</td>
                  </tr>
                  <tr className="text-center">
                    <td className="span-bg-longBanner font-heading">JAFRI</td>
                    <td className="span-bg-longBanner time">{sehriTimeJafria.replace(/[\s.]/g, '')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Uncomment the note below if needed */}
        {/*
        <p className="p-note m-0 p-0 text-center">
          Sehri and Iftar times may vary slightly (±1 min).
        </p>
        */}
      </div>
    </div>
  </div>
</div>

  );
}