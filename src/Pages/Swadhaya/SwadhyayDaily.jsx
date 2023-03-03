import Footer from "../../Components/Layout/Footer";
import Header from "../../Components/Layout/Header";
import MusicPlayer from "../../Components/MusicPlayer";
import SwadhyayDailyList from "../../Constants/SWADHYAYDAILYDATA";

export default function SwadhyayDaily() {
  return (
    <>
      <Header />
      <div className="SwadhyayDaily">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-12 mb-5 pb-5">
              <MusicPlayer musicList={SwadhyayDailyList} title="Swadhyay" />
            </div>
          </div>
        </div>
      </div>
      <Footer />{" "}
    </>
  );
}
