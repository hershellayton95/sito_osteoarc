
export default {
    beforeMount() {
        console.log("beforeMount");
        document.documentElement.scrollTop = 0;
        document.getElementById("mn4").classList.add('active');
    },
    beforeUnmount() {
        console.log("beforeUnmount");
        document.getElementById("mn4").classList.remove('active');
    },
    template: `
<div class="container-d-flex mt-0 mb-1 pt-3 fs-4">
    <div class="row justify-content-evenly">
        <div class="col col-lg-4">
            <p class="fs-3 title-text-psl"><b>SEDE LEGALE</b></p>
            <p class="mb-1">Via Matteotti, 7</p>
            <p class="mb-1">21040 Gornate Olona (VA)</p>
            <p>P.IVA e C.Fiscale 03357940125</p>
        </div>
        <div class="col-md-auto"></div>
        <div class="col col-lg-4">
            <p class="fs-3 title-text-psl"><b>MAIL</b></p>
            <p class="mb-1">Info e iscrizioni: segreteria@osteoarc.it</p>
            <p class="mb-1">Amministrazione: gestione@osteoarc.it</p>
            <p>PEC: osteoarc@pec.it</p>
        </div>
    </div>
    <div class="row justify-content-evenly">
        <div class="col col-lg-4">
            <p class="fs-3 title-text-psl"><b>TELEFONO</b></p>
            <p class="mb-1">Fisso: +39 0331 820975</p>
            <p>Mobile: +39 339 639 2152</p>
        </div>
        <div class="col-md-auto"></div>
        <div class="col col-lg-4">
            <p class="fs-3 title-text-psl"><b>SOCIAL</b></p>
            <a href="https://www.facebook.com/osteoarc" target="_blank"><img class="me-2" src="img/fb.png" /></a>
            <a href="https://it.linkedin.com/in/osteoarc-associazione-osteologica-ba309195" target="_blank"><img class="me-2" src="img/ln.png" /></a>
            <a href="https://instagram.com/osteoarc?utm_source=ig_profile_share&igshid=2uaf9lkf3cdq" target="_blank"><img src="img/ig.png" /></a>
        </div>
    </div>
</div>
`
}
