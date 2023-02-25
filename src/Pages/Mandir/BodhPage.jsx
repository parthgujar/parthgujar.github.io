// Create a BodhPage component in src/Pages/BodhPage.js
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import Footer from "../../Components/Layout/Footer";
import Header from "../../Components/Layout/Header";
import BODHDATA from "../../Constants/BODHDATA";

const BodhPage = () => {
  return (
    <>
      <Header />

      <div className="text-center p-3">
        <h3>Prabhushreeji No Bodh</h3>
      </div>
      <div className="BodhPage">
        <div className="container bodh-card">
          <div className="row">
            <Accordion allowMultipleExpanded allowZeroExpanded className="p-0">
              {BODHDATA.map((bodh, key = 0) => (
                <AccordionItem key={key}>
                  <AccordionItemHeading>
                    <AccordionItemButton>{bodh.title}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div
                      className="col-md-12"
                      dangerouslySetInnerHTML={{ __html: bodh.description }}
                    />
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BodhPage;
