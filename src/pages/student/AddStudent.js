import { upload } from "@testing-library/user-event/dist/upload";
import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import '../../App.css'
import FormPage from "../../component/page/Form";



function AddStudent() {
    const [date, setDate] = useState('');
    let dateFormat = new Date(date)
    const [preview, setPreview] = useState(null);
    const [page, setPage] = useState(1);

    
  return (
    <div>
      <div className="flexContainer">
        <Row>
          <Col>
            <div className="contentContainer mt-5">Student Bio</div>
            <div className="subContentContainer">
            <FormPage page={page} setPage={setPage} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AddStudent;
