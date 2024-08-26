import { ADATOK } from "./adatok.js";
import { publikusTablazatLetrehoz, publikusTablazatMegjelenit } from "./publikusTablazat.js";
import {rendez, szerkeszt, szuresAr, szuresNev, szuresLeiras, torol}  from "./adatkezelo.js";
import { adminTablazatLetrehoz, megjelenit } from "./adminTablazat.js";
import { kosarLetrehoz,kosarLetrehoz, kosarMegjelenit } from "./kosar.js";

let kosarTomb = [];
init(ADATOK);
szuresArSzerint();
szuresNevSzerint();
szuresLeirasSzerint();
rendezes(ADATOK);
adatokKonzolraIr();
initPublikusTablazat(lista);

function initPublikusTablazat(lista){
  let txtKartya = publikusTablazatLetrehoz(lista);
  publikusTablazatMegjelenit(txtKartya);
}

function init(lista) {
  let txt = adminTablazatLetrehoz(lista);
  adminTablazatLetrehoz(lista);
  megjelenit(txt);
  initPublikusTablazat(lista);
  szerkesztesemeny();
  torolesemeny();
  kosarbaRak();
}

function rendezes(ADATOK) {
    const SELECT =$(".options")
    SELECT.on("change", function(){
        if (this.value == "nevcsokkeno"){
            const lista =rendez(ADATOK,"Nev",-1);
            console.log(lista);
            init(lista);
            
        }
        else if (this.value == "nevnovekvo"){
            const lista =rendez(ADATOK,"Nev",1);
            console.log(lista);
            init(lista);
            
        }
        else if (this.value == "arcsokkeno"){
            const lista =rendez(ADATOK,"Teljes_brutto_ar",-1);
            console.log(lista);
            init(lista);
            
        }
        else if (this.value == "arnovekvo"){
            const lista =rendez(ADATOK,"Teljes_brutto_ar",1);
            console.log(lista);
            init(lista);
            
        }
        else if(this.value == "default"){
            init(lista);
          }

    })
    
}

function szuresArSzerint() {
    const szuroElem = $(".kereses_ar");
    szuroElem.on("keyup",function () {
        let szoveg = szuroElem.val();
        init(szuresAr(ADATOK, szoveg));  
    });
    
}

function szuresNevSzerint() {
    const szuroElem = $(".kereses_nev");
    szuroElem.on("keyup", function () {
      let szoveg = szuroElem.val();
      init(szuresNev(ADATOK, szoveg));
    });
}

function szuresLeirasSzerint() {
    const szuroElem = $(".szleiras");
    szuroElem.on("keyup", function () {
      let szoveg = szuroElem.val();
      init(szuresLeiras(ADATOK, szoveg));
    });
}

function torolesemeny(){
    const torolELEM=$(".kartyak")
    torolELEM.on("click", function(event){
      let index = event.target.id;
      const LISTA = torol(ADATOK, index)
      init(LISTA)
    })
}
  
export function kosarTorolEsemeny(){
    const torolELEM=$(".kosarTorol")
    torolELEM.on("click", function(event){
      let index = event.target.id;
      const LISTA = torol(kosarTomb, index)
      let txtKosar = kosarLetrehoz(kosarTomb);
      kosarMegjelenit(txtKosar);
      vegosszegEsemeny();
    })
}
  
function szerkesztesemeny(){
    const szerkesztELEM = $(".szerkeszt")
    szerkesztELEM.on("click", function(event){
      let index = event.target.id;
      const LISTA = szerkeszt(ADATOK, index)
      init(LISTA)
    })
}
  
function kosarbaRak(){
    const GOMB = $('.kosarba')
    GOMB.on("click", function(event){
        console.log(event.target.id.replace('pub', ''))
        let index = event.target.id.replace('pub', '')
        index = Number(index)
        let ujElem = ADATOK[index];
        console.log(index)
        let voltBenne = false
        
        kosarTomb.forEach(elem => {
          if(elem.cim == ujElem.cim){
            elem.dbszam++;
            console.log(ujElem)
            voltBenne = true;
          }
  
        });
        if (!voltBenne){
          ujElem.dbszam = 1;
          kosarTomb.push(ujElem)
       }
  
       vegosszegEsemeny();
       let txtKosar = kosarLetrehoz(kosarTomb);
    
       kosarMegjelenit(txtKosar);
    })
}
  
function vegosszegEsemeny(){
    let vegosszeg = 0
    kosarTomb.forEach(elem =>{
      vegosszeg += elem.dbszam*elem.ar
     })
     const vegosszegkiir = $('.vegosszeg')
     vegosszegkiir.html("<h4>Végösszeg: " + vegosszeg + " Ft</h4>")
}
  
function adatokKonzolraIr(){
    const szemelyesAdatForm = $('.urlap')
    szemelyesAdatForm.on("submit", function(event){
      for (let index = 0; index < event.target.length; index++) {
        console.log(event.target[index].id, event.target[index].value)
      }
    })
}