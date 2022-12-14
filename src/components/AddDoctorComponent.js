import React, { useState, useEffect } from "react";
import DoctorService from "../services/DoctorService";
import { useNavigate, Link, useParams } from "react-router-dom";
import PatientService from "../services/PatientService";

const AddDoctorComponents = () => {
  const [name, setname] = useState("");
  const [status, setstatus] = useState("");
  const [fees, setfees] = useState("");

  const history = useNavigate();
  const { id } = useParams();

  const saveOrUpdateDoctor = (e) => {
    e.preventDefault();

    const doctor = { name, status, fees };

    if (id) {
      if (!status || !fees || !name) {
        alert("Fill All the fields");
      } else {
        DoctorService.updateDoctor(id, doctor)
          .then((Response) => {
            history("/doctor");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      if (!status || !fees || !name) {
        alert("Fill All the fields");
      } else {
        DoctorService.createDoctor(doctor)
          .then((Response) => {
            console.log(Response.data);

            history("/doctor");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };

  useEffect(() => {
    DoctorService.getDoctorById(id)
      .then((Response) => {
        setname(Response.data.name);
        setstatus(Response.data.status);
        setfees(Response.data.fees);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (id) {
      return <h2 className="text-center">Update Driver</h2>;
    } else {
      return <h2 className="text-center">Add Driver</h2>;
    }
  };

  return (
    <div>
      <br /> <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}

            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Driver Name :</label>
                  <input
                    type="text"
                    placeholder="Enter Driver name"
                    name="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">NIC :</label>
                  <input
                    type="text"
                    placeholder="Enter NIC"
                    name="status"
                    className="form-control"
                    value={status}
                    onChange={(e) => setstatus(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Contact Number :</label>
                  <input
                    type="text"
                    placeholder="Enter Contact Number"
                    name="fees"
                    className="form-control"
                    value={fees}
                    onChange={(e) => setfees(e.target.value)}
                  ></input>
                </div>

                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateDoctor(e)}
                >
                  Submit
                </button>
                <Link to={"/doctor"} className="btn btn-danger">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctorComponents;
