import React from "react";

function Register() {

function handleRegistration() {
    console.log("Clicked");
}

    return (
        <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" >
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Register</h2>

              <div data-mdb-input-init class="form-outline form-white mb-4">
                <input type="text" id="typeFirstNameX" class="form-control form-control-lg" />
                <label class="form-label" for="typeFirstNameX">First Name</label>
              </div>

              <div data-mdb-input-init class="form-outline form-white mb-4">
                <input type="text" id="typeLastNameX" class="form-control form-control-lg" />
                <label class="form-label" for="typeLastNameX">Last Name</label>
              </div>

              <div data-mdb-input-init class="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" class="form-control form-control-lg" />
                <label class="form-label" for="typeEmailX">Email</label>
              </div>

              <div data-mdb-input-init class="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                <label class="form-label" for="typePasswordX">Password</label>
              </div>


              <button data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5" type="submit" onClick={handleRegistration}>Register</button>

            

            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
}

export default Register;