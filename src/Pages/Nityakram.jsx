import Footer from "../Components/Layout/Footer";
import Header from "../Components/Layout/Header";
import MusicPlayer from "../Components/MusicPlayer";
import NityakramList from "../Constants/Nityakram";

export default function Nityakram() {
  return (
    <>
      <Header />
      <div className="Nityakram">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-12 mb-5 pb-5">
              <MusicPlayer musicList={NityakramList} title="Nityakram" />
            </div>
          </div>
        </div>
      </div>
      <Footer />{" "}
    </>
  );
}
