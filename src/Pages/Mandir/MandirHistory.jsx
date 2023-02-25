import Footer from "../../Components/Layout/Footer";
import Header from "../../Components/Layout/Header";
import VideoPlayer from "../../Components/VideoPlayer";

import historyVideo from "../../../public/static/assets/videos/Shrimad Rajchandra Swadhyay Mandir History_480p.mp4";

// ""
function MandirHistory() {
  return (
    <>
      <Header />
      <div className="ContactUsPage">
        <div id="container-fluid">
          <div className="my-2 pb-2  text-center">
            <h3>Mandir's History</h3>
          </div>

          <div className="full-screen-player pb-5 mb-5">
            <VideoPlayer src={historyVideo} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MandirHistory;
