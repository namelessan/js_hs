function hasDuplicatedArguments(...arg) {
  for (let i = 0; i < arg.length - 1; i++) {
    for (let j = i + 1; j < arg.length; j++) {
      if (arg[i] === arg[j]) {
        return true;
      }
    }
  }
  return false;
}

module.exports = hasDuplicatedArguments;
