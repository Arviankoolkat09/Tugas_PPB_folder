import React from 'react';
import { View, Text } from 'react-native';

const JudulAplikasi = () => {
  return (
    <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 15 }}>
      Aplikasi Data Siswa SMK
    </Text>
  );
};


const KartuSiswa = ({ nama, kelas }) => {
  return (
    <View style={{ padding: 15, marginTop: 10, backgroundColor: '#DCFCE7', borderRadius: 8 }}>
      <Text>Nama Siswa: {nama}</Text>
      <Text>Kelas: {kelas}</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={{ padding: 25, marginTop: 40 }}>
      <JudulAplikasi />

      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Daftar Siswa</Text>
      <KartuSiswa nama="Nama Anda Sendiri" kelas="XI RPL 1" />
      <KartuSiswa nama="Budi Santoso" kelas="XI RPL 2" />
      <KartuSiswa nama="Siti Aminah" kelas="XII TKJ 1" />
    </View>
  );
}
