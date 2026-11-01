"use client";

import React from "react";

export function Pricing() {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "yearly">("monthly");

  return (
    <section className="pricing-plan">
      <div className="w-layout-blockcontainer site-container w-container">
        <div className="content-wrapper pricing-plan">
          <div className="pricing-plan-title">
            <div className="headline">
              <p className="label">MEMBERSHIP TIERS</p>
              <h2 className="heading-2">Invest in Your Health Span</h2>
            </div>
            <p className="body-text-16 width-530px">Flexible plans designed for individuals, longevity enthusiasts, and performance athletes.</p>
          </div>
          <div className="pricing-switcher-1">
            <div className="pricing-toggle-1 cursor-pointer">
              <div onClick={() => setBillingCycle("monthly")} data-active={billingCycle === "monthly"} className="monthly">
                <p className="price-by-text">Monthly</p>
              </div>
              <div onClick={() => setBillingCycle("yearly")} data-active={billingCycle === "yearly"} className="yearly">
                <p className="price-by-text year">Yearly<br/>
              </p>
            </div>
          </div>
          <div hidden={billingCycle !== "monthly"} className="pricing-box-wrapper month">
            <div className="pricing-box">
              <div className="pricing-title">
                <h4 className="heading-4">Essential Health</h4>
                <p className="pricing-subtitle">Continuous biomarker & recovery tracking.</p>
                <h3 className="heading-3">$ 19 USD <span className="body-text-16">per  month</span>
              </h3>
            </div>
            <a data-w-id="df12e67a-1ff7-629b-9229-95f3476a0de6" href="#pricing" className="button w-inline-block">
              <div className="button-area">
                <p className="button-text">Get Vitalis App</p>
              <div className="button-icon-wrapper">
                <img src="/vitalis/assets/6704dc194e4c7523ed29dfdd_Right_Icon.svg" loading="lazy" alt="" className="button-right-icon"/>
                <img src="/vitalis/assets/6704dc194e4c7523ed29dfdd_Right_Icon.svg" loading="lazy" alt="" className="button-right-icon-hover"/>
              </div>
            </div>
          </a>
          <div className="pricing-feature-list">
            <div className="single-feature">
              <img src="/vitalis/assets/670cbb7f60395438472a7bcf__Checkbox_base.svg" loading="lazy" alt="" className="checkbox-base"/>
              <p className="body-text-16">Real-time HRV & resting heart rate</p>
            </div>
            <div className="single-feature">
              <img src="/vitalis/assets/670cbb7f60395438472a7bcf__Checkbox_base.svg" loading="lazy" alt="" className="checkbox-base"/>
              <p className="body-text-16">Circadian sleep stage architecture</p>
            </div>
            <div className="single-feature">
              <img src="/vitalis/assets/670cbb7f60395438472a7bcf__Checkbox_base.svg" loading="lazy" alt="" className="checkbox-base"/>
              <p className="body-text-16">Apple HealthKit & wearable device sync</p>
            </div>
            <div className="single-feature">
              <img src="/vitalis/assets/670cbb7f60395438472a7bcf__Checkbox_base.svg" loading="lazy" alt="" className="checkbox-base"/>
              <p className="body-text-16">Weekly recovery trend analysis</p>
            </div>
            <div className="single-feature">
              <img src="/vitalis/assets/670cbb7f60395438472a7bcf__Checkbox_base.svg" loading="lazy" alt="" className="checkbox-base"/>
              <p className="body-text-16">Automated sleep disturbance alerts</p>
            </div>
          </div>
        </div>
        <div className="pricing-box">
          <div className="pricing-title">
            <h4 className="heading-4">Longevity Pro</h4>
            <p className="pricing-subtitle">Deep diagnostics & biological age prediction.</p>
            <h3 className="heading-3">$ 39 USD <span className="body-text-16">per  month</span>
          </h3>
        </div>
        <a data-w-id="df12e67a-1ff7-629b-9229-95f3476a0de6" href="#pricing" className="button w-inline-block">
          <div className="button-area">
            <p className="button-text">Get Vitalis App</p>
          <div className="button-icon-wrapper">
            <img src="/vitalis/assets/6704dc194e4c7523ed29dfdd_Right_Icon.svg" loading="lazy" alt="" className="button-right-icon"/>
            <img src="/vitalis/assets/6704dc194e4c7523ed29dfdd_Right_Icon.svg" loading="lazy" alt="" className="button-right-icon-hover"/>
          </div>
        </div>
      </a>
      <div className="pricing-feature-list">
        <div className="single-feature">
          <img src="/vitalis/assets/670cbb7f60395438472a7bcf__Checkbox_base.svg" loading="lazy" alt="" className="checkbox-base"/>
          <p className="body-text-16">All Essential Health features</p>
        </div>
        <div className="single-feature">
          <img src="/vitalis/assets/670cbb7f60395438472a7bcf__Checkbox_base.svg" loading="lazy" alt="" className="checkbox-base"/>
          <p className="body-text-16">Biological & Cardiovascular Age</p>
        </div>
        <div className="single-feature">
          <img src="/vitalis/assets/670cbb7f60395438472a7bcf__Checkbox_base.svg" loading="lazy" alt="" className="checkbox-base"/>
          <p className="body-text-16">Continuous Glucose Monitor (CGM) analytics</p>
        </div>
        <div className="single-feature">
          <img src="/vitalis/assets/670cbb7f60395438472a7bcf__Checkbox_base.svg" loading="lazy" alt="" className="checkbox-base"/>
          <p className="body-text-16">Personalized daily lifestyle protocols</p>
        </div>
        <div className="single-feature">
          <img src="/vitalis/assets/670cbb7f60395438472a7bcf__Checkbox_base.svg" loading="lazy" alt="" className="checkbox-base"/>
          <p className="body-text-16">Physician-ready encrypted PDF export</p>
        </div>
      </div>
    </div>
    </div>
    <div hidden={billingCycle !== "yearly"} className="pricing-box-wrapper year">
      <div className="pricing-box">
        <div className="pricing-title">
          <h4 className="heading-4">Essential Health</h4>
          <p className="pricing-subtitle">Continuous biomarker & recovery tracking.</p>
          <h3 className="heading-3">$ 14 USD <span className="body-text-16">per  month</span>
        </h3>
      </div>
      <a data-w-id="df12e67a-1ff7-629b-9229-95f3476a0de6" href="#pricing" className="button w-inline-block">
        <div className="button-area">
          <p className="button-text">Get Vitalis App</p>
        <div className="button-icon-wrapper">
          <img src="/vitalis/assets/6704dc194e4c7523ed29dfdd_Right_Icon.svg" loading="lazy" alt="" className="button-right-icon"/>
          <img src="/vitalis/assets/6704dc194e4c7523ed29dfdd_Right_Icon.svg" loading="lazy" alt="" className="button-right-icon-hover"/>
        </div>
      </div>
    </a>
    <div className="pricing-feature-list">
      <div className="single-feature">
        <img src="/vitalis/assets/670cbb7f60395438472a7bcf__Checkbox_base.svg" loading="lazy" alt="" className="checkbox-base"/>
        <p className="body-text-16">Real-time HRV & resting heart rate</p>
      </div>
      <div className="single-feature">
        <img src="/vitalis/assets/670cbb7f60395438472a7bcf__Checkbox_base.svg" loading="lazy" alt="" className="checkbox-base"/>
        <p className="body-text-16">Circadian sleep stage architecture</p>
      </div>
      <div className="single-feature">
        <img src="/vitalis/assets/670cbb7f60395438472a7bcf__Checkbox_base.svg" loading="lazy" alt="" className="checkbox-base"/>
        <p className="body-text-16">Apple HealthKit & wearable device sync</p>
      </div>
      <div className="single-feature">
        <img src="/vitalis/assets/670cbb7f60395438472a7bcf__Checkbox_base.svg" loading="lazy" alt="" className="checkbox-base"/>
        <p className="body-text-16">Weekly recovery trend analysis</p>
      </div>
      <div className="single-feature">
        <img src="/vitalis/assets/670cbb7f60395438472a7bcf__Checkbox_base.svg" loading="lazy" alt="" className="checkbox-base"/>
        <p className="body-text-16">Automated sleep disturbance alerts</p>
      </div>
    </div>
    </div>
    <div className="pricing-box">
      <div className="pricing-title">
        <h4 className="heading-4">Longevity Pro</h4>
        <p className="pricing-subtitle">Deep diagnostics & biological age prediction.</p>
        <h3 className="heading-3">$ 29 USD <span className="body-text-16">per  month</span>
      </h3>
    </div>
    <a data-w-id="df12e67a-1ff7-629b-9229-95f3476a0de6" href="#pricing" className="button w-inline-block">
      <div className="button-area">
        <p className="button-text">Get Vitalis App</p>
      <div className="button-icon-wrapper">
        <img src="/vitalis/assets/6704dc194e4c7523ed29dfdd_Right_Icon.svg" loading="lazy" alt="" className="button-right-icon"/>
        <img src="/vitalis/assets/6704dc194e4c7523ed29dfdd_Right_Icon.svg" loading="lazy" alt="" className="button-right-icon-hover"/>
      </div>
    </div>
    </a>
    <div className="pricing-feature-list">
      <div className="single-feature">
        <img src="/vitalis/assets/670cbb7f60395438472a7bcf__Checkbox_base.svg" loading="lazy" alt="" className="checkbox-base"/>
        <p className="body-text-16">All Essential Health features</p>
      </div>
      <div className="single-feature">
        <img src="/vitalis/assets/670cbb7f60395438472a7bcf__Checkbox_base.svg" loading="lazy" alt="" className="checkbox-base"/>
        <p className="body-text-16">Biological & Cardiovascular Age</p>
      </div>
      <div className="single-feature">
        <img src="/vitalis/assets/670cbb7f60395438472a7bcf__Checkbox_base.svg" loading="lazy" alt="" className="checkbox-base"/>
        <p className="body-text-16">Continuous Glucose Monitor (CGM) analytics</p>
      </div>
      <div className="single-feature">
        <img src="/vitalis/assets/670cbb7f60395438472a7bcf__Checkbox_base.svg" loading="lazy" alt="" className="checkbox-base"/>
        <p className="body-text-16">Personalized daily lifestyle protocols</p>
      </div>
      <div className="single-feature">
        <img src="/vitalis/assets/670cbb7f60395438472a7bcf__Checkbox_base.svg" loading="lazy" alt="" className="checkbox-base"/>
        <p className="body-text-16">Physician-ready encrypted PDF export</p>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
