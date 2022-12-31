import Footer from "../Components/Layout/Footer";
import Header from "../Components/Layout/Header";

const FACILITIES = [
  "Accommodation for up-to 55 people.",
  "8 Rooms and 6 self-contained Kutirs.",
  "Library rooms for study.",
  "CD distribution room and Office.",
  "Chitrashala depicting Param KrupaluDev's JeevanCharitra.",
];

function FacilitiesPage() {
  return (
    <>
      <Header />
      <div>
        <div id="container-fluid">
          <div className="row pt-4 mt-4 ">
            <div className="col-12">
              <h2 className="text-center">Facilities of Ashram</h2>
            </div>

            <div className="col-12 rules-card">
              <ul>
                {FACILITIES.map((rule) => (
                  <li>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FacilitiesPage;
