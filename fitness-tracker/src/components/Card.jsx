import React from "react";

function Card(props) {
return (
<div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div className={`text-xs font-weight-bold ${props.typeText} text-uppercase mb-1`}>
                                                {props.title}</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{props.value}</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

);
}

export default Card;