import React from "react";
import bcrypt from 'bcryptjs';
import axios from "axios";

function SignUp() {
  const [userData, setUserData] = React.useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [match, setMatch] = React.useState(true);
  const [isPasswordValid, setIsPasswordValid] = React.useState(true);

  function handleChanges(event) {
    const { name, value } = event.target;

    setUserData((prevValues) => {
      const newValues = {
        ...prevValues,
        [name]: value
      };
      if (name === "password" || name === "confirmPassword") {
        checkPasswordMatch(newValues.password, newValues.confirmPassword);
      }
      if (name === "password") {
        checkPasswordLength(newValues.password);
      }
      return newValues;
    });
  }

  function checkPasswordMatch(password, confirmPassword) {
    if (password === confirmPassword) {
      setMatch(true);
    } else {
      setMatch(false);
    }
  }

  function checkPasswordLength(password) {
    if (password.length >= 6) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  }

  function handleRegistration(event) {
    if (userData.password.length >= 6) {
      setIsPasswordValid(true);

      if (match && isPasswordValid) {


        bcrypt.hash(userData.password, 10, async function (err, hash) {

          const result = await axios.post(
            process.env.REACT_APP_API_URL + "/create-user",
            {
              ...userData,
              ["password"]: hash
            },
            {
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              withCredentials: true
            }
          );
        });
        // All data is correct Proceed with registration


      } else {
        // Error
        console.log("Passwords do not match or are invalid. Please correct the passwords.");
      }
    } else {
      setIsPasswordValid(false);
    }
    event.preventDefault();

  }

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white">
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>

                  <div data-mdb-input-init className="form-outline form-white mb-4">
                    <input
                      type="text"
                      name="fName"
                      id="typeFirstNameX"
                      className="form-control form-control-lg"
                      onChange={handleChanges}
                    />
                    <label className="form-label" htmlFor="typeFirstNameX">First Name</label>
                  </div>

                  <div data-mdb-input-init className="form-outline form-white mb-4">
                    <input
                      type="text"
                      name="lName"
                      id="typeLastNameX"
                      className="form-control form-control-lg"
                      onChange={handleChanges}
                    />
                    <label className="form-label" htmlFor="typeLastNameX">Last Name</label>
                  </div>

                  <div data-mdb-input-init className="form-outline form-white mb-4">
                    <input
                      type="email"
                      name="email"
                      id="typeEmailX"
                      className="form-control form-control-lg"
                      onChange={handleChanges}
                    />
                    <label className="form-label" htmlFor="typeEmailX">Email</label>
                  </div>

                  <div data-mdb-input-init className="form-outline form-white mb-4">
                    <input
                      type="password"
                      name="password"
                      id="typePasswordX"
                      className="form-control form-control-lg"
                      onChange={handleChanges}
                    />
                    <label className="form-label" htmlFor="typePasswordX">Password</label>
                    {!isPasswordValid && <p style={{ color: 'red' }}>Password must be at least 6 characters long</p>}
                  </div>

                  <div data-mdb-input-init className="form-outline form-white mb-4">
                    <input
                      type="password"
                      name="confirmPassword"
                      id="typePasswordConfirmX"
                      className="form-control form-control-lg"
                      onChange={handleChanges}
                    />
                    <label className="form-label" htmlFor="typePasswordConfirmX">Confirm Password</label>
                    {!match && <p style={{ color: 'red' }}>Passwords don't match</p>}
                  </div>

                  <button
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-outline-light btn-lg px-5"
                    type="submit"
                    onClick={handleRegistration}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
