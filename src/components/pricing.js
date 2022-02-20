const Pricing = () => {
  return (
    <section className="Pricing">
      <div className="pricing-box">
        <div className="pricing-box-one">
          <h1>Pricing</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            similique nam inventore nulla quibusdam doloremque illum ducimus
            facere, praesentium cum quis rem repellendus fuga esse ad dolore in
            atque nostrum!
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
