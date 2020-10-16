document.addEventListener("DOMContentLoaded", function(){
    let total = document.getElementById('total');
    let perawatan = document.getElementById('perawatan');
    let sembuh = document.getElementById('sembuh');
    let meninggal = document.getElementById('meninggal');
    loadData();
    function loadData() {
        var xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            if (this.readyState == 4) {
                if (this.status != 200) return;
                const res= JSON.parse(this.responseText);
                total.innerHTML = `<p class="total">${res.jumlahKasus}</p>`
                perawatan.innerHTML = `<p class="perawatan">${res.perawatan}</p>`
                sembuh.innerHTML = `<p class="sembuh">${res.sembuh}</p>`
                meninggal.innerHTML = `<p class="meninggal">${res.meninggal}</p>`
            }
        };
        xhttp.open("GET", "https://indonesia-covid-19.mathdro.id/api/", true);
        xhttp.send();
    }
});