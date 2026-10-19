let studentsScore = [
  {
    name: 'Andi',
    score: 90
  },
  {
    name: 'Rudi',
    score: 80
  },
  {
    name: 'Dira',
    score: 100
  }
];

// Inisialisasi variabel untuk menyimpan data siswa dengan nilai tertinggi
let topStudent = studentsScore[0];

for (let student of studentsScore) {
  if (student.score > topStudent.score) {
    topStudent = student;
  }
}

console.log(`Nama: ${topStudent.name}, Nilai: ${topStudent.score}`);