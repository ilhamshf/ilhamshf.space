import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Soumyajit-Behera.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            {/* <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="JUNIOR ML ENGINEER [Omdena]"
              date="June 2020 - August 2020"
              content={[
                "Assembled the data from various social media platforms using Twitter, Reddit.Interpreted the collected text using word-clouds and various other factors that affect the change of sentiments of youth.",
                " Utilized the data to find the issues using Topic Modelling and Building models using LSTM, BERT to predict the sentiments of the youth.",
              ]}
            /> */}
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Broadcasting SMPN 15"
              content={[
                "Worked on creating the video and editing video.",
              ]}
            />
            <Resumecontent
              title="Broadcasting SMAN 11"
              content={[
                "Worked on creating the video and editing video.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="SMAN 11 Semarang"
              date="2021 - Present"
              content={["Sekolah Menengah Atas"]}
            />
            <Resumecontent
              title="SMPN 15 Semarang"
              date="2018 - 2021"
              content={["Sekolah Menengah Pertama"]}
            />
            <Resumecontent
              title="SDN Kalicari 01"
              date="2012 - 2018"
              content={["Sekolah Dasar"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "2nd Winner of National Level MAPK Videography",
                "2nd Place Videography City Level",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
