function towerOfBabel(arr) {
  const countries = [];
  const languages = [];
  for ({ name, countryOfBirth, speak } of arr) {
    if (!countries.includes(countryOfBirth)) {
      countries.push(countryOfBirth);
    }
    const matchLanguages = speak.filter(
      language => !languages.includes(language)
    );
    languages.push(...matchLanguages);
  }

  return { countries: countries.length, languages: languages.length };
}

module.exports = towerOfBabel;
