
export default {
    beforeMount() {
        console.log("beforeMount");
        document.documentElement.scrollTop = 0;
        document.getElementById("mn5").classList.add('active');
    },
    beforeUnmount() {
        console.log("beforeUnmount");
        document.getElementById("mn5").classList.remove('active');
    },
    template: `
<div class="container-d-flex">
    <div class="row mb-0">
       <div class="col-11 text-center">
            <i class="bi-shield top-icons-psl"></i>
       </div>
    </div>
    <div class="row fs-6 mb-4">
       <div class="col-11">
            <p class="fs-3 title-text-psl"><b>Informativa</b></p>
            <p>Informativa sul trattamento dati ai sensi dell’art. 13 D.Lgs. 196/2003 (Codice Privacy) e dell’art. 13 Regolamento UE n. 2016/679 (GDPR) OSTEOARC - APS, in qualità di titolare del trattamento, informa tutti gli interessati in merito alle modalità e alle finalità del trattamento dei dati.</p>
            <p>Saranno trattati dati personali come identificati all'art. 4 GDPR, ad esempio dati anagrafici e necessari ai contatti e alla fatturazione riferibili ad aziende e al personale che vi opera e dati riservati inerenti configurazioni, credenziali, progetti.</p>
            <p>Il Trattamento dei dati è necessario per la realizzazione dei servizi richiesti e per gli adempimenti previsti dalla normativa vigente. Viene effettuato ai sensi dell'art. 6 lett. a GDPR sulla base del consenso e ai sensi dell'art. 24 lett. a, b, c Codice Privacy e dell'art. 6 lett. b, e GDPR per le seguenti finalità:</p>
            <ul>
                <li>adempiere agli obblighi precontrattuali, contrattuali e fiscali;</li>
                <li>adempiere agli obblighi previsti dalla legge, da un regolamento, dalla normativa comunitaria o da un ordine dell’Autorità;</li>
                <li>esercitare i diritti del Titolare.</li>
            </ul>
            <p>I dati personali potranno essere trattati previo specifico consenso ai sensi degli artt. 23 e 130 Codice Privacy e dell'art. 7 GDPR, per finalità di marketing, cioè per l'invio tramite e-mail, posta e/o sms e/o telefono di comunicazioni commerciali e/o materiale pubblicitario inerente nostri prodotti o servizi e rilevazione del grado di soddisfazione. Il consenso per questo specifico trattamento è facoltativo, può essere revocato in qualsiasi momento e non incide sulla fornitura dei servizi oggetto dei contratti in essere.</p>
            <p>Il trattamento è realizzato in formato cartaceo ed elettronico eseguendo le operazioni indicate all’art. 4 Codice Privacy e all’art. 4 n. 2 GDPR : raccolta, registrazione, organizzazione, conservazione, consultazione, elaborazione, modifica, selezione, estrazione, raffronto, utilizzo, interconnessione, blocco, comunicazione, cancellazione e distruzione.</p>
            <p>Il Titolare tratterà i dati personali per il tempo necessario per adempiere alle finalità già descritte nel rispetto della normativa e dei diritti degli interessati.</p>
            <p>Avranno accesso ai dati gli incaricati interni a seguito di specifico incarico e formazione e i Responsabili esterni del trattamento per l'esecuzione di specifici trattamenti. L'elenco dei responsabili esterni è disponibile presso la nostra sede.</p>
            <p>Ai sensi dell'art. 24 lett. a, b, d Codice Privacy e dell'art. 6 lett. b, c GDPR, il Titolare potrà comunicare i dati ai soggetti ai quali la comunicazione sia obbligatoria per legge per l’espletamento di operazioni di gestione, contabilità, conformità alla normativa. I dati non saranno diffusi.</p>
            <p>I dati personali sono conservati all'interno dell'Unione Europea, in paesi per i quali vige una decisione di adeguatezza o facenti parte del Privacy Shield.</p>
            <p>Ogni interessato può usufruire dei diritti di cui all’art. 7 Codice Privacy e art. 15 GDPR :</p>
            <ul>
                <li>ottenere la conferma dell'esistenza o meno di dati personali che La riguardano, anche se non ancora registrati, e la loro comunicazione in forma intelligibile;</li>
                <li>ottenere l'indicazione:
                    <ul>
                        <li>dell'origine dei dati personali;</li>
                        <li>delle finalità e modalità del trattamento;</li>
                        <li>della logica applicata in caso di trattamento effettuato con l'ausilio di strumenti elettronici;</li>
                        <li>degli estremi identificativi del titolare, dei responsabili e del rappresentante designato ai sensi dell'art. 5, comma 2 Codice Privacy e art. 3, comma 1, GDPR;</li>
                        <li>dei soggetti o delle categorie di soggetti ai quali i dati personali possono essere comunicati o che possono venirne a conoscenza in qualità di rappresentante designato nel territorio dello Stato, di responsabili o incaricati;</li>
                    </ul>
                </li>
                <li>ottenere:
                    <ul>
                        <li>l'aggiornamento, la rettificazione ovvero, quando vi ha interesse, l'integrazione dei dati;</li>
                        <li>la cancellazione, la trasformazione in forma anonima o il blocco dei dati trattati in violazione di legge, compresi quelli di cui non è necessaria la conservazione in relazione agli scopi per i quali i dati sono stati raccolti o successivamente trattati;</li>
                        <li>l'attestazione che le operazioni di cui alle lettere a) e b) sono state portate a conoscenza, anche per quanto riguarda il loro contenuto, di coloro ai quali i dati sono stati comunicati o diffusi, eccettuato il caso in cui tale adempimento si rivela impossibile o comporta un impiego di mezzi manifestamente sproporzionato rispetto al diritto tutelato;</li>
                    </ul>
                </li>
                <li>opporsi, in tutto o in parte:
                    <ul>
                        <li>per motivi legittimi al trattamento dei dati personali che la riguardano, ancorché pertinenti allo scopo della raccolta;</li>
                        <li>al trattamento di dati personali che La riguardano a fini di invio di materiale pubblicitario o di vendita diretta o per il compimento di ricerche di mercato o di comunicazione commerciale. Ove applicabili, ha altresì i diritti di cui agli artt. 16-21 GDPR (diritto di rettifica, all’oblio, di limitazione di trattamento, alla portabilità dei dati, di opposizione), nonché il diritto di reclamo all’Autorità Garante.</li>
                    </ul>
                </li>
            </ul>
            <p>Ogni interessato può esercitare i diritti rivolgendosi al responsabile per il trattamento dati "il Presidente di OSTEOARC - APS" presso la nostra sede.</p>
        </div>
    </div>
    <div class="row fs-6 mb-4">
    <p class="fs-3 title-text-psl"><b>Cookies</b></p>
        <div class="col-12">
            <ul>
                <li>Premesse OSTEOARC - APS, con sede legale in via delle cascine 38 in Albizzate VA, in qualità di titolare del trattamento dei dati (“Titolare”), pubblica la seguente Cookie Policy, informativa per il trattamento dei cookie utilizzati dal sito Internet raggiungibile all’URL: http://www.osteoarc.it (“Sito”). Per tutto quanto non previsto dalla Cookie Policy si rinvia all'informativa in materia di trattamento dati. Utilizzando il sito l'utente accetta che vengano installati sul suo dispositivo i cookie "proprietari" e "di terze parti" indicati di seguito. Disabilitando tutti o alcuni cookie, alcune funzionalità del sito potrebbero non operare correttamente.</li>
                <li>Definizioni Navigatore: qualsiasi soggetto che naviga sul Sito e che può usufruire dei servizi offerti dal Titolare. Cookie: per cookie si intende un file composto da una singola riga di testo, che può essere memorizzato temporaneamente nella memoria del computer del Navigatore (cookie “di sessione” o “temporaneo”) e posizionato nell’hard drive tramite il server di una pagina web (cookie “persistenti” o “di lunga durata”). Cookie di prima parte o proprietari: file che vengono installati sul dispositivo dell'utente direttamente dal sito che sta visitando. Cookie di terza parte: file che vengono installati da siti esterni, attraverso codice integrato nella pagine del sito che si sta visitando. Sono esempi di cookie di terze parti quelli installati dai plugin social (per la condivisione dei contenuti) oppure i cookie di analisi delle visite. Cookie tecnici: sono necessari per il corretto funzionamento del sito, ad esempio per tenere traccia dell'autenticazione effettuata da un utente, non raccolgono nessuna informazione personale. Cookie di funzionalità: sono essenzialmente cookie tecnici, utilizzati per memorizzare scelte (ad esempio la lingua) o riproporre testi in form da compilare. Questo tipo di cookie può coinvolgere informazioni personali ma senza di essi le funzionalità del sito possono non operare correttamente. Cookie di performance: sono essenzialmente cookie tecnici, utilizzati per raccogliere informazioni che non riguardano l'utente come persona ma le modalità di navigazione, allo scopo di migliorare le prestazioni del sito. I dati sono raccolti in forma aggregata e anonima da strumenti automatici di analisi. In genere la loro disattivazione non compromette le funzionalità del sito. Cookie social: l'utilizzo di funzionalità o collegamenti ad alcuni social network (ad esempio Facebook, Twitter, YouTube, Google Maps, ecc.) implica che siano installati cookie (di terze parti). La disattivazione non compromette le funzionalità del sito, ma può rendere inutilizzabili le funzioni o i collegamenti di riferimento. Cookie di profilazione: vengono installati per raccogliere informazioni inerenti le preferenze dell'utente e mostrare quindi contenuti coerenti. Possono memorizzare elementi della navigazione effettuata su altri siti. In genere vengono rilevati l'indirizzo IP dell'utente e informazioni che possono riguardare la persona e le sue preferenze. Google Analytics: servizio di analisi web fornito dalla società Google Inc. (“Google”), il servizio raccoglie dati in forma anonima per consentire il miglioramento delle prestazioni del sito.</li>
                <li>Modalità del trattamento
                    <ul>
                        <li>Premesse Sul Sito non sono utilizzati Cookie di prima parte di lunga durata e/o cookie di prima parte di profilazione ma sono utilizzati cookie di terza parte come di seguito descritto.</li>
                        <li>Utilizzo di Cookies di prima parte Il Sito utilizza soltanto Cookie di prima parte tecnici, necessari a Joomla e alle sue estensioni per mantenere le funzionalità di base del sito.</li>
                        <li>Utilizzo di Cookie di Terze Parti Il Sito utilizza il servizio di Google Analytics che utilizza Cookie necessari per il proprio funzionamento, inoltre potrebbero nel tempo essere utilizzati cookie di ulteriori terze parti, vi preghiamo di controllare l'apposita tabella al punto 10.</li>
                    </ul>
                </li>
                <li>Scopo dell'utilizzo dei cookie di prima parte I Cookie tecnici utilizzati possono essere cookie di sessione, utilizzati per consentire l’esplorazione efficiente del sito, per determinare la sessione di navigazione e per gestire la visualizzazione del messaggio di informativa sui cookie e relativa scelta del Navigatore. I dati generati dai Cookie sono utilizzati dal Titolare quale strumento di ausilio per l’attività di analisi e monitoraggio interno sul traffico generato dai Navigatori (accessi e pagine viste, in particolare), e al fine di poter apportare modifiche migliorative in termini di funzionamento e navigazione.</li>
                <li>Utilizzo dei cookie di prima parte I Cookie di sessione sono strettamente limitati alla trasmissione di dati identificativi di sessione costituiti da numeri casuali generati dal server che non consentono alcuna identificazione personale dei singoli Navigatori. Mediante i Cookie di Google Analytics vengono trattati in forma anonima, senza l'acquisizione diretta di dati personali identificativi del Navigatore, i seguenti dati: indirizzo IP (che permette anche la geolocalizzazione), orario e provenienza delle visite, eventuali precedenti visite da parte dello stesso navigatore ed altri parametri relativi al sistema operativo, all’ambiente informatico e ai dispositivi utilizzati.</li>
                <li>Durata dei cookie di prima parte e dei dati generati da Google Analytics I cookie di sessione non vengono memorizzati in modo persistente sul computer del Navigatore e svaniscono con la chiusura del browser. I dati generati da Google Analytics sono conservati da Google così come indicato nell'informativa reperibile presso questo link.</li>
                <li>Responsabilità Il Titolare si impegna a utilizzare i dati generati dai Cookie esclusivamente per gli scopi sopra indicati. Il Titolare non risponde del trattamento dei dati effettuato da Google con il sistema sopra descritto, limitandosi a prendere atto delle assicurazioni fornite dal medesimo, il quale rispetta le disposizioni relative alla protezione dei dati di ‘Safe Harbor Principles’ e partecipa al programma ‘Safe Harbor’ del Ministero Americano del Commercio. I dati generati dai Cookie circa l’utilizzo del Sito da parte del Navigatore (compreso l’indirizzo IP) sono trasmessi e depositati presso i server di Google. Google utilizza questi dati al fine di analizzare le abitudini di navigazione del Sito e fornire al Titolare rapporti sulle visite al Sito. Google può anche trasferire queste informazioni a terzi ove ciò sia imposto dalla legge o laddove tali terzi trattino le suddette informazioni per conto di Google. Per consultare l'informativa privacy della società Google, relativa al servizio Google Analytics, si consiglia di visitare il seguente link. Per conoscere le norme sulla privacy di Google, si invita a visitare il seguente link. Ferme restando le obbligazioni previste dall’ordinamento nazionale a carico del Titolare, Google in qualità di titolare autonomo del trattamento, è unico ed esclusivo responsabile (civilmente e penalmente) del trattamento dei dati mediante il suddetto sistema.</li>         
                <li>Conseguenze del rifiuto al trattamento Il Navigatore, per rifiutare l’utilizzo dei Cookies di Google Analytics, come indicato sul sito di Google al seguente link, deve procedere alla modifica della configurazione del proprio browser scaricando il componente aggiuntivo per la disattivazione del JavaScript di Google Analytics (ga.js, analytics.js, dc.js) reperibile al seguente link. La disabilitazione dei Cookies di Google Analytics non limita in maniera significativa l’usabilità del Sito, tuttavia ostacola il Titolare nel perseguimento dello scopo di cui sopra.</li>
                <li>Gestione e cancellazione dei cookies L'utente può scegliere di disabilitare l'uso di tutti o alcuni cookie modificando le impostazioni del browser di navigazione, in modo che blocchi i cookie oppure presenti un messaggio all'utente prima di procedere alla relativa installazione. Le istruzioni sono reperibili presso:
                <ul>
                    <li><a href="http://www.chromium.org" target="_blank" rel="noopener">Chromium</a></li>
                    <li><a href="http://www.torproject.org/" target="_blank" rel="noopener">Tor</a></li>
                    <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener">Firefox</a></li>
                    <li><a href="https://support.google.com/chrome/answer/95647?hl=it" target="_blank" rel="noopener">Chrome</a></li>
                    <li><a href="http://windows.microsoft.com/it-it/internet-explorer/delete-manage-cookies#ie=ie-11" target="_blank" rel="noopener">Explorer</a></li>
                    <li><a href="http://help.opera.com/Windows/10.00/it/cookies.html" target="_blank" rel="noopener">Opera</a></li>
                    <li><a href="http://support.apple.com/kb/HT1677?viewlocale=it_IT" target="_blank" rel="noopener">Safari</a></li>
                    <li><a href="http://www.srware.net/" target="_blank" rel="noopener">Iron</a></li>
                </ul>
            </ul>
            <p>Per maggiori informazioni in merito all'opt out relativamente all'installazione di cookie di terze parti visitate <a href="http://www.youronlinechoices.com/it/" target="_blank" rel="noopener">questo link</a>.</p>
        </div>
    </div>
    <div class="row fs-6 mb-4">
        <div class="col-12">
            <p class="fs-3 title-text-psl"><b>Tabella cookie</b></p>
            <p>Significato delle sigle tipo: <strong>T</strong> cookie tecnico, <strong>P</strong> di profilazione, <strong>PT</strong> di profilazione di terzi.<br />Significato delle sigle durata: <strong>G</strong> durata fino a 1 giorno, <strong>S</strong> durata oltre il giorno fino ad una settimana, <strong>O</strong> durata oltre la settimana fino a un mese, <strong>A(durata)</strong> altra durata indicata, <strong>N</strong> durata non nota.<br /> Formato della lista: riga <strong>1</strong> "<strong>nome</strong>" del cookie (sfondo giallo), riga <strong>2</strong> "<strong>dominio</strong>" del cookie, riga <strong>3</strong> "<strong>tipo</strong>" e "<strong>durata</strong>" del cookie, riga <strong>4</strong> "<strong>descrizione</strong>" del cookie.</p>
            <p class="fs-1">QUESTO SITO NON FA USO DI COCKIES</p>
        </div>
    </div>
</div>
`
}
