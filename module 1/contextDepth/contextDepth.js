const contextDepth = function findDepth() {
  const obj = this;
  let level = 0;
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) continue;
    if (typeof obj[key] === 'object') {
      let depth = findDepth.call(obj[key]) + 1;
      console.log(obj[key]);
      level = Math.max(level, depth);
    }
  }
  console.log(level);
  return level;
};

// const movie = {
//   movies_by_year: {
//     '1979': ['The Villain', 'Scavenger Hunt'],
//     '1984': ['Conan the Destroyer', 'The Terminator'],
//     '1993': ['Dave', 'Last Action Hero', "Beretta's Island"],
//   },

//   politics: {
//     elections_scores: {
//       '2003': {
//         rep: {
//           arnold: 48.6,
//           tom: 13.5,
//         },
//         dem: 31.5,
//         green: 2.8,
//       },
//       '2006': {
//         rep: 55.9,
//         dem: 39.0,
//         green: 2.3,
//       },
//     },
//   },
// };

// contextDepth.call(movie);

module.exports = contextDepth;
