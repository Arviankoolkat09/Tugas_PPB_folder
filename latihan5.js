const tampilJudul = () => 'Aplikasi Data Siswa';
const tampilKelas = kelas => 'Saya dari kelas ' + kelas;
const tambahAngka = (a, b) => a + b;
const cekPassword = pass => pass === '11241992' ? 'Login Berhasil' : 'Password Salah';
const data = { nis: '101', alamat: 'Cibinong' };
const { nis, alamat } = data;

console.log(tampilJudul());          
console.log(tampilKelas('XI RPL')); 
console.log(tambahAngka(10, 5));     
console.log(cekPassword('11241992'));    
console.log(nis, alamat);            
