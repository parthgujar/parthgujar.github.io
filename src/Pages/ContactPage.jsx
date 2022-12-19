import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { ContactUsForm } from "../Components/ContactUsForm";
import Footer from "../Components/Layout/Footer";
import Header from "../Components/Layout/Header";

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="ContactUsPage">
        <div id="container-fluid">
          <div className="pt-4 mt-4 text-center">
            <h3>Contact Us</h3>
          </div>
        </div>

        <div className="container contact-us-card">
          <div className="row">
            <div className="col-md-4 pr-5">
              <div className="contact-info">
                <h4 className="mb-3">Contact Info</h4>
                <p>
                  <span className="fa fa-clock"></span> 10:00 AM - 12.00 PM{" "}
                  <br /> 4.00 PM - 7.00 PM
                </p>
                <p>
                  <span className="fa fa-phone-alt"></span> 025-32496866 <br />
                  +91-9881065981
                </p>
                <p>
                  <FontAwesomeIcon icon="fa-regular fa-envelope" />
                  <a href="mailto:office@srsmd.com">office@srsmd.com</a>
                </p>
                <p>
                  <span className="fa fa-map-marker-alt"></span> Lam Rd, Deolali
                  Gaon, Nashik, Maharashtra 422401, India.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-map">
                <iframe
                  title="Shrimad Rajchandra Swadhyay Mandir Deolali"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54957.82278257258!2d73.83629357246927!3d19.916937922593274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd957990e49a71%3A0xaac80ecba4d6d13f!2sShrimad%20Rajchandra%20Swadhyay%20Mandir%20Deolali!5e0!3m2!1sen!2sin!4v1671419449879!5m2!1sen!2sin"
                  style={{ border: "0", borderRadius: "10px" }}
                  height="350"
                  width="350"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-form">
                <h4 className="mb-3">Send Us a Message</h4>
                <ContactUsForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
