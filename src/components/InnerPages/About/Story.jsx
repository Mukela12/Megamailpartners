import React, { useEffect } from 'react';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Story() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="pg-about section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="bg-img radius-10 md-mb50" data-background="/dark/assets/imgs/about/jesse.jpeg"></div>
          </div>
          <div className="col-lg-8">
            <div className="bg-img radius-10 md-mb50" data-background="/dark/assets/imgs/about/Megamail Banner.png"></div>
          </div>
          <div className="col-lg-4">
            <div className="sec-head mt-80">
            <h4>At MEGAMAIL, we are devoted exclusively to revolutionizing email marketing. Our journey began with a clear vision: to elevate email marketing into a precision tool for enhancing customer engagement and driving remarkable revenue growth. Through our focused approach, innovative strategies, and dedication to results, we have empowered numerous businesses to transform their email campaigns into potent assets that deliver substantial outcomes. </h4>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="cont mt-80">
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
