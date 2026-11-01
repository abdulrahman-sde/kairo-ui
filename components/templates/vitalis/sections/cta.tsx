"use client";

import React from "react";

export function Cta() {
  const [emailSubmitted, setEmailSubmitted] = React.useState(false);

  return (
    <section className="cta">
      <div className="w-layout-blockcontainer site-container w-container">
        <div className="content-wrapper cta">
          <div className="cta-content">
            <div className="title max-width">
              <h3 className="heading-3">Receive weekly clinical longevity insights & protocols</h3>
              <p className="body-text-16">Join 150,000+ clinicians and longevity researchers advancing preventative health.</p>
            </div>
            <div className="newsletter-form">
              <div className="subscribe-form-wrapper w-form">
                <form onSubmit={(e) => { e.preventDefault(); setEmailSubmitted(true); }} id="email-form" name="email-form" style={{ display: emailSubmitted ? "none" : "flex" }} data-name="Email Form" method="get" className="subscribe-form" data-wf-page-id="6704c5e36b41250d70362ffc" data-wf-element-id="56d361c2-7db1-3316-f453-64df1852681d">
                  <img src="/vitalis/assets/670cf60cb2fd8db75ab321c7_mail.svg" loading="lazy" alt="" className="email-icon"/>
                  <input className="email-input w-input" maxLength={256} name="email-2" data-name="Email 2" placeholder="Enter your email" type="email" id="email-2" required/>
                  <input type="submit" data-wait="Please wait..." className="submit-button w-button" value="Subscribe"/>
                </form>
                <div className="w-form-done" style={{ display: emailSubmitted ? "block" : "none" }}>
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
              <p className="body-text-14">We respect your medical privacy. Encrypted and zero-spam guaranteed.</p>
            </div>
          </div>
          <div className="cta-image-wrapper">
            <img src="/vitalis/assets/670cf6b06de0b9f5f3f65a25_CTA_Image.png" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.984375px, 818px" srcSet="/vitalis/assets/670cf6b06de0b9f5f3f65a25_CTA_Image-p-500.png 500w, /vitalis/assets/670cf6b06de0b9f5f3f65a25_CTA_Image.png 818w" alt="" className="cta-image"/>
          </div>
          <img src="/vitalis/assets/670cf7baeffa8d284216953e_CTA_Shape.svg" loading="lazy" alt="" className="cta-shape"/>
        </div>
      </div>
    </section>
  );
}
