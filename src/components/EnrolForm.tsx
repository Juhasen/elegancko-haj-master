import { Container, Row, Button, Form, Col } from "react-bootstrap";
import { FaHeart   } from 'react-icons/fa'
import "../scss/form.scss";
import { useState } from "react";
import emailjs from '@emailjs/browser'
import {
  validEmail,
  validPhoneNumber,
  validExistUserInDb,
} from "../utils/utils";
import axios from "axios";
function FormEnrol() {
  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    gender: "",
    city: "",
    postalCode: "",
    street: "",
    phone: "",
  });
  const [genderError, setGenderError] = useState(null);
  const [userExists, setUserExists] = useState(null);
  const [success,setSuccess] = useState(false) ; 
  const handleChange = (e) => {
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [e.target.id]: e.target.value,
      };
    });
  };
  const handleChangeErrorGender = () => {
    setGenderError(null);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    const isEmail = validEmail(formData.email);
    const isPhone = validPhoneNumber(formData.phone);
    if (formData.gender == "") {
      setGenderError("Wybierz swoją płeć");
    }
    if (isEmail && isPhone) {

      const userAlreadyInUser = await validExistUserInDb(formData.email);
      if (userAlreadyInUser == false) {
        await axios.post("http://localhost:8888/participants", formData);
        setSuccess(true);
        const responseEmail = await emailjs.send("service_rnayfwh","template_s8qx4qk",{
          'to_name':`${formData.firstname} ${formData.lastname}`,
          'reply_to':"wiktor09112@wp.pl",
          'recv_email':formData.email
        },'8SesQtW4qtKPckrQZ');  
      } else {
        setUserExists("Użytkownik już istnieje w bazie");
      }
      
      
    }
  }
  return (
    success ? <Container> 
      <Row className='justify-content-center'>
        <Col xs={9} sm={7} md={6} lg={5} className='app-form-success'>
            <h1 className="text-center mt-4 mb-2">
              Dziękujemy!
            </h1>
            <h4 className="text-center">
              Wyślemy do Ciebie wiadomość e-mail w celu dalszych informacji!
            </h4>
            <p className="text-center" style={{fontSize:"40px"}}><FaHeart/></p>
        </Col>
      </Row>
    </Container>: 
    <div style={{minHeight:'110vh'}}>
      <h1 className="text-center mt-2 mb-2 app-form-header">Zapisz się na nasz kurs</h1>
      <Form onSubmit={handleSubmit} className="app-form">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={6} md={4} lg={3} className="mt-3">
              <Form.Group className="mb-2">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Wprowadź email"
                  id="email"
                  onChange={(e) => {
                    handleChange(e);
                    setUserExists("");
                  }}
                  required
                />
                {userExists ? (
                  <p
                    style={{
                      color: 'red',
                      fontSize: "12px",
                      margin: 0,
                      marginTop: "4px",
                    }}
                  >
                    {userExists}
                  </p>
                ) : null}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Imię </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Wprowadź imię"
                  id="firstname"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Nazwisko</Form.Label>
                <Form.Control
                  id="lastname"
                  type="text"
                  placeholder="Lastname"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Select
                aria-label="Płeć"
                id="gender"
                className="mb-2 mt-3 app-form-select"
                required
                onChange={(e) => {
                  handleChange(e);
                  handleChangeErrorGender();
                }}
              >
                <option value="">Wybierz płeć</option>
                <option value="male">Mężczyzna</option>
                <option value="female">Kobieta</option>
                <option value="other">Inna</option>
              </Form.Select>
              {genderError ? (
                <p style={{ color: "red" }}>{genderError}</p>
              ) : null}
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="mt-3">
              <Form.Group className="mb-1">
                <Form.Label>Miejscowość </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Wprowadź miejscowość"
                  id="city"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Kod pocztowy</Form.Label>
                <Form.Control
                  pattern="[0-9]{2}-[0-9]{3}"
                  type="text"
                  id="postalCode"
                  placeholder="Kod pocztowy np:(98-160)"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Ulica</Form.Label>
                <Form.Control
                  type="text"
                  id="street"
                  placeholder="Ulica"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Numer telefonu</Form.Label>
                <Form.Control
                  type="tel"
                  pattern="^(?:(?:\d[-\s]?){8}\d|(?:\d{3}[-\s]?){3}\d)$"
                  id="phone"
                  placeholder="Np: 726326512"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button
                className="app-form-submitbutton text-center"
                variant="primary"
                type="submit"
              >
                Wyślij
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
}

export default FormEnrol;
