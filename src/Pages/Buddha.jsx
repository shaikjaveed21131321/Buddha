import React, { useState } from "react";
import "./Buddha.css";
import Buddhaimg from "./assets/Buddhaimg.png";
import Like from "./assets/icons8-like-50.png";
import Share from "./assets/icons8-share-50.png";
import Eye from "./assets/icons8-eye-24.png";

const Buddha = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [shareCount, setShareCount] = useState(0);
  const [viewCount, setViewCount] = useState(0);

  const [showDetails, setShowDetails] = useState("d-flex");
  const [showMore, setShowMore] = useState(false);
  const [title, setTitle] = useState("<");
  const [isVisible, setIsVisible] = useState(true);
  const [showImg, setShowImg] = useState("d-flex")
  const [indicater, setIndicater]=useState("<<")
  const [isVisible1, setIsVisible1]= useState(true)

  const toggleDetails = () => {
    if (isVisible) {
      setTitle(">");
      setShowDetails("d-none");
    } else {
      setTitle("<");
      setShowDetails("d-flex");
    }
    setIsVisible(!isVisible);
  };
  const toggleImg = () => {
    if (isVisible1) {
      setIndicater(">>");
      setShowImg("d-none");
    } else {
      setIndicater("<<");
      setShowImg("d-flex");
    }
    setIsVisible1(!isVisible1);
  };

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="Buddha_container">
        <div className="Buddha_text">
          <div className="togglebtn">
            <button
              onClick={toggleDetails}
              style={{ fontSize: "35px", height: "45px", width: "45px", borderRadius: "50px" }}
            >
              {title}
            </button>
          </div>
          <div className={showDetails} id="Buddha_container1">
            <div>
              <p className="Heading">
                MAITREYA BUDDHA IN GESTURE OF FEARLESSNESS (ABHAYA MUDRA)
              </p>
            </div>

            <div className="LikeShareView">
              <div>
                <button onClick={() => setLikeCount(likeCount + 1)}>
                  <img className="Like" src={Like} alt="" />
                  <p>{likeCount}</p>
                </button>
              </div>
              <div>
                <button onClick={() => setShareCount(shareCount + 1)}>
                  <img className="Share" src={Share} alt="" />
                  <p>{shareCount}</p>
                </button>
              </div>
              <div>
                <button onClick={() => setViewCount(viewCount + 1)}>
                  <img className="View" src={Eye} alt="" />
                  <p>{viewCount}</p>
                </button>
              </div>
            </div>
            <div className="Buddha-detail">
              <div className="Buddha-detail-header">
                <p>Dynasty</p>
                <p>Period</p>
                <p>Material</p>
                <p>Location</p>
              </div>
              <div className="Buddha-detail-title">
                <p>: Ahichchhatra</p>
                <p>: 200 CE</p>
                <p>: Sandstone</p>
                <p>: National Museum</p>
              </div>
            </div>
            <div className="Description">
              <h3>Description :</h3>
              <p className="Description-text">
                Maitreya, the future Buddha to be, resides in the Tushita heaven
                as a bodhisattva waiting to redeem humanity. In Buddhism, Maitreya
                is the eighth Buddha, a successor of the seven historical Buddhas
                (sapta-manushi Buddhas). The Digha Nikaya mentions that Maitreya
                Buddha will be born in Ketumati, in present-day Varanasi, Uttar
                Pradesh. As a bodhisattva, Maitreya is often depicted adorned with
                elaborate jewelry, including earrings, wristlets, necklaces, and
                an amulet, signifying his royal heritage and spiritual
                significance.
              </p>
              <button onClick={toggleReadMore} style={{fontSize:"20px",marginTop:"5%", color:"orange"}}>
                {showMore ? "\u2190 Show Less" : " \u2192 Read More"}
              </button>
              {showMore && (
                <div className="more-content">
                  <p className="Description-text">
                  Maitreya is prophesied to appear on Earth in the distant future, during a time when the teachings of the current Buddha, Gautama, have been forgotten by humanity. His arrival is expected to bring a new era of enlightenment, where he will rediscover and teach the dharma (the Buddhist teachings), bringing peace and prosperity to the world.

In Buddhist art, Maitreya is sometimes depicted seated on a throne, awaiting his time to descend to Earth. He is also shown in a standing position, symbolizing his readiness to begin his role as the future Buddha. His serene expression and posture convey his deep compassion and wisdom, qualities that he will impart to humanity when the time comes.

The worship of Maitreya has been an important aspect of Mahayana Buddhism, and many temples and statues are dedicated to him across various Buddhist cultures. Devotees often pray to Maitreya, hoping for his swift arrival and the salvation he is destined to bring.


                  </p>
                </div>
              )}
            </div>
            <div className="addcartbtns">
              <button className="addtocollection">add to collection</button>
              <button className="souvenir">souvenir</button>
            </div>
          </div>
        </div>
        <div className="Imgbtn-container">
          <button className="Imgbtn"onClick={toggleImg}>
              {indicater}
          </button>
        </div>
        <div className={showImg} id="Buddha_img">
          <img src={Buddhaimg} alt="" className="Buddhaimg" />
        </div>
      </div>
    </>
  );
};

export default Buddha;
