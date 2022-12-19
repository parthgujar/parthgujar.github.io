import Footer from "../Components/Layout/Footer";
import Header from "../Components/Layout/Header";

const RULESDATA = [
  "Maximum 8 days stay in the Ashram at a time.",
  "It is imperivitve to attend daily bhakti and Swadhyay in Mandir, on time.",
  "Follow bramhacharya.",
  "Mobile use in temple premises is prohibited.",
  "Adhere to the kitchen's schedule for Breakfast, Lunch and Dinner.",
  "It's important to attire in decent clothing at all times in the Ashram.",
];

function RulesPage() {
  return (
    <>
      <Header />
      <div>
        <div id="container-fluid">
          <div className="row pt-4 mt-4 ">
            <div className="col-12">
              <h2 className="text-center">Rules of Ashram</h2>
            </div>

            <div className="col-12 rules-card">
              <ul>
                {RULESDATA.map((rule) => (
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

export default RulesPage;
