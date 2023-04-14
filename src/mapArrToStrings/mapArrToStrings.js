
const mapArrToStrings = (arr) => {
  return arr
        .filter((item) => {
          return Number.isInteger(item);
        }).map(String);
}

module.exports = mapArrToStrings;
