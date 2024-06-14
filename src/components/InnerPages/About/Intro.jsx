import React from 'react';

function Intro() {
  function openAccordion(event) {
    document.querySelectorAll('.accordion-info').forEach(element => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
      element.parentElement.classList.remove('active');
    })
    event.currentTarget.parentElement.classList.add('active');
    event.currentTarget.nextElementSibling.style.maxHeight = '300px';
    event.currentTarget.nextElementSibling.classList.add('active');
  }

  return (
    <section className="intro-corp section-padding pt-0">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-lg-5 valign md-mb50">
            <div className="imgs mb-80">
              <div className="img1 wow fadeInUp">
                <img src="/dark/assets/imgs/about/Rye.jpeg" alt="" className="radius-10" />
              </div>
              <div className="img2 wow fadeInLeft">
                <img src="/dark/assets/imgs/about/jesse.jpeg" alt="" className="radius-10" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sec-head mt-80">
            <h6>At MEGAMAIL, we are devoted exclusively to revolutionizing email marketing. Our journey began with a clear vision: to elevate email marketing into a precision tool for enhancing customer engagement and driving remarkable revenue growth. Through our focused approach, innovative strategies, and dedication to results, we have empowered numerous businesses to transform their email campaigns into potent assets that deliver substantial outcomes. </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro