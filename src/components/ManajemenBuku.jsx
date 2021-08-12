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
      <div id="daftarBuku">
        <h2 className="mt-3">Daftar Buku</h2>
        <hr />
        <button className="btn btn-primary m-2">Tambah Buku</button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>No.</th>
              <th>Judul</th>
              <th>Stok</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {bookList.map((book, index) => (
              <tr key={index}>
                <td> {index + 1}</td>
                <td> {book.judul} </td>
                <td> {book.stok} </td>
                <td>
                  <button className="btn btn-info mr-3">Edit</button>
                  <button className="btn btn-danger">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ManajemenBuku;
