import Footer from "../../Components/Layout/Footer";
import Header from "../../Components/Layout/Header";
import BHAKTIALLALBUMSLIST from "../../Constants/BHAKTIALLALBUMS";

export default function BhaktiAllAlbums() {
  return (
    <>
      <Header />
      <div className="Nityakram">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-12 mb-5 pb-5">
              <div className="MusicPlayer">
                <div className="current-song">
                  <h3 className="mb-4 text-center">Bhakti All Albums</h3>
                  <div id="timeline" />
                </div>
                <div className="play-list">
                  {BHAKTIALLALBUMSLIST.map((music, key = 0) => (
                    <a key={music.name} href={music.link}>
                      <div className="track">
                        <img className="track-img" src={music.img} alt="" />
                        <div className="track-discr">
                          <span className="track-name">{music.name}</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />{" "}
    </>
  );
}
