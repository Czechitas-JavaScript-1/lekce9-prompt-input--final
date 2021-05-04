/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
    let c = a + b;
    return c;
}

const vysledekElement = document.querySelector('#vysledek > span');

document.getElementById('tlacitko-secti').addEventListener('click', () => {
    let prvni = parseInt(document.querySelector('input[name=a]').value);
    let druhe = parseInt(document.querySelector('input[name=b]').value);
    vysledekElement.innerHTML = secti(prvni, druhe);
});