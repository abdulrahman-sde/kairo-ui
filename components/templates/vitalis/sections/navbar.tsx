"use client";

import React from "react";
import Link from "next/link";

export function Navbar() {
  const [navDropdownOpen, setNavDropdownOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <section className="navigation position">
      <div className="header">
        <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
          <div className="nav-container position-relative">
            <div className="navbar-wrapper">
              <Link href="/" aria-label="Vitalis home" className="navbar-brand w-nav-brand w--current">
                <span className="brand-lockup">
                  <img loading="lazy" src="/vitalis/assets/vitalis-mark.svg" alt="" width={18} height={30} className="logo-mark"/>
                  <span className="brand-name">Vitalis</span>
                </span>
              </Link>
              <nav role="navigation" className={`nav-menu-wrapper w-nav-menu ${mobileMenuOpen ? "w--open" : ""}`} style={mobileMenuOpen ? { display: "block" } : undefined}>
                <ul role="list" className="nav-menu w-list-unstyled">
                  <li>
                    <a href="#features" className="nav-item">Biometrics</a>
                  </li>
                  <li>
                    <a href="#key-benefits" className="nav-item">Longevity</a>
                  </li>
                  <li>
                    <a href="#pricing" className="nav-item">Plans</a>
                  </li>
                  <li className="mobile-margin-top-10">
                    <a data-w-id="df12e67a-1ff7-629b-9229-95f3476a0de6" href="#pricing" className="button w-inline-block">
                      <div className="button-area">
                        <p className="button-text">Get Vitalis App</p>
                      <div className="button-icon-wrapper">
                        <img src="/vitalis/assets/6704dc194e4c7523ed29dfdd_Right_Icon.svg" loading="lazy" alt="" className="button-right-icon"/>
                        <img src="/vitalis/assets/6704dc194e4c7523ed29dfdd_Right_Icon.svg" loading="lazy" alt="" className="button-right-icon-hover"/>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="navbar-button">
              <a data-w-id="df12e67a-1ff7-629b-9229-95f3476a0de6" href="#pricing" className="button w-inline-block">
                <div className="button-area">
                  <p className="button-text">Get Vitalis App</p>
                <div className="button-icon-wrapper">
                  <img src="/vitalis/assets/6704dc194e4c7523ed29dfdd_Right_Icon.svg" loading="lazy" alt="" className="button-right-icon"/>
                  <img src="/vitalis/assets/6704dc194e4c7523ed29dfdd_Right_Icon.svg" loading="lazy" alt="" className="button-right-icon-hover"/>
                </div>
              </div>
            </a>
          </div>
          <div onClick={() => setMobileMenuOpen(v => !v)} className={`menu-button w-nav-button ${mobileMenuOpen ? "w--open" : ""}`}>
            <div data-w-id="e4ce0e79-e1dd-573a-c72c-1fac6954b19c" className="menu-icon-wrapper">
              <img loading="lazy" src="/vitalis/assets/6704c5e36b41250d7036303e_menu.svg" alt="" className="menu-icon"/>
              <img loading="lazy" src="/vitalis/assets/6704c5e36b41250d7036303f_x.svg" alt="" className="x-icon"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>
  );
}
