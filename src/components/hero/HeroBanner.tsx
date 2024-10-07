import { Button } from "@uiComponents";
import heroBanner from "../../assets/hero_banner.jpg";

const HeroBanner = () => {
  return (
    <div style={{ background: `url(${heroBanner}` }} className="hero-wrapper">
      <div className="hero-content">
        <p>Collaborate With Us</p>
        <h2>We Build Your Dream With Passion.</h2>
        <p>
          We conduct all business with the highest standards of honesty and
          fairness, we can be trusted for constution
        </p>
        <div className="group">
          <Button display="inline-block" as="button">
            Explore Recent Work
          </Button>
          {"  "}
          <Button display="inline-block" as="button">
            Get a Quote Today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
