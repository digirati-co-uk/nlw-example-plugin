import '@madoc.io/types';
import { nlwPluginThemeWithoutHeader } from './themes/nlw-theme-no-header';
import { nlwPluginTheme } from './themes/nlw-theme';
import { theChainTemplate } from './templates/01-the-chain';

export function hookRoutes() {
  return [];
}

export function hookComponents() {
  return {

  };
}

export function hookBlocks() {
  return {
    // FullWidthHeader
  };
}

export const projectTemplates = [theChainTemplate];

// All themes.
export const themes = [nlwPluginTheme, nlwPluginThemeWithoutHeader];
