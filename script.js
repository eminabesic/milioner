let trenutnoPitanje = 1;
let rezultat = 0;
let randomPitanje;
let tacanOdgovor;
let poruka=document.querySelector(".prikaz-rezultata");
let porukaParagraf=document.querySelector(".prikaz-rezultata p");

    const pitanje = document.querySelector(".glavni-div p")
    const postaviSvaPitanjaVar = document.querySelector(".odgovor-div")


    const postaviSvaPitanja = (randomPitanje) => {
        postaviSvaPitanjaVar.innerHTML = `
            <div class="odgovor1">
                    <p onClick="provjeraOdgovora('${randomPitanje.a}','${randomPitanje.tacanOdgovor}')" id="pitanjeA">
                        <span>A.</span> ${randomPitanje.a}
                    </p>
                    <p onClick="provjeraOdgovora('${randomPitanje.b}','${randomPitanje.tacanOdgovor}')"id="pitanjeB">
                        <span>B.</span> ${randomPitanje.b}
                    </p>
                </div>

                <div class="odgovor1">
                    <p onClick="provjeraOdgovora('${randomPitanje.c}','${randomPitanje.tacanOdgovor}')" id="pitanjeC">
                        <span>C.</span> ${randomPitanje.c}
                    </p>
                    <p onclick="provjeraOdgovora('${randomPitanje.d}','${randomPitanje.tacanOdgovor}')" id="pitanjeD">
                        <span>D.</span> ${randomPitanje.d}
                    </p>
                </div>`        
    }
    const postaviPitanjeIOdgovor = (trenutnoPitanje) => {
        if (trenutnoPitanje == 1) {
            let brojPitanja = Math.floor(Math.random() * laksaPitanja1.length)
            randomPitanje = laksaPitanja1[brojPitanja]
            pitanje.innerHTML = randomPitanje.pitanje;
            postaviSvaPitanja(randomPitanje)
        }

        else if (trenutnoPitanje == 2) {
            let brojPitanja = Math.floor(Math.random() * laksaPitanja2.length)
            randomPitanje = laksaPitanja2[brojPitanja]
            pitanje.innerHTML = randomPitanje.pitanje;
            postaviSvaPitanja(randomPitanje)
        }


        else if (trenutnoPitanje == 3) {
            let brojPitanja = Math.floor(Math.random() * laksaPitanja3.length)
             randomPitanje = laksaPitanja3[brojPitanja]
            pitanje.innerHTML = randomPitanje.pitanje;
            postaviSvaPitanja(randomPitanje)
        }

        else if (trenutnoPitanje == 4) {
            let brojPitanja = Math.floor(Math.random() * laksaPitanja4.length)
            randomPitanje = laksaPitanja4[brojPitanja]
            pitanje.innerHTML = randomPitanje.pitanje;
            postaviSvaPitanja(randomPitanje)
        }

        else if (trenutnoPitanje == 5) {
            let brojPitanja = Math.floor(Math.random() * laksaPitanja5.length)
            randomPitanje = laksaPitanja5[brojPitanja]
            pitanje.innerHTML = randomPitanje.pitanje;
            postaviSvaPitanja(randomPitanje)

        }

        else if (trenutnoPitanje == 6) {
            let brojPitanja = Math.floor(Math.random() * srednjaPitanja1.length)
            randomPitanje = srednjaPitanja1[brojPitanja]
            pitanje.innerHTML = randomPitanje.pitanje;
            postaviSvaPitanja(randomPitanje)

        }


        else if (trenutnoPitanje == 7) {
            let brojPitanja = Math.floor(Math.random() * srednjaPitanja2.length)
            randomPitanje = srednjaPitanja2[brojPitanja]
            pitanje.innerHTML = randomPitanje.pitanje;
            postaviSvaPitanja(randomPitanje)
        }

        else if (trenutnoPitanje == 8) {
            let brojPitanja = Math.floor(Math.random() * srednjaPitanja3.length)
            randomPitanje = srednjaPitanja3[brojPitanja]
            pitanje.innerHTML = randomPitanje.pitanje;
            postaviSvaPitanja(randomPitanje)

        }


        else if (trenutnoPitanje == 9) {
            let brojPitanja = Math.floor(Math.random() * srednjaPitanja4.length)
            randomPitanje = srednjaPitanja4[brojPitanja]
            pitanje.innerHTML = randomPitanje.pitanje;
            postaviSvaPitanja(randomPitanje)

        }

        else if (trenutnoPitanje == 10) {
            let brojPitanja = Math.floor(Math.random() * srednjaPitanja5.length)
            randomPitanje = srednjaPitanja5[brojPitanja]
            pitanje.innerHTML = randomPitanje.pitanje;
            postaviSvaPitanja(randomPitanje)
        }


        else if (trenutnoPitanje == 11) {
            let brojPitanja = Math.floor(Math.random() * teskaPitanja1.length)
            randomPitanje = teskaPitanja1[brojPitanja]
            pitanje.innerHTML = randomPitanje.pitanje;
            postaviSvaPitanja(randomPitanje)

        }

        else if (trenutnoPitanje == 12) {
             let brojPitanja = Math.floor(Math.random() * teskaPitanja2.length)
            randomPitanje = teskaPitanja2[brojPitanja]
            pitanje.innerHTML = randomPitanje.pitanje;
            postaviSvaPitanja(randomPitanje)

        }
        else if (trenutnoPitanje == 13) {
             let brojPitanja = Math.floor(Math.random() * teskaPitanja3.length)
            randomPitanje = teskaPitanja3[brojPitanja]
            pitanje.innerHTML = randomPitanje.pitanje;
            postaviSvaPitanja(randomPitanje)

        }
        else if (trenutnoPitanje == 14) {
             let brojPitanja = Math.floor(Math.random() * teskaPitanja4.length)
            randomPitanje = teskaPitanja4[brojPitanja]
            pitanje.innerHTML = randomPitanje.pitanje;
            postaviSvaPitanja(randomPitanje)
        }
        else if (trenutnoPitanje == 15) {
             let brojPitanja = Math.floor(Math.random() * teskaPitanja5.length)
            randomPitanje = teskaPitanja5[brojPitanja]
            pitanje.innerHTML = randomPitanje.pitanje;
            postaviSvaPitanja(randomPitanje)

        }
    }
    postaviPitanjeIOdgovor(trenutnoPitanje);

   
    let niz = [0,100, 200, 300, 500, 1000,2000, 4000, 8000,16000,32000,64000,125000,250000,500000,1000000];

       const provjeraOdgovora = (izabraniOdgovor, tacanOdgovor) => {
              if (izabraniOdgovor===tacanOdgovor){
                let listaNagrada = document.querySelectorAll(".uredi");
                for (let i = 0; i < trenutnoPitanje; i++) {
                      listaNagrada[i].style.backgroundColor = "lightcoral";}
              	trenutnoPitanje++;
                rezultat=niz[trenutnoPitanje-1];
               
                if(trenutnoPitanje<=15){
                	postaviPitanjeIOdgovor(trenutnoPitanje);
                }
              	else if(trenutnoPitanje>15){
                porukaParagraf.innerHTML=`Čestitamo Vam! Postali ste PMF milioner`
                poruka.style.display="block";
                pitanje.style.display="none";
                postaviSvaPitanjaVar.style.display="none"; 
              }
           
            }
            else if(izabraniOdgovor!=tacanOdgovor){
            	trenutnoPitanje=1;
            	porukaParagraf.innerHTML=`Pogrešan odgovor! Osvojili ste ${rezultat} Linus bodova!`
                poruka.style.display="block";
                pitanje.style.display="none"; 
                postaviSvaPitanjaVar.style.display="none";
                }
        }

        function novaIgra()  {
            let listaNagrada = document.querySelectorAll(".uredi");
            for (let i = 0; i < 15; i++) {
                    listaNagrada[i].style.backgroundColor = "lightblue";}
        	trenutnoPitanje=1;
            rezultat=0;
            listaNagrada=[];
            document.getElementById("dugme50").disabled = false;
            document.getElementById("dugmePrijatelj").disabled = false;
            document.getElementById("dugmePublike").disabled = false;
            poruka.style.display="none";
            pitanje.style.display="block"; 
            postaviSvaPitanjaVar.style.display="block"
            postaviPitanjeIOdgovor(trenutnoPitanje);
        }
      
        
        function pomoc(){
        const odgovorA=document.getElementById("pitanjeA")
        const odgovorB=document.getElementById("pitanjeB")
        const odgovorC=document.getElementById("pitanjeC")
        const odgovorD=document.getElementById("pitanjeD")
            let brojacNetacnih=0;
            if(brojacNetacnih<2 && randomPitanje.a!=randomPitanje.tacanOdgovor){
                  odgovorA.style.display="none";
                  brojacNetacnih++;   
            }
            if(brojacNetacnih<2 && randomPitanje.b!=randomPitanje.tacanOdgovor){
                  odgovorB.style.display="none";
                  brojacNetacnih++;
            }
            if(brojacNetacnih<2 && randomPitanje.c!=randomPitanje.tacanOdgovor){
                  odgovorC.style.display="none";
                  brojacNetacnih++;
            }
            if(brojacNetacnih<2 && randomPitanje.d!=randomPitanje.tacanOdgovor){
                  odgovorD.style.display="none";
                  brojacNetacnih++;
            }
            
             document.getElementById("dugme50").disabled = true;
        }

        function pomocPrijatelja() {
         if (trenutnoPitanje <= 5) {
           alert(`Šansa da je tačan odgovor ${randomPitanje.tacanOdgovor} je 70%`);
        }
        if (trenutnoPitanje > 5 && trenutnoPitanje <= 10) {
          alert(`Šansa da je tačan odgovor ${randomPitanje.tacanOdgovor} je 65%`);
        }
        if (trenutnoPitanje > 10 && trenutnoPitanje <= 15) {
             alert(`Šansa da je tačan odgovor ${randomPitanje.tacanOdgovor} je 60%`);
        }
          document.getElementById("dugmePrijatelj").disabled = true;
        }

     

         function pomocPublike() {
         if (trenutnoPitanje <= 5) {
           alert(`Publika misli da je ${randomPitanje.tacanOdgovor} tačan odgovor sa vjerovatnoćom 70%`);
        }
        if (trenutnoPitanje > 5 && trenutnoPitanje <= 10) {
          alert(`Publika misli da je  ${randomPitanje.tacanOdgovor} tačan odgovor sa vjerovatnoćom 65%`);
        }
        if (trenutnoPitanje > 10 && trenutnoPitanje <= 15) {
             alert(`Publika misli da je  ${randomPitanje.tacanOdgovor} tačan odgovor sa vjerovatnoćom 60%`);
        }
          document.getElementById("dugmePublike").disabled = true;
        }
  
  