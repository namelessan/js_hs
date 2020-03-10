function nameFormatting(name) {
  const list = name.split(' ');
  const first_name = list[0];
  const last_name = list[list.length - 1];
  const middle_name = list.slice(1, list.length - 2);
  if (middle_name.length === 0) {
    return {
      name,
      uppercase_name: name.toUpperCase(),
      first_name,
      last_name
    };
  } else {
    return {
      name,
      uppercase_name: name.toUpperCase(),
      first_name,
      last_name,
      middle_name
    };
  }
}

module.exports = nameFormatting;
