var banditartozas = document.getElementById("banditartozas")
var fandortartozas = document.getElementById("fandortartozas")
var pityutartozas = document.getElementById("pityutartozas")
var szanditartozas = document.getElementById("szanditartozas")
var annatartozas = document.getElementById("annatartozas")

var initial_tartozasok = [6100, 15350, 1350, 1350, 7150]
var tartozas_elements = [banditartozas, fandortartozas, pityutartozas, szanditartozas, annatartozas]

var startdate = new Date(2025, 8) //Ekkor volt a legutolsó árváltoztatás, 2025 szeptemberben, a 8 az szeptember, mert a hónapokat 0-tól indexeli.
var currentdate = new Date(Date.now())

var difference = monthDiff(startdate, currentdate)
const PRICE = 700

var vegso_tartozasok = []

for (let i = 0; i<initial_tartozasok.length; ++i){
    vegso_tartozasok.push(initial_tartozasok[i] + difference * PRICE)
}

for (let i = 0; i<vegso_tartozasok.length; ++i){
    tartozas_elements[i].innerHTML = vegso_tartozasok[i].toString() + " HUF"
}


function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}
