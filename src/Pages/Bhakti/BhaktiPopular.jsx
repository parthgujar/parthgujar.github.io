import Footer from "../../Components/Layout/Footer";
import Header from "../../Components/Layout/Header";
import MusicPlayer from "../../Components/MusicPlayer";
import BHAKTIPOPULARLIST from "../../Constants/BHAKTIPOPULARLIST";

export default function BhaktiPopular() {
  return (
    <>
      <Header />
      <div className="MostPopular">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-12 mb-5 pb-5">
              <MusicPlayer
                musicList={BHAKTIPOPULARLIST}
                title="Bhakti Popular"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />{" "}
    </>
  );
}
