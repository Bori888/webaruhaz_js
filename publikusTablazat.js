export function publikusTablazatLetrehoz(lista) {
  let txt = "";
  lista.forEach((elem, index) => {
    txt += `<div class="card" style="width:800px">
        <div class="card-body">
          <h4 class="card-title">${elem.Nev}</h4>
          <img class="card-img-top" src="${elem.Kep}" alt="Card image">
          <p class="card-text">Bevezetés: ${elem.Bevezetes}</p>
          <p class="card-text">Teljesitmény: ${elem.Teljesitmeny}</p>
          <p class="card-text">Sebesség: ${elem.Sebesség}</p>
          <p class="card-text">Gyorsulás: ${elem.Gyorsulas}</p>
          <p class="card-text">Részletek: ${elem.Reszletek}</p>
          <p class="card-text">Dollár Ár: ${elem.Dollar_ar}</p>
          <p class="card-text">Ár: ${elem.Ar}</p>
          <a href="#" class="btn btn-primary">Kosárba</a>
        </div>
      </div>`

  });
  return txt;
}
export function publikusTablazatMegjelenit(txt) {
  const ELEM = $(".kartyak")
  ELEM.html(txt)
}