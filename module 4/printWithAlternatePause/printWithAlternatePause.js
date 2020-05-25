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

let data = [
  [1, 2, 3],
  ['H', 'T', 'T', 'P', 'S'],
  [4, 5],
];

printWithAlternatePauses(data, 500, 2000);
