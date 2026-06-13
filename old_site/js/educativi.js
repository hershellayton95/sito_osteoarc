
export default {
    beforeMount() {
        console.log("beforeMount");
        document.documentElement.scrollTop = 0;
        document.getElementById("mn3").classList.add('active');
    },
    beforeUnmount() {
        console.log("beforeUnmount");
        document.getElementById("mn3").classList.remove('active');
    },
    template: `
<div class="container-d-flex">
    <div class="row fs-6 mb-4">
        <div class="col-11">
            <p class="fs-3 title-text-psl"><b>GAMES&BONES</b></p>
            <ul>
                <li>“Games&Bones” nasce dall’esigenza di
                trovare nuovi strumenti didattici,
                individuati nelle tipologie di giochi, per
                divulgare l’osteologia e le discipline
                afferenti (storia, archeologia, matematica,
                fisica, chimica, geologia, informatica,…)</li>
            </ul>
            <p>SCARICA LA BROCHURE <a href="games_and_bones.pdf" target="_blank">QUI</a></p>
        </div>
    </div>
    <div class="row fs-6 mb-4">
        <div class="col-11">
            <p class="fs-3 title-text-psl"><b>PER LA SCUOLA</b></p>
            <ul>
                <li>Percorsi per le Competenze Trasversali e per l'Orientamento (PCTO)</li>
            </ul>
            <!-- <a>SCARICA LA BROCHURE</a> -->
        </div>
    </div>
    <div class="row fs-6 mb-4">
        <div class="col-11">
            <p class="fs-3 title-text-psl"><b>DIDATTICA E TEMPO LIBERO</b></p>
            <ul>
                <li>Corsi e laboratori di antropologia e archeozoologia</li>
                <li>Attività extrascolastiche e tutoring per bambini e ragazzi</li>
                <li>Attività ricreative - divulgative</li>
                <li>Osteo - gite</li>
            </ul>
            <!-- <a>SCARICA LA BROCHURE</a> -->
        </div>
    </div>
    <div class="row fs-6 mb-4">
        <div class="col-11">
            <p class="fs-3 title-text-psl"><b>CORSI E AGGIORNAMENTI</b></p>
            <ul>
                <li>Corsi e laboratori per i soci (Laboratorio di microscopia; Laboratorio cremazioni, Laboratorio di Odontologia, Apprendisti Osteologi, Archeoscienziati, etc.)</li>
            </ul>
        </div>
    </div>
</div>
`
}
