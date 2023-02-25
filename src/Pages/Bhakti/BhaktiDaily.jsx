import Footer from "../../Components/Layout/Footer";
import Header from "../../Components/Layout/Header";
import MusicPlayer from "../../Components/MusicPlayer";
import BhaktiDailyList from "../../Constants/BHAKTIDAILYDATA";

export default function BhaktiDaily() {
  return (
    <>
      <Header />
      <div className="BhaktiDaily">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-12 mb-5 pb-5">
              <MusicPlayer musicList={BhaktiDailyList} title="Bhakti" />
            </div>
          </div>
        </div>
      </div>
      <Footer />{" "}
    </>
  );
}
