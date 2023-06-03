import { Container, Row, Col } from "react-bootstrap";
import aboutme from "./images/about-me.jpg";
import "../scss/about.scss";
import mati from "./images/mati.png";
import krystian from "./images/krystian.jpg";
import wiktor from "./images/wiktor.jpg";
function About() {
  return (
    <>
      <Container style={{minHeight:"110vh"}}>
        <Row className="justify-content-center app-about-row">
          <Col xs={12} sm={12} md={5} lg={5}>
            <img className="app-image-about" src={aboutme} />
          </Col>
          <Col xs={12} sm={12} md={9} lg={7} className="app-people">
            <div className="app-desc">
              <img src={mati} className="app-desc-avatar" alt="" />

              <div className="app-desc-text">
                <h4 className="app-desc-title">Mateusz Wasiak</h4>
                <p className="app-desc-paragraph">
                  Współpracując ze mną, będziesz miał pewność, że Twoja firma
                  wykorzysta możliwości sztucznej inteligencji w pełni. Oferuję
                  kompleksowe doradztwo, w tym analizę potrzeb Twojej firmy,
                  dobór odpowiednich narzędzi AI oraz ich wdrożenie. Moje
                  podejście jest indywidualne, a cele stawiane przed nami są
                  zawsze dostosowane do potrzeb i możliwości Twojej firmy.
                </p>
              </div>
            </div>
            <div className="app-desc">
              <img src={krystian} className="app-desc-avatar" alt="" />
              <div className="app-desc-text">
                <h4 className="app-desc-title">Krystian Juszczyk</h4>
                <p className="app-desc-paragraph">
                  Jeśli szukasz eksperta w dziedzinie sztucznej inteligencji,
                  który pomoże Ci wykorzystać jej potencjał w Twojej firmie, to
                  polecam Ci moje usługi. Moje bogate doświadczenie i praktyczna
                  wiedza w zakresie sztucznej inteligencji pozwolą Ci skutecznie
                  wykorzystać tę technologię w Twoim biznesie.
                </p>
              </div>
            </div>
            <div className="app-desc">
              <img src={wiktor} className="app-desc-avatar" alt="" />
              <div className="app-desc-text">
                <h4 className="app-desc-title">Wiktor Nowicki</h4>
                <p className="app-desc-paragraph">
                  Współpraca ze mną to gwarancja profesjonalizmu, skuteczności i
                  innowacyjnego podejścia do wykorzystania sztucznej
                  inteligencji w biznesie.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
