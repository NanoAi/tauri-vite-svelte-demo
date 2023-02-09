const Color = require('color');
const gradient = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function transform(colour) {
  const out = {};
  gradient.forEach((v) => {
    const x = (v / 10);
    out[v] = colour.value(x).hex();
  });
  return out;
}

module.exports = {
  buildColourTable: (data) => {
    const out = {};
    Object.entries(data).forEach(([key, value]) => {
      const c = new Color(value);
      out[key] = {
        darker: c.darken(0.5).hex(),
        base: c.hex(),
        lighter: c.lighten(0.5).hex(),
        v: transform(c)
      };
    });
    return out;
  },
};
