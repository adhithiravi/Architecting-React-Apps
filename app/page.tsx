import Image from "next/image";
import Script from "next/script";
import heroOneImage from "../public/images/hero-1.png";
import heroTwoImage from "../public/images/hero-2.png";
import heroThreeImage from "../public/images/hero-3.png";
import pieOneImage from "../public/images/pie-1.png";
import pieTwoImage from "../public/images/pie-2.png";
import pieThreeImage from "../public/images/pie-3.png";
import Button from "../ui/components/Button/Button";

export default function Home() {
  return (
    <>
      <section className="main-content">
        <div className="carousel">
          <div className="carousel-image">
            <Image
              src={heroOneImage}
              alt="larger header image of blueberry pie"
            />
          </div>
          <div className="carousel-image">
            <Image
              src={heroTwoImage}
              alt="larger header image of blueberry pie"
            />
          </div>
          <div className="carousel-image">
            <Image
              src={heroThreeImage}
              alt="larger header image of blueberry pie"
            />
          </div>
          <button className="carousel-button-1 active-carousel-item"></button>
          <button className="carousel-button-2"></button>
          <button className="carousel-button-3"></button>
        </div>
        <div className="focused-message">
          <div className="logo">
            <p>B</p>
          </div>
          <h2>Pies of the Week</h2>
          <p>Enjoy a weekly selection of our favorite pies</p>
        </div>
      </section>
      <section>
        <div className="pie-grid">
          <div className="pie-item">
            <Image src={pieOneImage} alt="image of Classic Apple Pie" />
            <Button text="+ Add to cart" />

            <div className="pie-info">
              <h4>Classic Apple Pie</h4>
              <p>$12.95</p>
            </div>
          </div>
          <div className="pie-item">
            <Image src={pieTwoImage} alt="image of Pumpkin Pie" />
            <Button text="+ Add to cart" />

            <div className="pie-info">
              <h4>Classic Apple Pie</h4>
              <p>$12.95</p>
            </div>
          </div>
          <div className="pie-item">
            <Image src={pieThreeImage} alt="image of Chocolate Pecan Pie" />
            <Button text="+ Add to cart" />

            <div className="pie-info">
              <h4>Classic Apple Pie</h4>
              <p>$12.95</p>
            </div>
          </div>
        </div>
      </section>
      <Script src="/scripts/carousel.js" strategy="beforeInteractive" />
      <Script src="/scripts/dropdown.js" strategy="beforeInteractive" />
    </>
  );
}
