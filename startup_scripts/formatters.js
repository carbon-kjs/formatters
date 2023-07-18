const codes = {
  black: "&0",
  dark_blue: "&1",
  dark_green: "&2",
  dark_aqua: "&3",
  dark_red: "&4",
  dark_purple: "&5",
  gold: "&6",
  gray: "&7",
  dark_gray: "&8",
  blue: "&9",
  green: "&a",
  aqua: "&b",
  red: "&c",
  light_purple: "&d",
  yellow: "&e",
  white: "&f",
  obfuscated: "&k",
  bold: "&l",
  strikethrough: "&m",
  underline: "&n",
  italic: "&o",
  reset: "&r",
};

/**
 * Global function that holds all the functions.
 */
global.formatters = {
  /**
   * This turns your text to black.
   * @param {*} text to format
   */
  black: (text) => {
    return `${codes.black}${text}${codes.reset}`;
  },
  /**
   * This turns your text to dark blue.
   * @param {*} text to format
   */
  dark_blue: (text) => {
    return `${codes.dark_blue}${text}${codes.reset}`;
  },
  /**
   * This turns your text to dark green.
   * @param {*} text to format
   */
  dark_green: (text) => {
    return `${codes.dark_green}${text}${codes.reset}`;
  },
  /**
   * This turns your text to dark aqua.
   * @param {*} text to format
   */
  dark_aqua: (text) => {
    return `${codes.dark_aqua}${text}${codes.reset}`;
  },
  /**
   * This turns your text to dark red.
   * @param {*} text to format
   */
  dark_red: (text) => {
    return `${codes.dark_red}${text}${codes.reset}`;
  },
  /**
   * This turns your text to dark purple.
   * @param {*} text to format
   */
  dark_purple: (text) => {
    return `${codes.dark_purple}${text}${codes.reset}`;
  },
  /**
   * This turns your text to gold.
   * @param {*} text to format
   */
  gold: (text) => {
    return `${codes.gold}${text}${codes.reset}`;
  },
  /**
   * This turns your text to gray.
   * @param {*} text to format
   */
  gray: (text) => {
    return `${codes.gray}${text}${codes.reset}`;
  },
  /**
   * This turns your text to dark gray.
   * @param {*} text to format
   * @returns
   */
  dark_gray: (text) => {
    return `${codes.dark_gray}${text}${codes.reset}`;
  },
  /**
   * This turns your text to blue.
   * @param {*} text to format
   */
  blue: (text) => {
    return `${codes.blue}${text}${codes.reset}`;
  },
  /**
   * This turns your text to green.
   * @param {*} text to format
   */
  green: (text) => {
    return `${codes.green}${text}${codes.reset}`;
  },
  /**
   * This turns your text to aqua.
   * @param {*} text to format
   */
  aqua: (text) => {
    return `${codes.aqua}${text}${codes.reset}`;
  },
  /**
   * This turns your text to red.
   * @param {*} text to format
   */
  red: (text) => {
    return `${codes.red}${text}${codes.reset}`;
  },
  /**
   * This turns your text to light purple.
   * @param {*} text to format
   */
  light_purple: (text) => {
    return `${codes.light_purple}${text}${codes.reset}`;
  },
  /**
   * This turns your text to yellow.
   * @param {*} text to format
   */
  yellow: (text) => {
    return `${codes.yellow}${text}${codes.reset}`;
  },
  /**
   * This turns your text to white.
   * @param {*} text to format
   */
  white: (text) => {
    return `${codes.white}${text}${codes.reset}`;
  },
  /**
   * This turns your text to obfuscated.
   * @param {*} text to format
   */
  obfuscated: (text) => {
    return `${codes.obfuscated}${text}${codes.reset}`;
  },
  /**
   * This turns your text to bold.
   * @param {*} text to format
   */
  bold: (text) => {
    return `${codes.bold}${text}${codes.reset}`;
  },
  /**
   * This turns your text to strikethrough.
   * @param {*} text to format
   */
  strikethrough: (text) => {
    return `${codes.strikethrough}${text}${codes.reset}`;
  },
  /**
   * This turns your text to underline.
   * @param {*} text to format
   */
  underline: (text) => {
    return `${codes.underline}${text}${codes.reset}`;
  },
  /**
   * This turns your text to italic.
   * @param {*} text to format
   */
  italic: (text) => {
    return `${codes.italic}${text}${codes.reset}`;
  },
};
