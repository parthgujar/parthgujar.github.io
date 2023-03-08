import React from "react";
import Slider from "react-slick";
import Footer from "../../Components/Layout/Footer";
import Header from "../../Components/Layout/Header";
import DATA from "../../Constants/JEEVANCHATIRADATA";

function JeevanCharitra() {
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
  };

  return (
    <>
      <Header />
      <div className="GalleryPage">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-12 px-5">
              <div className="gallery">
                <div className="gallery-title p-3 mb-2 text-center">
                  <h3>Jeevancharitra</h3>
                </div>
                <Slider {...settings}>
                  {DATA.map((item, index) => (
                    <div
                      key={index}
                      className="d-flex col-md-12 justify-content-center w-100"
                    >
                      <img src={item.src} alt={item.alt} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />{" "}
    </>
  );
}

export default JeevanCharitra;
