// Panggil komponen yang telah dibuat disini agar tampil ke browser

import DaftarSiswa from "./latihan/soal-3";
import StudentCard from "./latihan/soal-1";
import TaskItem from "./latihan/soal-2";
import FormSiswa from "./latihan/soal-4";

function App() {
  return (
    <div className="w-screen flex flex-col items-center gap-6 pt-10">
      {/* Panggil komponen dari soal latihan dibawah sini*/}
      <div className="flex flex-col gap-3 w-full max-w-md">
        <StudentCard nama="Alya Putri" kelas="XI RPL 1" statusLulus={true} />
        <StudentCard nama="Budi Santoso" kelas="XI RPL 2" statusLulus={false} />
        <StudentCard nama="Citra Dewi" kelas="XI RPL 1" statusLulus={true} />

       <TaskItem
          judul="Mengerjakan Tugas React"
          prioritas="tinggi"
          selesai={false}
        />
        <TaskItem
          judul="baca Dokumentasi JSX"
          prioritas="sedang"
          selesai={true}
        />
        <TaskItem
          judul="Push Kode ke GitHub"
          prioritas="tinggi"
          selesai={true}
        />


      </div>

      {/* Khusus soal 3, Panggil di dalam div ini*/}
      <div className="flex flex-col gap-3">
        <DaftarSiswa />
      </div>

      <FormSiswa />
    </div>
  );
}

export default App;