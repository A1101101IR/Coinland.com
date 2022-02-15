const Pricing = () => {
  return (
    <section className="Pricing">
      <div className="pricing-box">
        <div className="pricing-box-one">
          <h1>Pricing</h1>
          <p>
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>
        </div>
        <div className="pricing-box-two">
          <p>30-DAY FREE TRIAL</p>
          <div>
            <span className="price">$4</span>
            <span className="month">/month per user</span>
          </div>
          {/* <p>Most calendare are desingned for teams.</p> */}
          <button>Get started</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
