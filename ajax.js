var button = document.getElementById('rq-button');
var disp = document.getElementById('cities');
const optionOpenStart = '<option value="';
const optionOpenFinish = '">';
const optionClose = '</option>';
button.addEventListener('click', sendRequest);

function sendRequest() {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', addCitiesNames);
    request.open('GET', 'https://datanova.laposte.fr/api/records/1.0/search/?dataset=laposte_hexasmal&q=12000&facet=code_commune_insee&facet=nom_de_la_commune&facet=code_postal&facet=libell_d_acheminement&facet=ligne_5');
    request.send();

}

function addCitiesNames(e) {
    //Displays the list of cities. Each city is represented as an element <option> of the element <select>
    if (e.currentTarget.readyState === XMLHttpRequest.DONE && e.currentTarget.status === 200) {
        var HTML = '';
        var list = JSON.parse(e.currentTarget.responseText);
        list.records.forEach(element => {
            HTML += optionOpenStart + element.fields.nom_de_la_commune + optionOpenFinish + element.fields.nom_de_la_commune + optionClose;
        });
        disp.innerHTML = HTML;
    } else {
        disp.innerHTML = 'Impossible de charger la liste des communes';
    }
}