export const conversions = new Map([
  // Length
  [
    "Meter",
    new Map([
      ["Inch", 39.3700787],
      ["Foot", 3.2808399],
      ["Mile", 0.0006214],
      ["Yard", 1.0936133],
    ]),
  ],
  [
    "Inch",
    new Map([
      ["Meter", 0.0254],
      ["Foot", 0.0833333],
      ["Mile", 0.0000158],
      ["Yard", 0.0277778],
    ]),
  ],
  [
    "Foot",
    new Map([
      ["Inch", 12],
      ["Meter", 0.3048],
      ["Mile", 0.0001894],
      ["Yard", 0.3333333],
    ]),
  ],
  [
    "Mile",
    new Map([
      ["Inch", 63360],
      ["Foot", 5280],
      ["Meter", 1609.344],
      ["Yard", 1760],
    ]),
  ],
  [
    "Yard",
    new Map([
      ["Inch", 36],
      ["Foot", 3],
      ["Mile", 0.0005682],
      ["Meter", 0.9144],
    ]),
  ],
  // Weight
  ["Kilogram", new Map([["Pound", 2.2046226]])],
  ["Pound", new Map([["Kilogram", 0.4535924]])],
]);
