import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import '../Css/rutinas.css';
import pesaImage from '../assets/1.png';
import jsPDF from 'jspdf';

const Rutinas = () => {
  const handlePrintButtonClick = (title, text) => {
    const pdf = new jsPDF();
    const lines = text.split('\n');
    let yPosition = 30; 
    pdf.text(title, 80, 10);   
    lines.forEach((line) => {
      pdf.text(line, 10, yPosition);
      yPosition += 20;
    });
    const currentDate = new Date().toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
  
      const currentTime = new Date().toLocaleTimeString('es-ES', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });
      
      pdf.text('<<< Gracias por visitar nuestra pagina !!! >>>', 50, yPosition + 50);
      pdf.text('<<<< TE ESPERAMOS PRONTO EN MERNGYM !!!! >>>>', 30, yPosition + 90);
      
      pdf.text('<<< A dejar un poquito la programacion con BERNI y a entrenar !!! >>>', 20, yPosition + 110);
      pdf.text(`Fecha de impresión: ${currentDate} - Hora: ${currentTime}`, 10, yPosition + 20);
    pdf.save(`${title}.pdf`); 
  };

  return (
    <Container>
      <h2 className="text-center mb-5">
        <img src={pesaImage} alt="Pesa" className="pesa-image" /> Rutinas Basicas para hacer en casa!! 
        <img src={pesaImage} alt="Pesa" className="pesa-image" />
      </h2>

      <Container className="rutina">
        <Row className="card-container">
          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src="../assets/brazos.jpg" />
              <Card.Body>
                <Card.Title>Brazos</Card.Title>
                <Card.Text>
                  <ol>
                    <li>Flexiones de brazos (push-ups) - 3 series de 12 repeticiones.</li>
                    <li>Curl de bíceps con mancuernas - 3 series de 10 repeticiones.</li>
                    <li>Tríceps en banco - 3 series de 12 repeticiones.</li>
                    <li>Elevaciones laterales con mancuernas - 3 series de 12 repeticiones.</li>
                    <li>Fondos en paralelas - 3 series de 10 repeticiones.</li>
                  </ol>
                </Card.Text>
                <Button
                  variant="primary"
                  className="btn-imprimir"
                  onClick={() =>
                    handlePrintButtonClick('Brazos', 
                    '1-Flexiones de brazos (push-ups) - 3 series de 12 repeticiones.\n' +
                    '2-Curl de bíceps con mancuernas - 3 series de 10 repeticiones.\n' +
                    '3-Tríceps en banco - 3 series de 12 repeticiones.\n' +
                    '4-Elevaciones laterales con mancuernas - 3 series de 12 repeticiones.\n' +
                    '5-Fondos en paralelas - 3 series de 10 repeticiones.'
                  )}
                >
                  Imprimir
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src="../assets/piernas.jpg" />
              <Card.Body>
                <Card.Title>Piernas</Card.Title>
                <Card.Text>
                  <ol>
                    <li>Sentadillas - 4 series de 12 repeticiones.</li>
                    <li>Peso muerto - 3 series de 10 repeticiones.</li>
                    <li>Estocadas (lunges) - 3 series de 10 repeticiones cada pierna.</li>
                    <li>Elevación de talones de pie - 3 series de 15 repeticiones.</li>
                    <li>Extensión de piernas en máquina - 3 series de 12 repeticiones.</li>
                  </ol>
                </Card.Text>
                <Button
                  variant="primary"
                  className="btn-imprimir"
                  onClick={() =>
                    handlePrintButtonClick('Piernas', 
                    '1-Sentadillas - 4 series de 12 repeticiones.\n' +
                    '2-Peso muerto - 3 series de 10 repeticiones.\n' +
                    '3-Estocadas (lunges) - 3 series de 10 repeticiones cada pierna.\n' +
                    '4-Elevación de talones de pie - 3 series de 15 repeticiones.\n' +
                    '5-Extensión de piernas en máquina - 3 series de 12 repeticiones.'
                  )}
                >
                  Imprimir
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src="../assets/aerobicos.jpg" />
              <Card.Body>
                <Card.Title>Ejercicios Aeróbicos:</Card.Title>
                <Card.Text>
                  <ol>
                    <li>Saltos en cuerda.</li>
                    <li>Burpees.</li>
                    <li>Saltos al cajón o steps.</li>
                    <li>Saltos con rodillas al pecho (mountain climbers).</li>
                    <li>Correr en el lugar con elevación de rodillas.</li>
                  </ol>
                </Card.Text>
                <Button
                  variant="primary"
                  className="btn-imprimir"
                  onClick={() =>
                    handlePrintButtonClick('Ejercicios Aeróbicos', 
                    '1-Saltos en cuerda.\n' +
                    '2-Burpees.\n' +
                    '3-Saltos al cajón o steps.\n' +
                    '4-Saltos con rodillas al pecho (mountain climbers).\n' +
                    '5-Correr en el lugar con elevación de rodillas.'
                  )}
                >
                  Imprimir
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Rutinas;


















