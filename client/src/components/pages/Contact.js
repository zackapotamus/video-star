import React from "react";
import { Link, Route } from "react-router-dom";

function Contact() {
  return (
    <div class="container">
            <div class="row">
              <div class="col-sm-1"></div>
                <div class="col-sm-10">
                    <div class="card">
                    <div class = "card-body">
                        <h2 class="card-title">Contact Me</h2>
                        <h5>My Email: <a href="bkim377@gatech.edu">bkim377@gatech.edu</a></h5>
                        <h5>My Phone Number: 770-557-7499</h5>
                    <div>
                        <form>
                            <div class="form-group">
                              <label for="exampleFormControlInput1">Name</label>
                              <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="John Smith">
                            </input>
                            <div class="form-group">
                              <label for="exampleFormControlInput1">Email</label>
                              <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="example@gmail.com">
                            </input>
                            <div class="form-group">
                              <label for="exampleFormControlTextarea1">Message</label>
                              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                          </div>
                    
                  </div>
                </form>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        
  );
}

export default Contact;
