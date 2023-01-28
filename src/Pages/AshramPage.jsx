// Create a photo gallery component

import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Footer from "../Components/Layout/Footer";
import Header from "../Components/Layout/Header";
import GALLARYDATA from "../Constants/GALLARYDATA";

const RULESDATA = [
  "Maximum 8 days stay in the Ashram at a time.",
  "It is imperivitve to attend daily bhakti and Swadhyay in Mandir, on time.",
  "Follow bramhacharya.",
  "Mobile use in temple premises is prohibited.",
  "Adhere to the kitchen's schedule for Breakfast, Lunch and Dinner.",
  "It's important to attire in decent clothing at all times in the Ashram.",
];

const FACILITIES = [
  "Accommodation for up-to 55 people.",
  "8 Rooms and 6 self-contained Kutirs.",
  "Library rooms for study.",
  "CD distribution room and Office.",
  "Chitrashala depicting Param KrupaluDev's JeevanCharitra.",
];

export default function AshramPage() {
  return (
    <>
      <Header />
      <div className="AshramPage">
        <div className="container-fluid">
          <div>
            <h1 className="text-center">Ashram</h1>
          </div>

          <div className="rules-facilities">
            <div className="col-md-6 mb-3 py-3">
              <h2 className="text-center mb-5">Rules of Ashram</h2>
              <div className="col-12 rules-card">
                <ul>
                  {RULESDATA.map((rule) => (
                    <li>{rule}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-md-6 mb-3 py-3">
              <h2 className="text-center mb-5">Facilities of Ashram</h2>
              <div className="col-12 rules-card">
                <ul>
                  {FACILITIES.map((rule) => (
                    <li>{rule}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-12 mb-5 pb-5">
              <div className="gallery">
                <div className="gallery-title p-3 mb-2 text-center">
                  <h2>Photo Gallery</h2>
                </div>
                <ResponsiveMasonry
                  columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
                >
                  <Masonry gutter="10px">
                    {GALLARYDATA.map((item, index) => (
                      <img
                        src={item.src}
                        alt={item.alt}
                        style={{ borderRadius: "10px" }}
                      />
                    ))}
                  </Masonry>
                </ResponsiveMasonry>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />{" "}
    </>
  );
}
