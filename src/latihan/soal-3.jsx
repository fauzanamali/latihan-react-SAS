// Materi: Fragment & Props key pada .map()

/* TODO:
  1. Lengkapi array 'daftarSiswa' minimal 3 data objek dengan properti:
     id (unik),
     nama (string),
     kelas (string).
  2. Bungkus hasil return utama komponen menggunakan Fragment (<>...</>) agar tidak menambah elemen pembungkus berlebih di DOM.
  3. Render 'daftarSiswa' menggunakan method .map() dan pasang props 'key={siswa.id}' pada elemen pembungkus tiap item (misalnya <section key={siswa.id}>).
  4. Tampilkan data 'nama' dan 'kelas' menggunakan interpolasi ({...}) di dalam item yang di-render.
*/

function DaftarSiswa() {
  const daftarSiswa = [
    // Lengkapi minimal 3 data siswa di sini
    {id: 1, nama:"fauzan", kelas:"10B"},
    {id: 2, nama:"Fathi", kelas:"10A"},
    {id: 3, nama:"Fian", kelas:"10B"}


    
  ];

  return (
    <>
      {/* Render daftarSiswa menggunakan .map() dan pasang key={siswa.id} pada elemen terluar tiap item */}
      {daftarSiswa.map((siswa) => (
        <section
          key={siswa.id}
          className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm w-80 flex items-center justify-between gap-4"
        >
          <h3 className="text-base font-semibold text-gray-800">
            {siswa.nama}
          </h3>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700">
            {siswa.kelas}
          </span>
        </section>
      ))};
    </>
  );
}

export default DaftarSiswa;

// 1. Mengapa props 'key' wajib dipasang pada elemen terluar di dalam .map() dan sebaiknya menggunakan ID unik?
//   Jawaban:
// 2. Apa fungsi Fragment (<>...</>) saat merender elemen di dalam komponen dibandingkan membungkusnya dengan <div>?
//   Jawaban:


















