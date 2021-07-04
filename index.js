module.exports.createHashtag = (str, obj = {}) => {
  if (!str) throw new Error("input string");

  if (obj.underscore === undefined && obj.dash === undefined)
    obj.underscore = true;
  if (obj.hashTag === undefined) obj.hashTag = true;

  str = str.split(" ");

  if (!obj.lowerCase) {
    str = str.map((el) => el[0].toUpperCase() + el.slice(1, el.length));
  }

  if (obj.underscore === true) {
    str = str.map((el, i) => {
      if (i === 0) return el;
      else return "_" + el;
    });
  } else if (obj.dash) {
    str = str.map((el, i) => {
      if (i === 0) return el;
      else return "-" + el;
    });
  }

  if (obj.hashTag === true) {
    str.unshift("#");
  }

  return str.join("");
};
