function printNumber(promise) {
  promise
    .then(res => {
      if (typeof res === 'number') {
        console.log('Value:', res);
      } else {
        console.log('Error:', res);
      }
    })
    .catch(err => {
      console.log('Error:', err);
    })
    .finally(() => {
      console.log('All done');
    });
}

module.exports = printNumber;
