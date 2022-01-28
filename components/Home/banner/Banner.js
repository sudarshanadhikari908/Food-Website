import React from "react";
import useHomeStore from "@/zustandStore/homeStore";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

function Banner() {
  const data = useHomeStore((state) => state.homeData);

  return (
    <>
      {data?.data[0].details.map((detail) => {
        return (
          <div key={detail.title}>
            <Carousel>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={detail.images}
                  alt="First slide"
                  height="650"
                  width="1600"
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
