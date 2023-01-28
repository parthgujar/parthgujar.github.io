import Footer from "../Components/Layout/Footer";
import Header from "../Components/Layout/Header";
import MusicPlayer from "../Components/MusicPlayer";
import ALLCDS from "../Constants/ALLCDS";

export default function AllCDs() {
  return (
    <>
      <Header />
      <div className="AllCDs">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-12 mb-5 pb-5">
              <MusicPlayer musicList={ALLCDS} title="All CDS" />
            </div>
          </div>
        </div>
      </div>
      <Footer />{" "}
    </>
  );
}
