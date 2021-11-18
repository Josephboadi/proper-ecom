import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';
import { Link } from 'react-router-dom';
import heroBcg from '../assets/hero-bcg.jpeg';
import heroBcg2 from '../assets/hero-bcg-2.jpeg';
import heroBcg3 from '../assets/hero.jpg';
import heroBcg4 from '../assets/hero1.jpg';
import heroBcg5 from '../assets/hero2.png';

const Hero = () => {
  return (
    <Carousel>
      <Wrapper className="section-center">
        <article className="content">
          <h1>
            Great deals <br />
            Affordable prices
          </h1>
          <p>Save a lot with our amazing offers and promo's.</p>
          <Link to="/products" className="btn hero-btn">
            shop now
          </Link>
        </article>
        <article className="img-container">
          <img
            src={heroBcg3}
            alt="nice table"
            className="main-img"
            style={{
              borderBottomRightRadius: '30%',
              borderTopLeftRadius: '20%',
            }}
          />
          {/* <img src={heroBcg4} alt="person working" className="accent-img" /> */}
        </article>
      </Wrapper>
      <Wrapper className="section-center">
        <article className="content">
          <h1>
            Shop within your <br />
            comfort zone
          </h1>
          <p>
            Buy all your needs from all over the world and get them delivered at
            your door-step with just simple clicks.
          </p>
          <Link to="/products" className="btn hero-btn">
            shop now
          </Link>
        </article>
        <article className="img-container">
          <img
            src={heroBcg5}
            alt="nice table"
            className="main-img"
            style={{
              borderBottomRightRadius: '30%',
              borderTopLeftRadius: '20%',
            }}
          />
          {/* <img src={heroBcg2} alt="person working" className="accent-img" /> */}
        </article>
      </Wrapper>
    </Carousel>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
