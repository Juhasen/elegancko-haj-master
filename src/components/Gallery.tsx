import { Container } from "react-bootstrap";
import i1 from "./images/1.jpg";
import i2 from "./images/2.jpg";
import i3 from "./images/3.jpg";
import i4 from "./images/4.jpg";
import i5 from "./images/5.jpg";
import i6 from "./images/6.jpg";
import ImageWrapper from "./ImageWrapper";
function GalleryApp() {
  return (
    <>
      <Container className="app-container-wrapper">
        <div className="app-container">
          <div className="left">
            <ImageWrapper src={i1} height={330} />
            <ImageWrapper src={i2} height={321} />
            <ImageWrapper src={i4} height={340}/>
          </div>
          <div className="center">
            <ImageWrapper src={i3} height={250} />
            <ImageWrapper src={i4} height={300} />
          </div>
          <div className="right">
            <ImageWrapper src={i5} height={400} />
            <ImageWrapper src={i6} height={300} />
          </div>
        </div>
      </Container>
      
    </>
  );
}

export default GalleryApp;
