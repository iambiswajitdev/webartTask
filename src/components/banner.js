import { Carousel } from "react-bootstrap";

const Banner = ({ bannerImg }) => {
  return (
    <>
      <div className="banner">
        <Carousel>
          {bannerImg.map((item, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={item.img} alt="First slide" />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Banner;
