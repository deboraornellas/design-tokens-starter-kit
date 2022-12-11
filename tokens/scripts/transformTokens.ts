import commandLineArgs from "command-line-args";
import { posix as path } from "path";
import fs from "fs";
import StyleDictionaryLib from "style-dictionary";
// import {
//   isFluidSize,
//   isStaticColor,
//   isTypographyToken,
//   shouldNotExportSkroll,
// } from "../../lib/utils/tokenFilters";
// import globalTokens from "../../tokens/style-dictionary/global.json";

const rootDir = "./";

type InputType = {
  inputFile: string[];
  outputPath: string;
};

// import { formats } from "./formats";
// import { transforms } from "./transforms";

// Object.entries(transforms).forEach(([name, transform]) => {
//   StyleDictionaryLib.registerTransform({ name, ...transform });
// });

// Object.entries(formats).forEach(([name, formatter]) => {
//   StyleDictionaryLib.registerFormat({ name, formatter });
// });

StyleDictionaryLib.registerTransformGroup({
  name: "css",
  transforms: [
    ...StyleDictionaryLib.transformGroup["css"],
    // "size/rem",
    // "color/rgbahex",
    // "letterspacing/decimal",
    // "letterspacing/em", // Order is important here, em should come after decimal letter-spacing transform
    // "lineheight/percentageToUnitless",
    // "css/box-shadow",
  ],
});

StyleDictionaryLib.registerTransformGroup({
  name: "ts",
  transforms: [
    ...StyleDictionaryLib.transformGroup["css"],
    // TODO: add specific ts transforms when needed
    // "something/ts/specific",
  ],
});

export const StyleDictionary = StyleDictionaryLib;

const { inputFile, outputPath } = commandLineArgs([
  { name: "inputFile", type: String, multiple: true },
  { name: "outputPath", type: String },
]) as InputType;

const tokens: object = JSON.parse(fs.readFileSync(inputFile[0]).toString());

StyleDictionary.extend({
  source: inputFile,
  include: [
    `${rootDir}/tokens/style-dictionary/global.json`,
    `${rootDir}/tokens/style-dictionary/static.json`,
  ],
  platforms: {
    css: {
      buildPath: path.join(outputPath, "css", "/"), // Build path must end in a trailing slash or you will get weird file names
      transforms: [...StyleDictionary.transformGroup["css"], "content/icon"],
      options: {
        // minViewport: globalTokens.breakpoint["x-small"].value,
        // maxViewport: globalTokens.breakpoint["x-large"].value,
        unit: "rem",
      },
      files: [
        {
          format: "css/variables",
          destination: "design-tokens.css",
          // filter: (token) => shouldNotExportSkroll(token),
        },
      ],
    },
    typescript: {
      transformGroup: "ts",
      buildPath: path.join(outputPath, "src", "/"), // Build path must end in a trailing slash or you will get weird file names
      files: [
        {
          format: "javascript/object",
          destination: "designTokens.ts",
          // filter: (token) => !isStaticColor(token),
        },
        {
          format: "json",
          destination: "designTokens.json",
          // filter: (token) =>
          //   ["color", "size", "spacing", "breakpoint"].includes(
          //     token.attributes.category
          //   ),
        },
      ],
    },
  },
}).buildAllPlatforms();
