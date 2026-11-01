"use client";

import React from "react";

export function FeatureTabs() {
  const [activeTab, setActiveTab] = React.useState("Tab 1");

  return (
    <section className="feature-tab section-padding">
      <div className="blur-shape-left-2">
      </div>
      <div className="blur-shape-right-2">
      </div>
      <div className="w-layout-blockcontainer site-container w-container">
        <div className="content-wrapper feature-tab">
          <div className="tab-feature-title">
            <div className="headline">
              <p className="label">LONGEVITY SUITE</p>
              <h2 className="heading-2">Designed to Empower Your Lifespan</h2>
            </div>
            <p className="body-text-16 width-530px">Unifying wearable biometrics, circadian sleep analysis, and metabolic nutrition into actionable daily guidance.</p>
          </div>
          <div data-current="Tab 4" data-easing="ease" data-duration-in="300" data-duration-out="100" className="tabs w-tabs">
            <div className="feature-tab-menu w-tab-menu">
              <a onClick={() => setActiveTab("Tab 1")} data-w-tab="Tab 1" className={`feature-tab-item w-inline-block w-tab-link cursor-pointer ${activeTab === "Tab 1" ? "w--current" : ""}`}>
                <img loading="lazy" src="/vitalis/assets/67062a3f366fbbc084f436a2_Tab_Icon_1.svg" alt="" className="tab-icon"/>
                <div className="tab-heading">
                  <h6 className="tab-title">Circadian Alignment</h6>
                  <p className="body-text-16">Vitalis maps your optimal sleep and light exposure windows to optimize melatonin and cortisol rhythms.</p>
                </div>
              </a>
              <a onClick={() => setActiveTab("Tab 2")} data-w-tab="Tab 2" className={`feature-tab-item w-inline-block w-tab-link cursor-pointer ${activeTab === "Tab 2" ? "w--current" : ""}`}>
                <img loading="lazy" src="/vitalis/assets/67062a3ff85690c9d1512d7c_Tab_Icon_2.svg" alt="" className="tab-icon"/>
                <div className="tab-heading">
                  <h6 className="tab-title">Nutritional Biomarkers</h6>
                  <p className="body-text-16">Track glycemic response and micronutrient density to eliminate inflammation and energy crashes.</p>
                </div>
              </a>
              <a onClick={() => setActiveTab("Tab 3")} data-w-tab="Tab 3" className={`feature-tab-item w-inline-block w-tab-link cursor-pointer ${activeTab === "Tab 3" ? "w--current" : ""}`}>
                <img loading="lazy" src="/vitalis/assets/67062a3f4a94d043eeec1b6e_Tab_Icon_3.svg" alt="" className="tab-icon"/>
                <div className="tab-heading">
                  <h6 className="tab-title">VO2 Max & Cardio Longevity</h6>
                  <p className="body-text-16">Zone 2 conditioning models forecast cardiovascular health span and aerobic capacity over decades.</p>
                </div>
              </a>
              <a onClick={() => setActiveTab("Tab 4")} data-w-tab="Tab 4" className={`feature-tab-item w-inline-block w-tab-link cursor-pointer ${activeTab === "Tab 4" ? "w--current" : ""}`}>
                <img loading="lazy" src="/vitalis/assets/67062a3fa7c31de9a0f3b115_Tab_Icon_4.svg" alt="" className="tab-icon"/>
                <div className="tab-heading">
                  <h6 className="tab-title">Physician & Family Sync</h6>
                  <p className="body-text-16">Securely share encrypted clinical reports and biomarker trends with your personal physician or longevity clinic.</p>
                </div>
              </a>
            </div>
            <div className="feature-tabs-content w-tab-content">
              <div data-w-tab="Tab 1" className={`tab-pane-tab-1 w-tab-pane ${activeTab === "Tab 1" ? "w--tab-active" : ""}`} style={{ display: activeTab === "Tab 1" ? "block" : "none" }}>
                <img src="/vitalis/assets/6706303b92f1cb7035795856_Image_1.png" loading="lazy" sizes="100vw" srcSet="/vitalis/assets/6706303b92f1cb7035795856_Image_1-p-500.png 500w, /vitalis/assets/6706303b92f1cb7035795856_Image_1-p-800.png 800w, /vitalis/assets/6706303b92f1cb7035795856_Image_1.png 1266w" alt="" className="feature-tab-image"/>
              </div>
              <div data-w-tab="Tab 2" className={`tab-pane-tab-2 w-tab-pane ${activeTab === "Tab 2" ? "w--tab-active" : ""}`} style={{ display: activeTab === "Tab 2" ? "block" : "none" }}>
                <img src="/vitalis/assets/6706303c171e78a5581b7db2_Image_2.png" loading="lazy" sizes="100vw" srcSet="/vitalis/assets/6706303c171e78a5581b7db2_Image_2-p-500.png 500w, /vitalis/assets/6706303c171e78a5581b7db2_Image_2-p-800.png 800w, /vitalis/assets/6706303c171e78a5581b7db2_Image_2.png 1266w" alt="" className="feature-tab-image"/>
              </div>
              <div data-w-tab="Tab 3" className={`tab-pane-tab-3 w-tab-pane ${activeTab === "Tab 3" ? "w--tab-active" : ""}`} style={{ display: activeTab === "Tab 3" ? "block" : "none" }}>
                <img src="/vitalis/assets/6706303c4a94d043eef1705c_Image_3.png" loading="lazy" sizes="100vw" srcSet="/vitalis/assets/6706303c4a94d043eef1705c_Image_3-p-500.png 500w, /vitalis/assets/6706303c4a94d043eef1705c_Image_3-p-800.png 800w, /vitalis/assets/6706303c4a94d043eef1705c_Image_3.png 1266w" alt="" className="feature-tab-image"/>
              </div>
              <div data-w-tab="Tab 4" className={`tab-pane-tab-4 w-tab-pane ${activeTab === "Tab 4" ? "w--tab-active" : ""}`} style={{ display: activeTab === "Tab 4" ? "block" : "none" }}>
                <img src="/vitalis/assets/6706303bdcfb761f7d54fc6f_Image_4.png" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.984375px, 939.984375px" srcSet="/vitalis/assets/6706303bdcfb761f7d54fc6f_Image_4-p-500.png 500w, /vitalis/assets/6706303bdcfb761f7d54fc6f_Image_4-p-800.png 800w, /vitalis/assets/6706303bdcfb761f7d54fc6f_Image_4.png 1266w" alt="" className="feature-tab-image"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
