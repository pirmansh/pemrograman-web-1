document.addEventListener("DOMContentLoaded", function(){
    loadData();
    function loadData() {
        var xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            if (this.readyState == 4) {
                if (this.status != 200) return;
                const res= JSON.parse(this.responseText);
                let tabel = '';
                let counter = 1;
                res.rs.forEach( function( item ) { 
                    tabel += `
                    <tr>
                        <td class="text-center" data-label="No">${counter++}</td>
                        <td data-label="Nama RS">${item.name}</td>
                        <td data-label="Alamat">${item.address}</td>
                        <td data-label="Kota">${item.region}</td>
                        <td class="text-center" data-label="Phone">${item.phone}</td>
                        <td class="text-center" data-label="Provinsi">${item.province}</td>
                    </tr>
            `;
            });
            document.getElementById('table').innerHTML = tabel;
            }
        };
        xhttp.open("GET", "https://my-json-server.typicode.com/pirmansh/database/db", true);
        xhttp.send();
    }
});