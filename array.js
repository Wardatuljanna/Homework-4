// Fungsi untuk membuat array dengan 100 nilai random yang terdiri dari 1 sampai 50 menggunakan math random
function membuatArrayRandom(length) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
      const randomValue = Math.floor(Math.random() * 50) + 1;
      randomArray.push(randomValue);
    }
    return randomArray;
  }
  const randomArray = membuatArrayRandom(100);
  console.log("------- 100 Nilai Random dengan Range (1-50) ------- \n",  randomArray, "\n");
 
  // Fungsi untuk membagi array menjadi 2 array (genap dan ganjil)
  function bagiArrayByIndex(arr) {
    const ArrayGenap = [];
    const ArrayGanjil = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        ArrayGenap.push(arr[i]);
      } else {
        ArrayGanjil.push(arr[i]);
      }
    }
    return [ArrayGenap, ArrayGanjil];
  }
  const [ArrayGenap, ArrayGanjil] = bagiArrayByIndex(randomArray);
  console.log("----------------- 50 Nilai Genap  ----------------- \n", ArrayGenap, "\n");
  console.log("----------------- 50 Nilai Ganjil ----------------- \n ", ArrayGanjil, "\n");
 
  // Fungsi untuk menghitung nilai minimum dalam array
  function hitungMin(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  const minGenap = hitungMin(ArrayGenap);
  const minGanjil = hitungMin(ArrayGanjil);
 
  // Fungsi untuk menghitung nilai maksimum dalam array
  function hitungMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  const maxGenap = hitungMax(ArrayGenap);
  const maxGanjil = hitungMax(ArrayGanjil);
 
  // Fungsi untuk menghitung total nilai dalam array
  function hitungTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
  const totalGenap = hitungTotal(ArrayGenap);
  const totalGanjil = hitungTotal(ArrayGanjil);
 
  // Fungsi untuk menghitung rata-rata nilai dalam array
  function hitungRerata(arr) {
    const total = hitungTotal(arr);
    return total / arr.length;
  }
  const averageGenap = hitungRerata(ArrayGenap);
  const averageGanjil = hitungRerata(ArrayGanjil);
 
  // Menghitung nilai minimal, maximal, total, dan rata-rata untuk array genap
  console.log("---------- Min, Max, Total, Rata-rata pada Nilai Genap ----------");
  console.log("Minimal Nilai Genap: ", minGenap);
  console.log("Maximal Nilai Genap: ", maxGenap);
  console.log("Total Nilai Genap: ", totalGenap);
  console.log("Rata-rata Nilai Genap: ", averageGenap, "\n");
  // Menghitung nilai minimal, maximal, total, dan rata-rata untuk array ganjil
  console.log("---------- Min, Max, Total, Rata-rata pada Nilai Ganjil ----------");
  console.log("Minimal Nilai Ganjil: ", minGanjil);
  console.log("Maximal Nilai Ganjil: ", maxGanjil);
  console.log("Total Nilai Ganjil: ", totalGanjil);
  console.log("Rata-rata Nilai Ganjil: ", averageGanjil, "\n");
 
  //Log nilai minimal, maximal, total, dan Rata-Rata pada array genap dan array ganjil
  console.log("--------- Perbandingan nilai Minimum, Maximum, Total dan Rata-Rata ---------");
 
  //Membandingkan nilai minimal pada array genap dan array ganjil
  function bandingNilaiMin(minGenap, minGanjil) {
    if (minGenap === minGanjil) {
      return "Nilai Minimum Pada Array Genap dan Ganjil Sama";
    } else if (minGenap > minGanjil) {
      return "Nilai Minimum Pada Array Genap Lebih Besar Dari Array Ganjil";
    } else {
      return "Nilai Minimum Pada Array Ganjil Lebih Besar Dari Array Genap";
    }
  }
  const hasilBandingMin = bandingNilaiMin(minGenap, minGanjil);
  console.log("Perbandingan nilai Minimum:", hasilBandingMin);
 
  //Membandingkan nilai maximum pada array genap dan array ganjil
  function bandingNilaimax(maxGenap, maxGanjil) {
    if (maxGenap === maxGanjil) {
      return "Nilai Maksimum Pada Array Genap dan Ganjil Sama";
    } else if (maxGenap > maxGanjil) {
      return "Nilai Maksimum Pada Array Genap Lebih Besar Dari Array Ganjil";
    } else {
      return "Nilai Maksimum Pada Array Ganjil Lebih Besar Dari Array Genap";
    }
  }
  const hasilBandingMax = bandingNilaimax(maxGenap, maxGanjil);
  console.log("Perbandingan nilai Maximum:", hasilBandingMax);
 
  //Membandingkan nilai total pada array genap dan array ganjil
  function bandingNilaiTotal(totalGenap, totalGanjil) {
    if (totalGenap === totalGanjil) {
      return "Total Nilai Pada Array Genap dan Ganjil Sama";
    } else if (totalGenap > totalGanjil) {
      return "Total Nilai Pada Array Genap Lebih Besar Dari Array Ganjil";
    } else {
      return "Total Nilai Pada Array Ganjil Lebih Besar Dari Array Genap";
    }
  }
  const hasilBandingTotal = bandingNilaiTotal(totalGenap, totalGanjil);
  console.log("Perbandingan nilai Total:", hasilBandingTotal);
 
  //Membandingkan nilai Rata-Rata pada array genap dan array ganjil
  function bandingNilaiAverage(averageGenap, averageGanjil) {
    if (averageGenap === averageGanjil) {
      return "Rata-rata Nilai Pada Array Genap dan Ganjil Sama";
    } else if (averageGenap > averageGanjil) {
      return "Rata-rata Nilai Pada Array Genap Lebih Besar Dari Array Ganjil";
    } else {
      return "Rata-rata Nilai Pada Array Ganjil Lebih Besar Dari Array Genap";
    }
  }
  const hasilBandingAverage = bandingNilaiAverage(averageGenap, averageGanjil);
  console.log("Perbandingan nilai Rata-Rata:", hasilBandingAverage);