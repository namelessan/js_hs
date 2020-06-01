const sleep = (data, ms) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(data);
    }, ms)
  );
};

const printWithAlternatePauses = async (data, sTime, lTime) => {
  for (const row of data) {
    await sleep(row, lTime).then(async (row) => {
      for (const e of row) {
        await sleep(e, sTime).then((e) => console.log(e));
      }
    });
  }
};

// function printWithAlternatePauses(data, sTime, lTime) {
//   for (let i = 0; i < data.length; i++) {
//     const row = data[i];
//     setTimeout(async () => {
//       for (let j = 0; j < row.length; j++) {
//         const e = row[j];
//         setTimeout(() => {
//           console.log(e);
//         }, sTime * j);
//       }
//     }, lTime * i);
//   }
// }

let data = [
  [1, 2, 3],
  ['H', 'T', 'T', 'P', 'S'],
  [4, 5],
];

printWithAlternatePauses(data, 500, 2000);
