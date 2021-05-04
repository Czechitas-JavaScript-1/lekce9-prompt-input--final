const sirkaMista = 62;
const vyskaMista = 70;
const hloubkaMista = 80;

let sirkaPracky = parseInt(prompt('Zadejte šířku pračky.'));
let vyskaPracky = parseInt(prompt('Zadejte výšku pračky.'));
let hloubkaPracky = parseInt(prompt('Zadejte hloubku pračky.'));

if (sirkaPracky < sirkaMista && vyskaPracky < vyskaMista && hloubkaPracky < hloubkaMista) {
    alert('Pračka se vleze! Jde se nakupovat :-)');
} else {
    alert('Pračka se nevleze! Hledáme dál :-(');
}