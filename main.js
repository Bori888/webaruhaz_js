import { ADATOK } from "./adatok.js";
import { publikusTABLAZAT, publikuTABLAZATmegjelenit } from "./publikusTablazat.js";

initpublikusTABLAZAT(ADATOK);

function initpublikusTABLAZAT(lista) {
    let txtKartya = publikusTABLAZAT(lista);
    publikuTABLAZATmegjelenit(txtKartya);
}

