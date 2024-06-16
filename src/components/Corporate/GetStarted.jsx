import React, { useState, useEffect } from 'react';
import Link from 'next/link';
//= Components
import ModalVideo from '../Common/ModalVideo';
//= Scripts
import parallaxie from '@/common/parallaxie';

import data from '@/data/Corporate/header.json';

function SideImage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    parallaxie(`.bg-img.parallaxie`, 0.4);
  }, []);

  function openVideo(event) {
    event.preventDefault();
    setIsVideoOpen(true);
  }

  return (
    <section className="sideimg-numbers section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-6">
            <div className="cont">
              <div>
                <h6 className="sub-title mb-15">Want to boost your email list management game in 2024? </h6>
                <h2 className="fz-50">Get Your Personalized 2024 Email Marketing Scorecard</h2>{
                data.map((item) => (                         
                          <><Link href={item.button.link} className="butn butn-md butn-bg main-colorbg3 text-dark mt-30" style={{ marginRight: '10px' }}>
                        {item.button.text}
                        <i className="ml-5">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"></path>
                            </svg>
                        </i>
                    </Link><Link href={item.button2.link} className="butn butn-md butn-bg main-colorbg3 text-dark mt-30">
                            {item.button2.text}
                            <i className="ml-5">
                                <svg width="18" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"></path>
                                </svg>
                            </i>
                        </Link></>))}
                          
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-img bg-left parallaxie d-flex align-items-center justify-content-center" data-background="/dark/assets/imgs/background/banner1.jpg">

      </div>
      <div className="container-fluid mt-100">
        <div className="row">
          <div className="col-12">
            <div className="main-marq xlrg">
              <div className="slide-har st1 strok">
                <div className="box">
                  <div className="item">
                    <h4 className="stroke opacity-4">Free Scorecard</h4>
                  </div>
                  <div className="item">
                    <h4 className="stroke opacity-4">Free Scorecard</h4>
                  </div>
                  <div className="item">
                    <h4 className="stroke opacity-4">Free Scorecard</h4>
                  </div>
                  <div className="item">
                    <h4 className="stroke opacity-4">Free Scorecard</h4>
                  </div>
                  <div className="item">
                    <h4 className="stroke opacity-4">Free Scorecard</h4>
                  </div>
                </div>
                <div className="box">
                  <div className="item">
                    <h4 className="stroke opacity-4">Free Scorecard</h4>
                  </div>
                  <div className="item">
                    <h4 className="stroke opacity-4">Free Scorecard</h4>
                  </div>
                  <div className="item">
                    <h4 className="stroke opacity-4">Free Scorecard</h4>
                  </div>
                  <div className="item">
                    <h4 className="stroke opacity-4">Free Scorecard</h4>
                  </div>
                  <div className="item">
                    <h4 className="stroke opacity-4">Free Scorecard</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo videoId="AzwC6umvd1s" channel="youtube" isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} autoplay />
    </section>
  )
}

export default SideImage