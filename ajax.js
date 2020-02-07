var cp = document.getElementById('cp');
var city = document.getElementById('city');
var dialog = document.getElementById('dialog');
cp.addEventListener('input', sendRequest);

function sendRequest() {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', addCitiesNames);
    request.open('GET', `https://datanova.laposte.fr/api/records/1.0/search/?dataset=laposte_hexasmal&q=${cp.value}&facet=code_commune_insee&facet=nom_de_la_commune&facet=code_postal&facet=libell_d_acheminement&facet=ligne_5`);
    request.send();

}

function addCitiesNames(e) {
    if (e.currentTarget.readyState === XMLHttpRequest.DONE && e.currentTarget.status === 200) {
        var HTML = '';
        var list = JSON.parse(e.currentTarget.responseText);
        list.records.forEach(element => {
            HTML += `<div>${element.fields.nom_de_la_commune}</div>`;
        });
        dialog.innerHTML = HTML;
        propositions = dialog.querySelectorAll('div');
        propositions.forEach(proposition => {
            proposition.addEventListener('click', cityChoice);
        });
        dialog.style.display = 'block';
    } else {
        console.log('Impossible de charger la liste des communes');
    }
}

function cityChoice(e) {
    city.value = e.currentTarget.innerHTML;
    dialog.style.display = 'none';
}