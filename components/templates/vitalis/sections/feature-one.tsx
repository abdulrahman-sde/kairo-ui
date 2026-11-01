import React from "react";

export function FeatureOne() {
  return (
    <section className="feature-1">
      <div className="w-layout-blockcontainer site-container w-container">
        <div className="content-wrapper feature-1">
          <div className="feature-1-title">
            <div className="headline">
              <p className="label">VITALIS PLATFORM</p>
              <h2 className="heading-2">Master Your Health Span Architecture</h2>
            </div>
            <p className="body-text-16 width-530px">Comprehensive cellular, metabolic, and autonomic telemetry synthesized into simple daily longevity protocols.</p>
          </div>
          <div className="feature-1-content">
            <div className="feature-1-left-content">
              <div className="title width-450px">
                <p className="label">CONTINUOUS BIOMARKERS</p>
                <h4 className="heading-4">Circadian & HRV Dynamics</h4>
                <p className="body-text-16">Monitor autonomic nervous system balance and recovery trajectories with continuous resting heart rate and HRV telemetry.</p>
              </div>
              <img src="/vitalis/assets/670616e95f69a857cc869752_Feature_Image_2__2_.png" loading="lazy" alt="" className="feature-image"/>
            </div>
            <div className="feature-1-right-content">
              <div className="title width-450px">
                <p className="label">CELLULAR VITALITY</p>
                <h4 className="heading-4">Biological Age Diagnostics</h4>
                <p className="body-text-16">Predictive epigenetic modeling estimates physiological organ age based on combined lifestyle and wearable telemetry.</p>
              </div>
              <img src="/vitalis/assets/670616e948bab558b57dc65e_Feature_Image_1__2_.png" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.984375px, 939.984375px" srcSet="/vitalis/assets/670616e948bab558b57dc65e_Feature_Image_1__2_-p-500.png 500w, /vitalis/assets/670616e948bab558b57dc65e_Feature_Image_1__2_.png 1000w" alt="" className="feature-image"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
