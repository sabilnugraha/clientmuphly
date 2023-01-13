import React, { useState } from "react";
import "../../../src/App.css";
import Upload from "../../assets/upload.png";
import axios from "axios";
import { Alert } from "react-bootstrap";
import { useMutation } from "react-query";
import { API } from "../../config/api";

function FormPage({ page, setPage }) {
  const [formData, setFormData] = useState({});
  const [date, setDate] = useState("");
  const [preview, setPreview] = useState(null);
  const [imagename, setImageName] = useState("Choose File...");
  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    fullname: "",
    nickname: "",
    birthplace: "",
    //birthdate: "",
    gender: "male",
    address: "",
    image: "",
    nis: "",
    nisn: "",
    nik: "",
    nationality: "WNI",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    console.log(form);
    // Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
      setImageName(e.target.files[0].name);
    }
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();


      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };
      // Data body
      const body = JSON.stringify(form);
      const formData = new FormData();
      
      formData.set("fullname", form.fullname);
      formData.set("nickname", form.nickname);
      formData.set("nis", form.nis);
      formData.set("nisn", form.nisn);
      formData.set("nik", form.nik);
      formData.set("address", form.address);

      // Insert data user to database
      const response = await API.post("/addstudent", formData, config);

      // Store data with FormData as object
      

      if (form.image) {
        formData.set("photo", form?.image[0], form?.image[0]?.name);
      }

      console.log(response);
      const addPhotto = await API.patch("/addphoto/" + response.data.data.id, formData)
      console.log(addPhotto);

      if (response.data.status === "success") {
        const alert = (
          <Alert variant="success" className="py-1">
            Register Success, Thank You For Your Contribution
          </Alert>
        );
        setMessage(alert);
        setForm({
          fullname: "",
          nickname: "",
          birthplace: "",
        //  birthdate: "",
          gender: "male",
          address: "",
          image: "",
          nis: "",
          nisn: "",
          nik: "",
          nationality: "WNI",
        });
      } else {
        const alert = (
          <Alert variant="danger" className="py-1">
            Error Cuk..
          </Alert>
        );
        setMessage(alert);
      }
      // Handling response here
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Error Cuy..
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });

  return (
    <form onSubmit={(e) => handleSubmit.mutate(e)}>
      {message && message}
      {page === 1 && (
        <div>
          <div className="textHeader">Personal Data</div>

          <div className="mt-3">
            <div className="inputText">Full Name</div>
            <input
              name="fullname"
              onChange={handleChange}
              value={form.fullname}
              className="inputForm mt-2"
            ></input>
          </div>
          <div className="mt-3">
            <div className="inputText">Nick Name</div>
            <input
              name="nickname"
              onChange={handleChange}
              value={form.nickname}
              className="inputForm mt-2"
            ></input>
          </div>
          <div className="mt-3">
            <div className="inputText">Gender</div>
            <select
              htmlFor="gender"
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="inputForm mt-2"
            >
              <option id="gender" value="male">
                Male
              </option>
              <option id="gender" value="female">
                Female
              </option>
            </select>
          </div>
          <div className="mt-3">
            <div className="inputText">Birth Place</div>
            <input
              name="birthplace"
              value={form.birthplace}
              onChange={handleChange}
              className="inputForm mt-2"
            ></input>
          </div>
          <div className="mt-3">
            <div className="inputText">Birth Date</div>
            <input
              type="date"
              name="birthdate"
              className="inputForm mt-2"
              value={form.birthdate}
              onChange={handleChange}
              placeholder="Birth Date"
            ></input>
          </div>
          <div className="mt-3">
            <div className="inputText">Address</div>
            <textarea
              value={form.address}
              name="address"
              onChange={handleChange}
              type="textarea"
              className="inputForm mt-2"
            ></textarea>
          </div>
          <div className="mt-3">
            {preview && (
              <img
                src={preview}
                alt=""
                style={{ width: "100%", borderRadius: "15px" }}
              />
            )}
            <div className="inputText">Photo</div>
            <label htmlFor="image" className="inputForm mt-2">
              <img src={Upload} style={{ width: "30px" }} />{" "}
              <span className="headerTextVar">{imagename}</span>
            </label>
            <input
              id="image"
              name="image"
              type="file"
              onChange={handleChange}
              className="inputForm mt-2"
              placeholder="Address"
              hidden
            ></input>
          </div>
          <button
            className="generalButton mt-4 mb-4"
            onClick={() => setPage(2)}
          >
            Next
          </button>
        </div>
      )}
      {page === 2 && (
        <div>
          <div className="textHeader">Personal Data</div>
          <div className="mt-3">
            <div className="inputText">NIS</div>
            <input
              name="nis"
              type="number"
              value={form.nis}
              onChange={handleChange}
              className="inputForm mt-2"
            ></input>
          </div>
          <div className="mt-3">
            <div className="inputText">NISN</div>
            <input
              name="nisn"
              type="number"
              onChange={handleChange}
              value={form.nisn}
              className="inputForm mt-2"
            ></input>
          </div>
          <div className="mt-3">
            <div className="inputText">NIK</div>
            <input
              name="nik"
              type="number"
              onChange={handleChange}
              value={form.nik}
              className="inputForm mt-2"
            ></input>
          </div>
          <div className="mt-3">
            <div className="inputText">Nationality</div>
            <select
              name="nationality"
              onChange={handleChange}
              value={form.nationality}
              className="inputForm mt-2"
            >
              <option value="WNI">WNI</option>
              <option value="WNA">WNA</option>
            </select>
          </div>
          <div className="spaceBetween">
            <button
              className="betweenButton mt-4 mb-5"
              onClick={() => setPage(1)}
            >
              Previous
            </button>
            <button
              className="betweenButton mt-4 mb-5"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      )}
      {/* {page === 3 && (
        <div>
          <div className="textHeader">Address</div>
          <div className="mt-3">
            <div className="inputText">Type Of Stay</div>
            <select className="inputForm mt-2">
              <option value="option1">Dormittory</option>
              <option value="option2">Non Dormittory</option>
            </select>
          </div>
          <div className="mt-3">
            <div className="inputText">Province</div>
            <input className="inputForm mt-2"></input>
          </div>
          <div className="mt-3">
            <div className="inputText">Nationality</div>
            <select className="inputForm mt-2">
              <option value="option1">WNI</option>
              <option value="option2">WNA</option>
            </select>
          </div>
          <div className="spaceBetween">
            <button
              className="betweenButton mt-4 mb-5"
              onClick={() => setPage(1)}
            >
              Previous
            </button>
            <button
              className="betweenButton mt-4 mb-5"
              onClick={() => setPage(3)}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {page === 4 && (
        <div>
          <div className="textHeader">Family Data</div>
          <div className="mt-3">
            <div className="inputText">Family Card Number</div>
            <input className="inputForm mt-2"></input>
          </div>
          <div className="mt-3">
            <div className="inputText">Head Of Family</div>
            <input className="inputForm mt-2"></input>
          </div>
          <div className="mt-3">
            <div className="inputText">Status Of The Head Of The Family</div>
            <select className="inputForm mt-2">
              <option value="option1">Father</option>
              <option value="option2">Mother</option>
              <option value="option2">Uncle</option>
              <option value="option2">Aunt</option>
              <option value="option2">Brother</option>
              <option value="option2">Sister</option>
              <option value="option2">Grand Father</option>
              <option value="option2">Grand Mother</option>
              <option value="option2">Other</option>
            </select>
          </div>
          <div className="mt-3">
            <div className="inputText">KIP Number</div>
            <input className="inputForm mt-2"></input>
          </div>
          <div className="mt-3">
            <div className="inputText">KKS/SKTM Number </div>
            <input className="inputForm mt-2"></input>
          </div>
          <div className="mt-3">
            <div className="inputText">PKH Number</div>
            <input className="inputForm mt-2"></input>
          </div>
          <div className="spaceBetween">
            <button
              className="betweenButton mt-4 mb-5"
              onClick={() => setPage(3)}
            >
              Previous
            </button>
            <button
              className="betweenButton mt-4 mb-5"
              onClick={() => setPage(5)}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {page === 5 && (
        <div>
          <div className="textHeader">Family Data</div>
          <div className="mt-3">
            <div className="inputText">Family Card Number</div>
            <input className="inputForm mt-2"></input>
          </div>
          <div className="mt-3">
            <div className="inputText">Head Of Family</div>
            <input className="inputForm mt-2"></input>
          </div>
          <div className="mt-3">
            <div className="inputText">Status Of The Head Of The Family</div>
            <select className="inputForm mt-2">
              <option value="option1">Father</option>
              <option value="option2">Mother</option>
              <option value="option2">Uncle</option>
              <option value="option2">Aunt</option>
              <option value="option2">Brother</option>
              <option value="option2">Sister</option>
              <option value="option2">Grand Father</option>
              <option value="option2">Grand Mother</option>
              <option value="option2">Other</option>
            </select>
          </div>
          <div className="mt-3">
            <div className="inputText">KIP Number</div>
            <input className="inputForm mt-2"></input>
          </div>
          <div className="mt-3">
            <div className="inputText">KKS/SKTM Number </div>
            <input className="inputForm mt-2"></input>
          </div>
          <div className="mt-3">
            <div className="inputText">PKH Number</div>
            <input className="inputForm mt-2"></input>
          </div>
          <div className="spaceBetween">
            <button
              className="betweenButton mt-4 mb-5"
              onClick={() => setPage(4)}
            >
              Previous
            </button>
            <button
              className="betweenButton mt-4 mb-5"
              onClick={() => setPage(6)}
            >
              Next
            </button>
          </div>
        </div>
      )} */}
    </form>
  );
}

export default FormPage;
