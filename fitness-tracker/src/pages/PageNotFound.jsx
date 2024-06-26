import React from "react";

function PageNotFound() {
    return (
        <div class="page-not-found bg-light d-flex align-items-center">
            <div class="container text-center">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <h1 class="display-1">404</h1>
                        <p class="lead">Oops! The page you are looking for does not exist.</p>
                        <a href="/" class="btn btn-primary">Go Home</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;