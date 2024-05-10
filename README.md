# Listakezelő függvények - Webáruház
## Specifikáció
Készíts "webáruházat" tetszőleges témában. Egy listában tároljuk az objektumokat, minden objektumnak legalább 3 adata legyen! Az adatokat jelenítsd meg egy táblázatban! A formázáshoz bootstrap-et használj! A táblázat fejlécére kattintva tudjunk rendezni növekvő, illetve csökkenő sorrendbe az adatokat (Egyszer kattintunk növekvő, mégegyszer- csökkenő sorrendben az adott fejléc szerint) Az elv: a listádat rendezd, majd hívd meg újra az oldal megjelenítését! Készíts 3 szűrés mezőt, amiben kiválasztott mezők alapján szűrheted az adataidat! ++ A táblázat minden sora mellett legyen egy törlés gomb, amivel az adott sort tudjuk törölni a táblázatból. ++++ A táblázat minden sora mellett legyen egy szerkesztés gomb, ahol tudjuk szerkeszteni a lista adott sorát!

## Publikus felület
1. Div-ekben jelenítsük meg az adatokat.
2. Reszponzivitás.
3. Az oldalon legyen szűrési és rendezési lehetőség is!
4. Kosár funkció: A publikus felületen a terméket helyezheted a kosárba. A kosárban lévő termékeket listázhatod, törölheted, módosíthatod az elemszámát, majd leadhatod a rendelést!
5. ++ Lehet, hogy szükséged lesz a localStorage használatára.
6. ++ Ilyenkor készíthetsz a kosárba tett termékekről egy PDF dokumentumot is.
7. ++ Minden termékhez (divhez) tartozik egy gomb, amivel meg tudjuk nézni azt az egyetlen terméket.
8. A kiemelt termék mellett megjelenik egy bal és egy jobb léptető gomb, amivel léptetni tudjuk a terméket.
## Függvények
1. ***publikusTABLAZAT(lista)***->

2.***publikuTABLAZATmegjelenit(txt)***->

3.***rendezes(ADATOK)***->

3.***initpublikusTABLAZAT(lista)***->

4.***init(ADATOK)***->

5.***szuresNev(ADATOK)***->

6.***szuresArSzerint(ADATOK)***->

7.***szuresNevSzerint(ADATOK)***->

8.***adminTablazatLetrehoz(lista)***->

8.***torol(ADATOK)***->

8.***megjelenit(txt)***->
