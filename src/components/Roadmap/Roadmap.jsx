import React from "react";
import "./Roadmap.css";
function Roadmap() {
  return (
    <div className="roadMapContainer" id="Roadmap">
      <h1 className="roadMapHeading">ROADMAP</h1>
      <div className="roadMapInner">
        <div className="roadMapItem roadMapItem1">
          <div className="roadMapImage">
            <img src="roadmap-image1.png" className="no1roadmap" />
            <div className="line"></div>
          </div>
          <div className="roadMapItemText">
            <h4>PHASE I - 2021 Q3</h4>
            <p>Start 10,000 unique NFT car designs</p>
            <p>Start marketing campaign</p>
            <p>Website and social media development</p>
            <p>Initializing VIP Club membership</p>
            <p>Develop race and bids between players</p>
          </div>
        </div>
        <div className="roadMapItem roadMapItem2">
          <div className="roadMapImage">
            {" "}
            <img src="roadmap-image2.png" className="no1roadmap" />
            <div className="line2"></div>
          </div>
          <div className="roadMapItemText">
            <h4>PHASE II - 2021 Q4</h4>
            <p>Deploy NFT smart contract address on Ethereum Blockchain</p>
            <p>WHITELIST 1,000 NFTs</p>
            <p>Launch Public Sale</p>
            <p>VIP Crypto car club PASS For High Valued NFT Holders</p>
            <p>Develop Crypto Car Club Gaming Token</p>
            <p>Testing beta version for Crypto Car Club Game</p>
          </div>
        </div>
        <div className="roadMapItem roadMapItem3">
          <div className="roadMapImage">
            <img src="roadmap-image3.png" className="no1roadmap" />
            <div className="line3"></div>
          </div>
          <div className="roadMapItemText">
            <h4>PHASE III - 2022 Q1</h4>
            <p>Launch Crypto Car Club Game</p>
            <p>Boost ecosystem and rewards program</p>
            <p>Integrate social networks in Crypto Car Club for players</p>
            <p>Weekly tasks and daily competitions and rewards</p>
            <p>
              Develop and integrate our marketplace for earning, trading, and
              selling platforms
            </p>
          </div>
        </div>
        <div className="roadMapItem roadMapItem4">
          <div className="roadMapImage">
            <img src="roadmap-image4.png" className="no1roadmap" />
            <div className="line4"></div>
          </div>
          <div className="roadMapItemText">
            <h4 className="">PHASE IV - 2022 Q2</h4>
            <p>Start developing a VR version of the game</p>
            <p>
              Integrate Logitech equipment for real steering wheels and shifters
            </p>
            <p>Integrate unlocked premium contacts of the game assets</p>
          </div>
        </div>
      </div>

      <div id="Team"></div>
    </div>
  );
}

export default Roadmap;
