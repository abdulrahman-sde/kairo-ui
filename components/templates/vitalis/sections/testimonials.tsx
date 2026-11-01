"use client";

import React from "react";

export function Testimonials() {
  const [activeSlide, setActiveSlide] = React.useState(0);

  return (
    <section className="testimonial section-padding">
      <div className="blur-shape-left-5">
      </div>
      <div className="blur-shape-right-5">
      </div>
      <div className="w-layout-blockcontainer site-container w-container">
        <div className="content-wrapper testimonial">
          <div data-delay="4000" data-animation="slide" className="testimonial-slider w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
            <div className="mask w-slider-mask overflow-hidden">
              <div style={{ display: "flex", transition: "transform 0.4s ease-in-out", transform: `translateX(-${activeSlide * 100}%)` }}>
                <div className="slide w-slide" style={{ flex: "0 0 100%", minWidth: "100%" }}>
                  <div className="slider-testimonial-card">
                    <div className="star-rating">
                      <img loading="lazy" src="/vitalis/assets/670ce4297b2d0225cc8738e0_Star_icon.svg" alt="" className="star-icon"/>
                      <img loading="lazy" src="/vitalis/assets/670ce4297b2d0225cc8738e0_Star_icon.svg" alt="" className="star-icon"/>
                      <img loading="lazy" src="/vitalis/assets/670ce4297b2d0225cc8738e0_Star_icon.svg" alt="" className="star-icon"/>
                      <img loading="lazy" src="/vitalis/assets/670ce4297b2d0225cc8738e0_Star_icon.svg" alt="" className="star-icon"/>
                      <img loading="lazy" src="/vitalis/assets/670ce4297b2d0225cc8738e0_Star_icon.svg" alt="" className="star-icon"/>
                    </div>
                    <div className="testimonial-content-wrapper">
                      <div className="testimonial-content">
                        <img loading="lazy" src="/vitalis/assets/670ce52d4e0b67cd2a281edc_Apple_Store.svg" alt="" className="apple-store"/>
                        <h3 className="heading-3">“Vitalis has completely transformed how I track recovery and sleep architecture. The autonomic balance insights are a game-changer for my training!”</h3>
                        <p className="body-text-14">[Read More on the App Store]</p>
                      </div>
                      <div className="testimonial-author">
                        <img loading="lazy" src="/vitalis/assets/670ce64da552590a299f662c_38.png" alt="" className="testimonial-author-image"/>
                        <p className="testimonial-author-name">Breanna Butler</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-slide" style={{ flex: "0 0 100%", minWidth: "100%" }}>
                  <div className="slider-testimonial-card">
                    <div className="star-rating">
                      <img loading="lazy" src="/vitalis/assets/670ce4297b2d0225cc8738e0_Star_icon.svg" alt="" className="star-icon"/>
                      <img loading="lazy" src="/vitalis/assets/670ce4297b2d0225cc8738e0_Star_icon.svg" alt="" className="star-icon"/>
                      <img loading="lazy" src="/vitalis/assets/670ce4297b2d0225cc8738e0_Star_icon.svg" alt="" className="star-icon"/>
                      <img loading="lazy" src="/vitalis/assets/670ce4297b2d0225cc8738e0_Star_icon.svg" alt="" className="star-icon"/>
                      <img loading="lazy" src="/vitalis/assets/670ce4297b2d0225cc8738e0_Star_icon.svg" alt="" className="star-icon"/>
                    </div>
                    <div className="testimonial-content-wrapper">
                      <div className="testimonial-content">
                        <img loading="lazy" src="/vitalis/assets/670ce52d4e0b67cd2a281edc_Apple_Store.svg" alt="" className="apple-store"/>
                        <h3 className="heading-3">“Tracking my biological age and daily HRV trends with Vitalis gives me real clarity on what habits actually extend my vitality.”</h3>
                        <p className="body-text-14">[Read More on the App Store]</p>
                      </div>
                      <div className="testimonial-author">
                        <img loading="lazy" src="/vitalis/assets/670510983fbd35e24d3d5d9b_User_1.png" alt="" className="testimonial-author-image"/>
                        <p className="testimonial-author-name">Dr. Jeff Ross, MD</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-slide" style={{ flex: "0 0 100%", minWidth: "100%" }}>
                  <div className="slider-testimonial-card">
                    <div className="star-rating">
                      <img loading="lazy" src="/vitalis/assets/670ce4297b2d0225cc8738e0_Star_icon.svg" alt="" className="star-icon"/>
                      <img loading="lazy" src="/vitalis/assets/670ce4297b2d0225cc8738e0_Star_icon.svg" alt="" className="star-icon"/>
                      <img loading="lazy" src="/vitalis/assets/670ce4297b2d0225cc8738e0_Star_icon.svg" alt="" className="star-icon"/>
                      <img loading="lazy" src="/vitalis/assets/670ce4297b2d0225cc8738e0_Star_icon.svg" alt="" className="star-icon"/>
                      <img loading="lazy" src="/vitalis/assets/670ce4297b2d0225cc8738e0_Star_icon.svg" alt="" className="star-icon"/>
                    </div>
                    <div className="testimonial-content-wrapper">
                      <div className="testimonial-content">
                        <img loading="lazy" src="/vitalis/assets/670ce52d4e0b67cd2a281edc_Apple_Store.svg" alt="" className="apple-store"/>
                        <h3 className="heading-3">“With Vitalis, keeping tabs on my continuous glucose response and sleep stages has never been easier. Truly essential for longevity.”</h3>
                        <p className="body-text-14">[Read More on the App Store]</p>
                      </div>
                      <div className="testimonial-author">
                        <img loading="lazy" src="/vitalis/assets/67051098c2110c541aef3eed_User_2.png" alt="" className="testimonial-author-image"/>
                        <p className="testimonial-author-name">Lara Devgan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div onClick={() => setActiveSlide(prev => (prev > 0 ? prev - 1 : 6))} className="left-arrow w-slider-arrow-left cursor-pointer">
              <img loading="lazy" src="/vitalis/assets/670ce8210ffec39158b37bb7_chevron-left.svg" alt="" className="chevron-left"/>
            </div>
            <div onClick={() => setActiveSlide(prev => (prev < 6 ? prev + 1 : 0))} className="right-arrow w-slider-arrow-right cursor-pointer">
              <img loading="lazy" src="/vitalis/assets/670ce8224cac1ecf27a80c39_chevron-right.svg" alt="" className="chevron-right"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
