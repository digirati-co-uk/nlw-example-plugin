import {MadocTheme} from "@madoc.io/types/dist/frontend/themes/definitions/types";

const theme: MadocTheme = {
  header: 'default',
  global: 'default',
  accent: 'default',
  footer: 'dark',
  siteContainer: 'dark',
  custom: {
    header: {
      headerBackground: '#fff',
      globalBackground: '#fff',
    },
    siteContainer: {
      background: '#fff',
      containerBackground: '#fff'
    },
    accent: {
      primary: '#D0392A',
    },
    global: {
      maxWidth: '1380px',
    },
  },
};

export const nlwPluginTheme = {
  id: 'nlw-plugin-theme',
  name: 'NLW plugin theme',
  version: '1.0.1',
  description: 'NLW theme with remote header and footer',
  thumbnail: 'https://user-images.githubusercontent.com/8266711/118507448-25750b80-b726-11eb-9f87-d96f43c0a894.png',
  theme,
  extra: {
    classNames: {
      main: 'main',
    },
    options: {
      userBarAbove: true,
    },
    remote: {
      languages: {
        en: {
          header: 'https://brandedframe.library.wales/header.php?site=crowd&langSwitch=0&container=fluid',
          footer: 'https://brandedframe.library.wales/footer.php?site=crowd',
        },
        cy: {
          header: 'https://brandedframe.library.wales/header.php?site=torf&langSwitch=0&container=fluid',
          footer: 'https://brandedframe.library.wales/footer.php?site=torf',
        },
      },
    },
  },
};
