import React from 'react';
import Link from 'next/link';

function ServicesTab({ lightMode }) {
  function openTab(event) {
    document.querySelectorAll('.tab-content').forEach(element => element.style.display = 'none');
    const tabId = event.currentTarget.getAttribute('data-tab');
    document.querySelector(`.tab-content#${tabId}`).style.display = 'block';
  }

  return (
    <section className="services-tab section-padding">
      <div className="container">
        <div className="row" id="tabs">
          <div className="col-lg-6 order2">
            <div className="serv-tab-cont mb-80">
              <div className="tab-content current" id="tabs-1">
                <div className="item">
                  <div className="img">
                    <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/sass-img/serv/EmailHold.jpg`} alt="" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/serv-icons/0.png`} alt="" />
                    </div>
                    <div className="text">
                      <p>Whether you're looking to fill your pipeline with vetted appointments or turn one-time buyers into loyal brand advocates, MEGAMAIL delivers results you can see in your bottom line. </p>
                    </div>
                    <Link href="/dark/page-services" className="mt-30">
                      <span className="mr-15">Read More</span>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="tabs-2">
                <div className="item">
                  <div className="img">
                    <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/sass-img/serv/2.jpg`} alt="" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/serv-icons/1.png`} alt="" />
                    </div>
                    <div className="text">
                      <p>We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web.</p>
                    </div>
                    <Link href="/dark/page-services" className="mt-30">
                      <span className="mr-15">Read More</span>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="tabs-3">
                <div className="item">
                  <div className="img">
                    <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/sass-img/serv/3.jpg`} alt="" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/serv-icons/2.png`} alt="" />
                    </div>
                    <div className="text">
                      <p>We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web.</p>
                    </div>
                    <Link href="/dark/page-services" className="mt-30">
                      <span className="mr-15">Read More</span>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="tabs-4">
                <div className="item">
                  <div className="img">
                    <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/sass-img/serv/1.jpg`} alt="" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/serv-icons/0.png`} alt="" />
                    </div>
                    <div className="text">
                      <p>We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web.</p>
                    </div>
                    <Link href="/dark/page-services" className="mt-30">
                      <span className="mr-15">Read More</span>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 valign order1">
            <div className="serv-tab-link tab-links full-width md-mb50">
              <div className="sec-lg-head mb-80">
                <h6 className="dot-titl-non mb-15">More Services</h6>
                <p>Secure a continuous flow of vetted appointments from cold traffic and watch your emails deliver unmatched results. </p>
              </div>
              <ul className="rest">
                <li className="item-link current mb-15" data-tab="tabs-1" onClick={openTab}><span>01</span> Email Marketing Audit</li>
                <li className="item-link mb-15" data-tab="tabs-2" onClick={openTab}><span>02</span> Branding </li>
                <li className="item-link mb-15" data-tab="tabs-3" onClick={openTab}><span>03</span> Content Creation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesTab