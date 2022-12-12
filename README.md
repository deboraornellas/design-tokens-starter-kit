# design-tokens-starter-kit

A starter kit for creating and parsing design tokens!

This repo is a playground for developers and designers to see in practice how design tokens can be consumed in an app. 

# How it works

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). I removed some of the boilerplate code to make it as simple as possible.

The repo is currently setup to work with the `Tokens Studio for Figma` plugin (using its free tier features). Once configured to link to the correct repo, this plugin pushes token changes in Figma as a raw JSON file to the `figma-sync` branch.

We then use the `token-transform` plugin to transform the raw JSON file into something that `style-dictionary` can understand.

Finally, style-dictionary parses the transformed JSON file into the outputs we desire (in this repo: CSS variables, JS ES6 exports and TS types).
 
# Getting Started with this kit

Fork this repo to get started. 


## Setting up Figma

To be able to play with the tokens, you'll need a Figma account (no need to be a paid account) and the Tokens Studio for Figma plugin installed. 

Create a new Figma project, open the Tokens Studio plugin and follow these steps to create tokens: https://docs.tokens.studio/getting-started. You can download `/tokens/raw/tokens.json` as a reference and load it to get started.

Once you have your tokens ready, follow these steps to connect the forked github repo to your account: https://docs.tokens.studio/sync/github

If you use `figma-sync` as the branch name, then the `yarn figma-sync` script will be already ready to use. If you choose a different name, make sure to change it in the script as well.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn figma-sync`

To be run after pushing Figma changes. Merges the latest changes from the sync branch, then transforms the raw tokens JSON into a style-dictionary input, then parses it into our outputs. 
If you're running the app locally, you should be able to view the style changes.


You can also run the default create-react-app scripts: `test`, `build` and `eject`. However, they aren't as relevant to the purpose of this kit.


