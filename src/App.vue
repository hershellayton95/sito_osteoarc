<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="container-d-flex mb-0 mt-0 mbs-5 me-5 text-center fs-5 cookie-psl">
    <b>Questo sito non utilizza alcun tipo di cookie.</b>
  </div>
  <div class="container-d-flex mt-2 ms-5 me-5 content-psl" id="app">
    <nav class="navbar navbar-expand-lg nav-psl mb-2">
      <div class="container-fluid">
        <div class="navbar-brand logo-psl p-2" href="#">
          <div class="d-flex align-items-end">
            <img src="../../../../img/logo.jpg" alt="logo progettosl" width="150" />
            <span class="text-psl ms-1"><b>OSTEOARC-APS</b></span>
          </div>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div class="navbar-nav">
            <RouterLink id="mn0" class="nav-item nav-link" to="/"
              ><div class="nav-link-psl">Home</div></RouterLink
            >
            <RouterLink id="mn1" class="nav-item nav-link" to="/associazione"
              ><div class="nav-link-psl">L'associazione</div></RouterLink
            >
            <RouterLink id="mn2" class="nav-item nav-link" to="/ricerca"
              ><div class="nav-link-psl">Ricerca</div></RouterLink
            >
            <RouterLink id="mn3" class="nav-item nav-link" to="/educativi"
              ><div class="nav-link-psl">Progetti&nbsp;educativi</div></RouterLink
            >
            <RouterLink id="mn4" class="nav-item nav-link" to="/contatti"
              ><div class="nav-link-psl">Contatti</div></RouterLink
            >
            <RouterLink id="mn5" class="nav-item nav-link" to="/privacy"
              ><div class="nav-link-psl">Privacy</div></RouterLink
            >
          </div>
        </div>
      </div>
    </nav>
    <main>
      <div class="container-d-flex ms-5 me-5 margin-psl">
        <RouterView />
      </div>
    </main>

    <div class="container-d-flex mt-0 mb-1 pt-3 foother-psl">
      <div class="row justify-content-evenly">
        <div class="col col-lg-4">
          <p class="text-center text-light fs-4 mb-0 mt-2">DATI</p>
          <div class="text-center"><hr class="border border-1" /></div>
          <p class="text-white fs-5 mb-0 ms-1 me-1">
            <i class="bi-gear-fill fs-5"></i> OSTEOARC&nbsp;-&nbsp;APS ETS&nbsp;
          </p>
          <p class="text-white fs-5 mb-0 ms-1 me-1">
            <i class="bi-award-fill fs-5"></i> RUNTS&nbsp;repertorio&nbsp;n.&nbsp;86428
          </p>
          <p class="text-light fs-6 mb-1 mt-1 ms-1 me-1">
            <i class="bi-info-circle-fill fs-5"></i> P.IVA&nbsp;03357940125
          </p>
          <p class="text-light fs-6 mb-1 mt-1 ms-1 me-1">
            <i class="bi-geo-alt-fill fs-5"></i> Via Giacomo Matteotti 7, 21040 Gornate Olona
            (VARESE) Italy<br />
          </p>
          <p class="text-light fs-6 mb-3 mt-1 ms-1 me-1">
            <i class="bi-clock fs-5"></i> si riceve su appuntamento<br />
          </p>
        </div>
        <div class="col-md-auto"></div>
        <div class="col col-lg-4">
          <p class="text-center text-light fs-4 mb-0 mt-2">RIFERIMENTI</p>
          <div class="text-center"><hr class="border border-1" /></div>
          <p class="text-light fs-5 mb-1 mt-1 ms-1 me-1">
            <i class="bi-telephone-fill fs-5"></i> (+39)&nbsp;0331&nbsp;82&nbsp;09&nbsp;75
          </p>
          <p class="text-light fs-5 mb-1 mt-1 ms-1 me-1">
            <i class="bi-phone-fill fs-5"></i> (mobile)&nbsp;(+39)&nbsp;339&nbsp;639&nbsp;2152
          </p>
          <p class="text-light fs-5 mb-3 mt-1 ms-1 me-1">
            <i class="bi-envelope-at-fill fs-5"></i> segreteria@osteoarc.it
          </p>
        </div>
      </div>
      <div class="row justify-content-center pb-3">
        <div class="col-lg-10 text-center">
          <div class="text-center"><hr class="border border-1" /></div>
          <a href="https://www.facebook.com/osteoarc" target="_blank"
            ><img class="me-2" src="../../../../img/fb.png"
          /></a>
          <a
            href="https://it.linkedin.com/in/osteoarc-associazione-osteologica-ba309195"
            target="_blank"
            ><img class="me-2" src="../../../../img/ln.png"
          /></a>
          <a
            href="https://instagram.com/osteoarc?utm_source=ig_profile_share&igshid=2uaf9lkf3cdq"
            target="_blank"
            ><img src="../../../../img/ig.png"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
