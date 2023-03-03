import { useEffect, useState } from "react";
import ImageCardWithTitle from "../Components/ImageCardWithTitle";
import Footer from "../Components/Layout/Footer";
import Header from "../Components/Layout/Header";
import Modals from "../Components/Modals";
import {
  SWADHYAYSECTION,
  BHAKTISECTION,
  HEADERSECTION,
  MANDIRSECTION,
} from "../Constants/HOMEDATA";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let Timer;
    if (localStorage.getItem("disclaimer_accepted") && setIsOpen(false)) {
      Timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
    }

    return () => {
      clearTimeout(Timer);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="Mobile-Subtitle">
        <h4>
          Prabhushreeji na kehva thi, mare param krupalu dev ni aagya manya che.
        </h4>
      </div>
      <div id="container-fluid">
        <div className="d-none d-lg-flex pt-4 mt-4 flex-row justify-content-around">
          {HEADERSECTION.map((section) => (
            <div key={section.id} className="section">
              <h3>{section.name}</h3>
            </div>
          ))}
        </div>
        <div className="d-none d-lg-flex  pt-3 px-2 mt-3 flex-row justify-content-around">
          <div className="d-none d-lg-flex  flex-wrap col-md-4">
            {SWADHYAYSECTION.map((section) => (
              <div key={section.id} className="section w-50 p-4">
                <ImageCardWithTitle
                  image={section.image}
                  title={section.name}
                  link={section.link}
                />
              </div>
            ))}
          </div>
          <div className="d-none d-lg-flex flex-wrap px-0 col-md-4">
            {MANDIRSECTION.map((section) => (
              <div key={section.id} className="section w-50 p-4">
                <ImageCardWithTitle
                  image={section.image}
                  title={section.name}
                  link={section.link}
                />
              </div>
            ))}
          </div>
          <div className="d-none d-lg-flex flex-wrap col-md-4">
            {BHAKTISECTION.map((section) => (
              <div key={section.id} className="section w-50 p-4">
                <ImageCardWithTitle
                  image={section.image}
                  title={section.name}
                  link={section.link}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        id="container-fluid"
        className="d-sm-flex d-lg-none d-sm-block home-page "
      >
        <div className="pt-4 mt-4 text-center">
          <h3>{HEADERSECTION[0].name}</h3>

          <div className="d-flex d-lg-none flex-wrap pt-3 px-1 mt-3 flex-row justify-content-around">
            {SWADHYAYSECTION.map((section) => (
              <div key={section.id} className="section w-50 p-4">
                <ImageCardWithTitle
                  image={section.image}
                  title={section.name}
                  link={section.link}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="pt-4 mt-4 text-center">
          <h3>{HEADERSECTION[1].name}</h3>

          <div className="d-flex d-lg-none flex-wrap pt-3 px-1 mt-3 flex-row justify-content-around">
            {MANDIRSECTION.map((section) => (
              <div key={section.id} className="section w-50 p-4">
                <ImageCardWithTitle
                  image={section.image}
                  title={section.name}
                  link={section.link}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="py-4 my-4 text-center">
          <h3>{HEADERSECTION[2].name}</h3>

          <div className="d-flex d-lg-none flex-wrap py-3 px-1 my-3 mb-4 pb-4 flex-row justify-content-around">
            {BHAKTISECTION.map((section) => (
              <div key={section.id} className="section w-50 p-4">
                <ImageCardWithTitle
                  image={section.image}
                  title={section.name}
                  link={section.link}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="Subtitle">
        <h4>
          Prabhushreeji na kehva thi, mare param krupalu dev ni aagya manya che.
        </h4>
      </div>
      <Footer />

      <div data-toggle="modal" data-target="#exampleModalCenter" />
      <Modals
        modalIsOpen={isOpen}
        closeModal={() => {
          setIsOpen(false);
          localStorage.setItem("disclaimer_accepted", true);
        }}
        title="Sample"
      />
    </>
  );
}

export default HomePage;
