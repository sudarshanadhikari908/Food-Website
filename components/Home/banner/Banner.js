import React from "react";
import useHomeStore from "../../../zustandStore/homeStore";
import Carousel from "react-bootstrap/Carousel";

function Banner() {
  const data = useHomeStore((state) => state.homeData);
  console.log(data.data[0].details[0].images);
  return (
    <>
      {data?.data[0].details.map((detail) => {
        return (
          <div key={detail.title}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={detail.images}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        );
      })}
    </>
  );
}

export default Banner;
