
export default {
    beforeMount() {
        console.log("beforeMount");
        document.documentElement.scrollTop = 0;
        document.getElementById("mn2").classList.add('active');
    },
    beforeUnmount() {
        console.log("beforeUnmount");
        document.getElementById("mn2").classList.remove('active');
    },
    template: `
<div class="container-d-flex">
    <div class="row fs-6 mb-4">
        <div class="col-11">
            <p class="fs-3 title-text-psl"><b>ANTROPOLOGIA E ARCHEOZOOLOGIA</b></p>
            <p><b>Grazie ai soci volontari</b> Osteoarc si occupa di Scavo e recupero di resti ossei umani e animali, anche in ambienti subacquei e di grotta, microscavi - Assistenza tecnica a ditte di scavo - Campionature per analisi di genetica molecolare effettuate su campo - Analisi di inumati e cremati - Ricognizioni di Santi - Pulizia e restauro dell'osso -  Indagini microscopiche e istologiche per patologie e diagnosi di età - Identificazione tassonomica di resti animali - Identificazione delle tracce di macellazione tramite stereomicroscopio - Calchi - Consolidamento e restauro - Ricostruzione del profilo biologico, dello stato di salute e valutazioni biometriche - Ricostruzioni demografiche - Ricostruzioni paleoeconomiche e paleoambientali - Archivio cartaceo, grafico, fotografico e informatizzato dei dati - Archiviazione e Gestione dei materiali ossei - Mediazioni con laboratori tecnici - Musealizzazione e divulgazione scientifica.</p>
            <ul>
                <li><b>FINALITÀ</b> Ricerca archeologica, metodologica, pubblicazioni scientifiche e divulgazione</li>
                <li><b>SCAVO E RECUPERO</b> Osteoarc offre un servizio di consulenza e assistenza tecnica di scavo e recupero di materiale scheletrico appropriata ai diversi contesti e alle esigenze delle ditte di scavo</li>
                <li><b>METODI</b> Attenzione alla documentazione, interdisciplinarietà, utilizzo di metodi secondo le linee guida dei protocolli internazionali, considerandone le criticità</li>
            </ul>
        </div>
    </div>
    <div class="row fs-6 mb-4">
        <div class="col-11">
            <p class="fs-3 title-text-psl"><b>TECNOLOGIE PER L'ARCHEOLOGIA</b></p>
            <p><b>Grazie ai soci volontari</b> Osteoarc si occupa di prospezione e indagini preventive con mappatura della mineralizzazione del terreno e di oggetti metallici - Ricerca metodologica e progettazione di nuove strumentazioni - Informatizzazione della strumentazione esistente - Acquisizioni fotogrammetriche - Stampe 3D - Progettazione e produzione di software per raccolta e armonizzazione dei dati di scavo - Configurazione di hardware per lo scavo - Creazione di visite virtuali immersive - Formazione per studenti e professionisti./<p>
            <ul>
                <li><b>FINALITÀ</b> Con progettosl - rete di imprese è in corso un'attività di ricerca tecnologica, con impostazione metodologica open source, finalizzata a progettare, testare e validare strumentazioni elettroniche, software e hardware per le esigenze della ricerca archeologica e osteologica su campo e in laboratorio</li>
            </ul>
        </div>
    </div>
</div>
`
}
