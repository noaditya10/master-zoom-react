import React from "react";

function ManajemenBuku({ bookList }) {
  console.log(bookList);
  //data

  //eventhandling

  return (
    <div className="container mt-3">
      <h1 className="text-center">Manajemen Buku</h1>

      <div id="formTambah"></div>
      <div id="formUbah"></div>
      <div id="daftarBuku"></div>
    </div>
  );
}
export default ManajemenBuku;
