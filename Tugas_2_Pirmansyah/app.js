class Produk {
  constructor(kode_produk, nama_produk, merk, harga_produk, volume_produk, status_produk){
      this.kode_produk = kode_produk;
      this.nama_produk = nama_produk;
      this.merk = merk;
      this.harga_produk = harga_produk;
      this.volume_produk = volume_produk;
      this.status_produk = status_produk;
  }
}
class UI
{
  addProduk(produk){

   let harga = this.changeFormat(produk.harga_produk);
   let vol = this.changeFormat(produk.volume_produk);

   document.getElementById('show-kode-prod').value = produk.kode_produk;
   document.getElementById('show-nama-prod').value = produk.nama_produk;
   document.getElementById('show-merk').value = produk.merk;
   document.getElementById('show-harga-prod').value = harga;
   document.getElementById('show-volume-prod').value = vol;
   document.getElementById('show-status-prod').value = produk.status_produk;
  }
  clearField(){
          document.getElementById('kode-produk').value = '';
          document.getElementById('nama-produk').value = '';
          document.getElementById('merk').value = '';
          document.getElementById('harga-produk').value = '';
          document.getElementById('volume-produk').value = '';
          document.getElementById('status-produk').value = '';

          document.getElementById('show-kode-prod').value = '';
          document.getElementById('show-nama-prod').value = '';
          document.getElementById('show-merk').value = '';
          document.getElementById('show-harga-prod').value = '';
          document.getElementById('show-volume-prod').value = '';
          document.getElementById('show-status-prod').value = '';      
  }
  changeFormat(data){
    let	reverse = data.toString().split('').reverse().join(''),
        after 	= reverse.match(/\d{1,3}/g);
        after	  = after.join('.').split('').reverse().join('');
        return after;
  }
  showAlert(desc){
      alert(`${desc} harus di isi ⚠️`);
  }
}
document.getElementById('simpan-data').addEventListener('click', function(e){

const ui = new UI();

const kode_produk = document.getElementById('kode-produk').value,
      nama_produk = document.getElementById('nama-produk').value,
      merk = document.getElementById('merk').value,
      harga_produk =  document.getElementById('harga-produk').value,
      volume_produk = document.getElementById('volume-produk').value,
      status_produk = document.getElementById('status-produk').value;

  const produk = new Produk(kode_produk, nama_produk, merk, harga_produk, volume_produk, status_produk);

  e.preventDefault();

  if(kode_produk == "") {
      ui.showAlert('Kode produk');
      return false;
  }
  if(nama_produk == "") {
      ui.showAlert('Nama produk');
      return false;
  }
  if(merk == "") {
      ui.showAlert('Merk');
      return false;
  }
  if(harga_produk == "" || isNaN(harga_produk) ) {
      ui.showAlert('Harga produk');
      return false;
  }
  if(volume_produk == "" || isNaN(volume_produk)) {
      ui.showAlert('Volume produk');
      return false;
  }
  if(status_produk == "") {
      ui.showAlert('Status produk');
      return false;
  }
  let confrm = confirm("Apakah anda yakin akan menyimpan data ini❓❓");
  if(confrm == true) {
      ui.addProduk(produk);
  } else {
      return false;
  }  
});
document.getElementById('data-baru').addEventListener('click', function(e){
  const ui = new UI();
  e.preventDefault();

  let confrmasi = confirm("Apakah anda yakin akan membuat data baru❓❓");

  if(confrmasi == true) {
      ui.clearField();
  } else {
      return false;
  } 
});
