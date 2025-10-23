const name = [
  "hole-in-one",
  "eagle",
  "birdie",
  "par",
  "bogey",
  "double bogey",
  "go home",
];

function golfscore(par, strokes) {
  if (strokes === 1) {
    return name[0];
  } else if (strokes <= par - 2) {
    return name[1];
  } else if (strokes === par - 2) {
    return name[2];
  } else if (strokes === par) {
    return name[3];
  } else if (strokes <= par + 1) {
    return name[4];
  } else if (strokes <= par + 2) {
    return name[5];
  } else if (strokes >= par + 3) {
    return name[6];
  } else return "none of the above";
}

// golfscore(5, 4);
console.log(golfscore(4, 1));
