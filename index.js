const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (daftarNama, fnUrutan) => {
  const urutan = fnUrutan(daftarNama);
  const hasil = [];
  for (let index = 0; index < urutan.length; index++) {
    // const nama = urutan[index];
    hasil.push(index + 1 + ". " + daftarNama[index] );
  }
  return hasil;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (daftarNama) => {
  daftarNama.sort();
  return daftarNama;
};
// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (daftarNama) => {
  daftarNama.sort().reverse();
  return daftarNama;
};
// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
