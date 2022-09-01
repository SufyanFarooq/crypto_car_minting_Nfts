import React from "react";
import "./Tokenomics.css";
function Tokenomics() {
  return (
    <div>
      <div className="tokenomicsContainer tokenomicsInner  ">
        <div className="innerdivtextandimg ">
          <p className="tokenHead"> CRYPTO CAR CLUB TOKEN</p>
          <div className="row container  ">
            <div className="col-lg-8">
              <div className="tokenText">
                <p>
                  Crypto Car Club tokens are used as rewards throughout the
                  platform. All platform users will be able to claim specific
                  Crypto Car Club Tokens on a daily basis.Players can earn, mod,
                  and trade using Crypto Car Club NFT Ecosystem. Tokens can be
                  used in the shop to enhance the car and increase its
                  performance. A one-stop Marketplace, using its own suite of
                  Smart Contracts and APIs, the Crypto Car Club Tokens
                  Marketplace will be a hub for all vetted and approved games in
                  the ecosystem. The decentralized Smart Contracts automatically
                  divide the fees for these exchanges to the developers,
                  exchanges, and the platform.
                </p>
              </div>
            </div>
            <div className="col-lg-4 imgend ">
              <div className="tekenIcon ">
                <img src="coin.png" alt="" className="imgecoin" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
