import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import my from "../images/my.jpg";
import { Link } from "gatsby";
import "./index.scss";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/400.css";
import Work from "./work";
const IndexPage = () => {
  return (
    <section>
      <main>
        <div class="d-flex align-items-end  mt-1 justify-content-start justify-content-sm-end index__font">
          <div class="p-2  align-self-start flex-fill align-self-md-start index__logo">
            D.S
          </div>
          <div class="p-2 align-self-end flex-md-fill">
            <Link to="/work">Work</Link>
          </div>
          <div class="p-2 align-self-end flex-md-fill index__about">About</div>
        </div>
      </main>
      <div class="mt-5">
        <div class="d-sm-flex  flex-sm-column  mb-3">
          <div class="container-md">
            <div class="p-2 row">
              <div class="col-md-6">
                <p class="index__label">
                  Hi I'm Diego Santana, Front End Developer.
                </p>
                <p class="index__text">
                I currently work as a Front-End developer. I have experience in the area for 3 years. I'm looking to collaborate with Front-end projects using Angular or React, and Back-end projects using Node.js. My stack: React, Angular, Ionic, Node.js & Typescript.
                </p>
              </div>
              <div class="col-md-6">
                <img src={my} class="index__photo" />
              </div>
            </div>
          </div>
          <div class="p-3 w-md-50 w-lg-50">
            <p class="index__legend__apresentation">
            I currently work as a Front-End developer. I have experience in the area for 3 years. I'm looking to collaborate with Front-end projects using Angular or React, and Back-end projects using Node.js. My stack: React, Angular, Ionic, Node.js & Typescript.
            </p>
          </div>
          <div class="p-3 p-lg-5  w-md-75 ">
            <p class="index__info">
            Main Software 
            </p>
            <p class="index__legend">
            Development of responsive interfaces, development of
              Apis, integrations with payment services
            </p>
            <div>
              <hr />

              <p class="index__legend">
              Hope to help you on your next project.
              </p>
              <div class="col index__contact__info col-lg-11">
                diegoalsantana@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndexPage;
