import { ADATOK } from "./adatok.js";
import { publikusTABLAZAT, publikuTABLAZATmegjelenit } from "./publikusTablazat.js";
import { rendez,szuresAr} from "./adatkezelo.js";
import { adminTablazatLetrehoz, megjelenit } from "./adminTablazat.js";

rendezes(ADATOK);
initpublikusTABLAZAT(ADATOK);
init(ADATOK);
  
function init(lista) {
    let txt = adminTablazatLetrehoz(lista);
    adminTablazatLetrehoz(lista);
    megjelenit(txt);
 }


function initpublikusTABLAZAT(lista) {
    let txtKartya = publikusTABLAZAT(lista);
    publikuTABLAZATmegjelenit(txtKartya);
}

function rendezes(ADATOK) {
    const SELECT =$(".options")
    SELECT.on("change", function(){
        if (this.value == "nevcsokkeno"){
            const lista =rendez(ADATOK,"Nev",-1);
            console.log(lista);
            initpublikusTABLAZAT(ADATOK);
            
        }
        else if (this.value == "nevnovekvo"){
            const lista =rendez(ADATOK,"Nev",1);
            console.log(lista);
            initpublikusTABLAZAT(ADATOK);
            
        }
        else if (this.value == "arcsokkeno"){
            const lista =rendez(ADATOK,"Teljes_brutto_ar",-1);
            console.log(lista);
            initpublikusTABLAZAT(ADATOK);
            
        }
        else if (this.value == "arnovekvo"){
            const lista =rendez(ADATOK,"Teljes_brutto_ar",1);
            console.log(lista);
            initpublikusTABLAZAT(ADATOK);
            
        }
        else if(this.value == "default"){
            initpublikusTABLAZAT(ADATOK);
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