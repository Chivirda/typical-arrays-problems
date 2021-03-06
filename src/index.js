
exports.min = function min (array) {
  if (!arguments.length || array.length === 0) return 0;

  let minValue = array[0]
  array.forEach(element => {
    if (element < minValue) {
      minValue = element;
    }
  });

  return minValue;
}

exports.max = function max (array) {
  if (!arguments.length || array.length === 0) return 0;

  let maxValue = array[0];
  array.forEach(element => {
    if (element > maxValue) {
      maxValue = element;
    }
  });

  return maxValue;
}

exports.avg = function avg (array) {
  if (!arguments.length || array.length === 0) return 0;

  let avg = 0;
  array.forEach(element => {
    avg += element;
  });

  return avg / array.length;
}
