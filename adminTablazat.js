export function adminTablazatLetrehoz(lista){
    let txt = "<div class='table-responsive'><table class='table'>";
    txt += "<thead>";
    txt += "<tr class='table-dark'><th>Cím</th><th>Kép</th><th>Ár (Ft)</th></th></th><th></th></tr>"
    txt += "</thead>";
    txt += "<tbody>";
    lista.forEach((elem, index) => {
        txt += `<tr class='table-info'>
            <td id="Nev${index}" contentEditable=${elem.Szerkesztheto?"true":"false"}>${elem.Nev}</td>
            <<td><img src="${elem.Kep}" alt="kep" width="226" height="170"></td>
            <td id="Ar${index}" contentEditable=${elem.Szerkesztheto?"true":"false"}>${elem.Ar}</td>
            <td><button id="${index}" class="torol">❌</button></td>
            <td><button id="${index}" class="szerkeszt">${elem.Szerkesztheto?"✔️":"✏️"}</button></td>
        </tr>`
    });
    txt += "</tbody>"
    txt += "</table></div>";
    return txt
}
export function megjelenit(txt){
    const ELEM=$(".adatok")
    ELEM.html(txt)
}