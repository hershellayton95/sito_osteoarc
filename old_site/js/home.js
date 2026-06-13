

export default {
    beforeMount() {
        console.log("beforeMount");
        document.documentElement.scrollTop = 0;
        document.getElementById("mn0").classList.add('active');
    },
    beforeUnmount() {
        console.log("beforeUnmount");
        document.getElementById("mn0").classList.remove('active');
    },
    template: `
<div id="carouseltop" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouseltop" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouseltop" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouseltop" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouseltop" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="img/carusel0.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="img/carusel1.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="img/carusel2.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="img/carusel3.png" class="d-block w-100" alt="...">
    </div>
  </div>
</div>
<div class="text-psl container-d-flex pt-3 bg-light mb-0">
    <p class="text-center mb-0 motto-psl">Scarica lo statuto <a href="statuto_osteoarc-aps.pdf" target="_blank">qui</a></p><br>
</div>

`
}
