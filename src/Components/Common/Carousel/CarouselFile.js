import React, { memo } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";

const CarouselFile = memo((props) => {
  const { data } = props || [];

  // var image1 = `https://i.picsum.photos/id/1076/4835/3223.jpg?hmac=sw_W2oBUV1Pp_QwMbkODYHgWlX-SOkVRatS_UErh64Q`;
  // var image2 = `https://i.picsum.photos/id/133/2742/1828.jpg?hmac=0X5o8bHUICkOIvZHtykCRL50Bjn1N8w1AvkenF7n93E`;
  // var image3 = `https://i.picsum.photos/id/146/5184/3456.jpg?hmac=G_lxX9tIxlu06vWGZhaLVSwVD0Id60UslhgveMXNEpo`;

  return (
    <div class="p-5">
      {Array.isArray(data) && (
        <Carousel>
          {data?.map(({ id, img, label, text }) => (
            <Carousel.Item key={id} interval={5000}>
              <img className="d-block w-100" src={img} alt="Loading..." />
              <Carousel.Caption>
                <h3>{label}</h3>
                <p>{text}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
});

export default CarouselFile;
