import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <section className="footer section-padding remove-bottom-padding">
      <div className="w-layout-blockcontainer site-container w-container">
        <div data-w-id="6c26764e-d32e-87d4-e857-f362208b64ca" className="footer-content-wrapper">
          <div className="footer-top">
            <div className="footer-widget-1">
              <Link href="/" aria-label="Vitalis home" className="logo w-inline-block">
                <span className="brand-lockup">
                  <img loading="lazy" src="/vitalis/assets/vitalis-mark.svg" alt="" width={18} height={30} className="logo-mark"/>
                  <span className="brand-name">Vitalis</span>
                </span>
              </Link>
              <p className="body-text-16">Empowering you to master your biomarkers, optimize sleep architecture, and extend your health span.</p>
            </div>
            <div className="footer-items-wrapper">
              <div className="footer-widget-2">
                <p className="body-text-16 medium">Platform</p>
                <div className="footer-item-wrapper">
                  <a href="#features" className="footer-item">Biomarkers</a>
                  <a href="#key-benefits" className="footer-item">Longevity</a>
                  <a href="#pricing" className="footer-item">Plans</a>
                </div>
              </div>
              <div className="footer-widget-2">
                <p className="body-text-16 medium">Science</p>
                <div className="footer-item-wrapper">
                  <a href="#" className="footer-item">Clinical Studies</a>
                  <a href="#" className="footer-item">Whitepapers</a>
                  <a href="#" className="footer-item">Physician Portal</a>
                </div>
              </div>
              <div className="footer-widget-2">
                <p className="body-text-16 medium">Legal & Trust</p>
                <div className="footer-item-wrapper">
                  <a href="#" className="footer-item">HIPAA Compliance</a>
                  <a href="#" className="footer-item">Privacy Policy</a>
                  <a href="#" className="footer-item">Terms of Service</a>
                </div>
              </div>
              <div className="download-button-wrapper">
                <a href="https://www.apple.com/app-store/" className="download-button w-inline-block">
                  <img loading="lazy" src="/vitalis/assets/6704c5e36b41250d7036305e_App_Store.svg" alt="" className="download-button"/>
                </a>
                <a href="https://play.google.com/store/apps?hl=en_US" className="download-button w-inline-block">
                  <img loading="lazy" src="/vitalis/assets/6704c5e36b41250d7036305f_Play_Store.svg" alt="" className="download-button"/>
                </a>
              </div>
            </div>
          </div>
          <p className="body-text-16 medium">© Copyright 2026, All Rights Reserved by Vitalis Health Inc.
        </p>
      </div>
    </div>
    </section>
  );
}
