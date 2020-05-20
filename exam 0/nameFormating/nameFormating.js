function nameFormating(str) {
  const names = str.trim().split(' ');
  const last_name = names[names.length - 1];
  const [first_name, ...middle_name] = names.slice(0, -1);

  const fullName = {
    name: str,
    uppercase_name: str.toUpperCase(),
    first_name,
    last_name,
  };

  if (middle_name.length !== 0) fullName.middle_name = middle_name;

  return fullName;
}

console.log(nameFormating('Corrin Hermann'));
console.log(nameFormating('Russell Heidenreich Herzog Feil Runte'));
