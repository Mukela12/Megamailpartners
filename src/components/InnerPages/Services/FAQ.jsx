import React from 'react';

function FAQ() {
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
        <div className="row">
          <div className="col-lg-5">
            <div className="sec-head mb-40">
              <h6 className="sub-title">Email Marketing FAQ</h6>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="cont">
              <div className="text">
                <h2 className="d-slideup wow">
                  <span className="sideup-text">
                    <span className="up-text">Frequently Asked Questions</span>
                  </span>
                </h2>
              </div>
              <div className="accordion bord mt-40">
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Is email marketing still important and effective?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Absolutely! Email marketing remains one of the most cost-effective and conversion-rich forms of digital marketing. It delivers a high ROI, helping businesses to grow their audience, reinforce their message, and increase sales.</p>
                  </div>
                </div>
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Do email marketing services work for small businesses?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Yes, email marketing can be a game-changer for small businesses. It provides a direct line to your customers and prospects, allowing for personalized engagement and the ability to drive conversions at a lower cost compared to other marketing channels.</p>
                  </div>
                </div>
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Does your email marketing firm offer services for eCommerce businesses?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Definitely! We specialize in email marketing for eCommerce businesses. Our services are designed to integrate seamlessly with platforms like Shopify to enhance your marketing efforts and drive significant revenue.</p>
                  </div>
                </div>
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".7s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">How do I choose the best email marketing agency for my business?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">When choosing an email marketing agency, consider their expertise, tools, and client testimonials. Look for agencies that offer comprehensive services tailored to your business needs and can demonstrate significant ROI from their campaigns.</p>
                  </div>
                </div>
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".9s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Which ESPs do you support?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">We work with various Email Service Providers (ESPs), including but not limited to Klaviyo, Mailchimp, and ActiveCampaign. Our focus is on maximizing the capabilities of these platforms to benefit your specific marketing strategies.</p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay="1.1s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">What is an email marketing agency?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">An email marketing agency focuses on creating and implementing email marketing strategies for clients. This includes designing emails, managing lists, segmenting audiences, and analyzing results to optimize campaign performance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
