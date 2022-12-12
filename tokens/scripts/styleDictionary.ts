import commandLineArgs from "command-line-args";
import { posix as path } from "path";
import StyleDictionaryLib from "style-dictionary";

type InputType = {
  inputFile: string[];
  outputPath: string;
};

export const StyleDictionary = StyleDictionaryLib;

const { inputFile, outputPath } = commandLineArgs([
  { name: "inputFile", type: String, multiple: true },
  { name: "outputPath", type: String },
]) as InputType;

StyleDictionary.extend({
  source: inputFile,
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: path.join(outputPath, "css", "/"), // Build path must end in a trailing slash or you will get weird file names
      transforms: [...StyleDictionary.transformGroup["css"], "size/px"],
      files: [
        {
          format: "css/variables",
          destination: "design-tokens.css",
        },
      ],
    },
    typescript: {
      transformGroup: "js",
      transforms: ["name/cti/camel"],
      buildPath: path.join(outputPath, "ts", "/"), // Build path must end in a trailing slash or you will get weird file names
      files: [
        {
          format: "javascript/es6",
          destination: "designTokens.js",
        },
        {
          format: "typescript/module-declarations",
          destination: "designTokens.d.ts",
        },
      ],
    },
  },
}).buildAllPlatforms();
