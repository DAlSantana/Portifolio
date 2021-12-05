import * as React from "react";
import { Link } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";

import "./work.scss";

import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/400.css";

import logoSpotify from "../images/spotify.jpg";
import livraria from "../images/livraria.jpg";
import finans from "../images/finans.jpg";

const WorkPage = () => {
  return (
    <section>
      <div class="d-flex align-items-end  mt-1 justify-content-start justify-content-sm-end index__font">
        <div class="p-2 align-self-start flex-fill align-self-md-start">
          D.S
        </div>
        <div class="p-2 align-self-end flex-md-fill">Work</div>
        <div class="p-2 align-self-end flex-md-fill work__about">
          <Link to="/">About</Link>
        </div>
      </div>

      <div class="d-sm-flex flex-sm-column bd-highlight mb-3">
        <div class="p-sm-3 work__profile">
          <p class="work__label">Hi I'm Diego Santana, Front End Developer.</p>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <p class="work__title">01 / Project Spotify</p>
              <p class="work__legend">
              Development of a Landing Page inspired by the streaming site Spotify.
              </p>
            </div>

            <div class="col-md-6">
              <img src={logoSpotify} alt="Imagem Spotify" class="work__logo" />
            </div>
            <div class="mt-2">
              <Link
                to="https://dalsantana.github.io/Clone_Spotify/"
                target="_blank"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>
        <hr class="work__divider"/>
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-6">
              <p class="work__title">02 / Project Finans</p>
              <p class="work__legend">
              Development of a Landing Page inspired by a finance platform.
              </p>
            </div>

            <div class="col-md-6">
              <img src={finans} alt="Imagem Spotify" class="work__logo" />
            </div>
            <div class="mt-2">
            <Link
              to="https://dalsantana.github.io/Projeto_Finans/"
              target="_blank"
            >
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>
        <hr class="work__divider"/>

        <div class="container mt-5">
          <div class="row">
            <div class="col-md-6">
              <p class="work__title">03 / Project Safira</p>
              <p class="work__legend">
              Development of a Landing Page with the inspiration of a
            bookstore.
              </p>
            </div>

            <div class="col-md-6">
              <img src={livraria} alt="Imagem Spotify" class="work__logo" />
            </div>
            <div class="mt-2">
            <Link
              to="https://dalsantana.github.io/Projeto-Livraria/"
              target="_blank"
            >
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkPage;
