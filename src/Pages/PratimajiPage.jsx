// Create a photo gallery component

import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Footer from "../Components/Layout/Footer";
import Header from "../Components/Layout/Header";
import PRATIMAJIDATA from "../Constants/PRATIMAJIDATA";

export default function PratimajiPage() {
  return (
    <>
      <Header />
      <div className="PratimajiPage">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-12 px-5 mb-5 pb-5">
              <div className="gallery">
                <div className="gallery-title p-3 mb-2 text-center">
                  <h3>Pratimaji Gallery</h3>
                </div>
                <ResponsiveMasonry
                  columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
                >
                  <Masonry gutter="10px">
                    {PRATIMAJIDATA.map((item, index) => (
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
