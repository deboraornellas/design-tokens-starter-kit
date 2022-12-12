/**
 * Do not edit directly
 * Generated on Mon, 12 Dec 2022 14:13:17 GMT
 */

export default tokens;

declare interface DesignToken {
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

declare const tokens: {
  "tokenSetOrder": {
    "0": DesignToken
  },
  "size": {
    "x-small": DesignToken,
    "small": DesignToken,
    "medium": DesignToken,
    "large": DesignToken,
    "x-large": DesignToken,
    "2x-large": DesignToken,
    "card": {
      "width": DesignToken
    }
  },
  "color": {
    "brown": DesignToken,
    "red": DesignToken,
    "orange": DesignToken,
    "yellow": DesignToken,
    "green": DesignToken,
    "dark-green": DesignToken,
    "blue": DesignToken,
    "light-blue": DesignToken,
    "pink": DesignToken,
    "purple": DesignToken,
    "black": DesignToken,
    "gray": DesignToken,
    "white": DesignToken,
    "card": {
      "background": DesignToken,
      "text": DesignToken
    },
    "header": {
      "background": DesignToken,
      "text": DesignToken
    },
    "main-section": {
      "background": DesignToken,
      "text": DesignToken
    }
  },
  "font-size": {
    "h1": DesignToken,
    "h2": DesignToken,
    "h3": DesignToken,
    "body": DesignToken
  },
  "spacing": {
    "x-small": DesignToken,
    "small": DesignToken,
    "medium": DesignToken,
    "large": DesignToken
  },
  "font-family": {
    "sans-serif": DesignToken,
    "serif": DesignToken
  }
}