export function publikusTABLAZAT(lista) {
  let txt = "";
  lista.forEach((elem, index) => {
    txt += `<div class="card" style="width:400px">
        <div class="card-body">
          <h4 class="card-title">${elem.Nev}</h4>
          <img class="card-img-top" src="${elem.Kep}" alt="Card image">
          <p class="card-text">Nettó ár: ${elem.Netto_ar}</p>
          <p class="card-text">Garancia: ${elem.Garancia}</p>
          <p class="card-text">Szállítás: ${elem.Szallitas}</p>
          <p class="card-text">Regisztrációs adó: ${elem.Regisztracios_ado}</p>
          <p class="card-text">Teljes nettó ár: ${elem.Teljes_netto_ar}</p>
          <p class="card-text">Teljes bruttó ár: ${elem.Teljes_brutto_ar}</p>
          <a href="#" class="btn btn-primary">See Profile</a>
        </div>
      </div>`

  });
  return txt;
}
export function publikuTABLAZATmegjelenit(txt) {
  const ELEM = $(".kartyak")
  ELEM.html(txt)
}