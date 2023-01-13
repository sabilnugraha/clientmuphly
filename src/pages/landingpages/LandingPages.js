import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Search from "../../assets/search.png";

function Student() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        function handleKeyDown(event) {
          if (event.key === "Enter") {
            submitSearch();
          }
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => {
          window.removeEventListener("keydown", handleKeyDown);
        };
      }, [search]);

      function handleChange(e) {
        setSearch(e.target.value);
      }

      console.log(search);

      function submitSearch() {
        navigate(`/student/${search}`);
      }
  return (
    <div className="student">
      <Row>
        <Col>
          <div className="wave-container">
            <div class="search-container">
              <form>
                <input
                  className="inputs"
                  type="input"
                  placeholder="Input NIS..."
                  value={search}
        onChange={handleChange}

                />
                <img src={Search} className="search-icon" />
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Student;
