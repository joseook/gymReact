import React from 'react';
import '../../style/pricing.css';

const navegations = [
  {
    iconSpan: <i class="ri-checkbox-blank-circle-fill"></i>,
    display: 'Unlimited acess to the gym',
  },

  {
    iconSpan: <i class="ri-checkbox-blank-circle-fill"></i>,
    display: 'Customer support',
  },

  {
    iconSpan: <i class="ri-checkbox-blank-circle-fill"></i>,
    display: 'Personal trainer',
  },

  {
    iconSpan: <i class="ri-checkbox-blank-circle-fill"></i>,
    display: 'Standard options',
  },

  {
    iconSpan: <i class="ri-checkbox-blank-circle-fill"></i>,
    display: '3 classes per week',
  },
];

const pricing = () => {
  return (
    <main id="mainContent">
      <section className="pricing" id="pricing">
        <div className="container">
          <div className="pricing__wrapper">
            <h1 className="title">
              Gym <span>Pricing</span> Plan
            </h1>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              doloremque amet fuga! Dolor delectus veniam cum atque ducimus
              tenetur laudantium sapiente laborum enim excepturi. Quod
              voluptates tempore nobis accusantium ut.
            </p>
          </div>

          <div className="pricing__content">
            <div
              className="pricing_item"
              data-aos="fade-up"
              data-aos-duration="1500">
              <div className="pricing_card">
                <h2 className="title">Regular Member</h2>
                <h2 className="pricing title">
                  $45.99 <span>/month</span>
                </h2>
              </div>

              <div className="pricing__services">
                <ul className="menu__services">
                  {navegations.map((item) => (
                    <li className="li__nav">
                      <span>{item.iconSpan}</span>
                      {item.display}
                    </li>
                  ))}
                </ul>

                <div className="btn-box">
                  <button className="menuPay">Pay Now</button>
                </div>
              </div>
            </div>

            <div
              className="pricing_item pricing_item02"
              data-aos="fade-up"
              data-aos-duration="1500">
              <div className="pricing_card">
                <h2 className="title">Premium Member</h2>
                <h2 className="pricing title">
                  $55.99 <span>/month</span>
                </h2>
              </div>

              <div className="pricing__services">
                <ul className="menu__services">
                  {navegations.map((item) => (
                    <li className="li__nav">
                      <span>{item.iconSpan}</span>
                      {item.display}
                    </li>
                  ))}
                </ul>

                <div className="btn-box">
                  <button className="menuPay">Pay Now</button>
                </div>
              </div>
            </div>

            <div
              className="pricing_item pricing_item03"
              data-aos="fade-up"
              data-aos-duration="1500">
              <div className="pricing_card">
                <h2 className="title">Standard Member</h2>
                <h2 className="pricing title">
                  $35.99 <span>/month</span>
                </h2>
              </div>

              <div className="pricing__services">
                <ul className="menu__services">
                  {navegations.map((item) => (
                    <li className="li__nav">
                      <span>{item.iconSpan}</span>
                      {item.display}
                    </li>
                  ))}
                </ul>

                <div className="btn-box">
                  <button className="menuPay">Pay Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default pricing;
