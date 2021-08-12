import React, { useState } from "react";

function ManajemenBuku({ bookList }) {
  console.log(bookList);
  const [form, setForm] = useState("");
  const [inputBook, setInputBook] = useState();
  //data

  //eventhandling
  function showCreate() {
    setForm("create");
  }

  function showEdit(book) {
    setInputBook(book);
    setForm("edit");
  }

  return (
    <div className="container mt-3">
      <h1 className="text-center">Manajemen Buku</h1>
      {form == "create" && (
        <div id="formTambah">
          <h5>Tambah Buku</h5>
          <hr />
          <form className="row">
            <div className="col-3">
              <input type="text" name="judul" className="form-control mx-2" placeholder="Judul" />
            </div>
            <div className="col-2">
              <input type="number" name="stok" className="form-control mx-2" placeholder="Stok" />
            </div>
            <div className="col-2">
              <input type="submit" className="btn btn-success ml-5" value="Simpan" />
            </div>
          </form>
        </div>
      )}

      {form == "edit" && (
        <div id="formUbah">
          <h5>Ubah Buku</h5>
          <hr />
          <form className="row">
            <div className="col-3">
              <input
                type="text"
                name="judul"
                className="form-control mx-2"
                placeholder="Judul"
                value={inputBook.judul}
              />
            </div>
            <div className="col-2">
              <input
                type="number"
                name="stok"
                className="form-control mx-2"
                placeholder="Stok"
                value={inputBook.stok}
              />
            </div>
            <div className="col-2">
              <input type="submit" className="btn btn-warning ml-2" value="Ubah" />
              <input type="button" className="btn btn-danger ml-2" value="Batal" />
            </div>
          </form>
        </div>
      )}

      <div id="daftarBuku">
        <h2 className="mt-3">Daftar Buku</h2>
        <hr />
        <button className="btn btn-primary m-2" onClick={showCreate}>
          Tambah Buku
        </button>
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
                  <button className="btn btn-info mr-3" onClick={() => showEdit(book)}>
                    Edit
                  </button>
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
