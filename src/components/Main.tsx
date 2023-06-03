import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
import "../scss/main.scss";
function Main() {
  return (
    <>
      <Container style={{minHeight:'125vh'}}>
        <Row className="justify-content-center app-mainpage">
          <Col xs={12} sm={11} md={9} lg={7}>
            <h1>Szkoła letnia</h1>
            <h3>Nie przegap okazji!</h3>

            <p>
              Czy kiedykolwiek zastanawialiście się, jak działa sztuczna
              inteligencja? Czy chcielibyście nauczyć się, jak zbudować własne
              modele uczenia maszynowego i zastosować je w praktyce?
            </p>

            <p>
              Jeśli tak, to mamy dla Was idealną propozycję - nasz kurs nauki
              sztucznej inteligencji! Podczas kursu nauczysz się podstaw uczenia
              maszynowego, w tym technik przetwarzania danych, modelowania i
              ewaluacji modeli, a także zaawansowanych zagadnień, takich jak
              sieci neuronowe i głębokie uczenie.
            </p>

            <p>
              Nie potrzebujesz żadnego wcześniejszego doświadczenia w
              programowaniu ani w dziedzinie sztucznej inteligencji - kurs jest
              zaprojektowany tak, aby był przystępny dla początkujących. Nasze
              interaktywne lekcje pozwolą Ci na zdobycie praktycznych
              umiejętności, które będziesz mógł od razu zastosować w swoich
              projektach.
            </p>

            <p>
              Dołącz do naszej społeczności i zdobądź wiedzę, która pozwoli Ci
              na tworzenie inteligentnych rozwiązań w różnych dziedzinach - od
              medycyny i przemysłu po rozrywkę i e-commerce. Nie czekaj, zapisz
              się już dziś i zacznij swoją przygodę z sztuczną inteligencją!
            </p>
            <Link to='/enrol'>
            <button className="app-mainpage-button">
                
                Zapisz się do kursu
                
            </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Main;
