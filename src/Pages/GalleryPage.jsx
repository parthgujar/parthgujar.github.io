// Create a photo gallery component

import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Footer from "../Components/Layout/Footer";
import Header from "../Components/Layout/Header";
import GALLARYDATA from "../Constants/GALLARYDATA";

export default function GalleryPage() {
  return (
    <>
      <Header />
      <div className="GalleryPage">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-12 px-5 mb-5 pb-5">
              <div className="gallery">
                <div className="gallery-title p-3 mb-2 text-center">
                  <h3>Photo Gallery</h3>
                </div>
                <ResponsiveMasonry
                  columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
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
