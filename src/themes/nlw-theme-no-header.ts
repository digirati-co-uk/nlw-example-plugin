import { nlwPluginTheme } from './nlw-theme';
export const nlwPluginThemeWithoutHeader = {
  id: 'nlw-plugin-theme-no-header',
  name: 'NLW plugin theme (no header)',
  version: '1.0.0',
  description: 'NLW theme without a header, but stylesheets',
  thumbnail: 'https://user-images.githubusercontent.com/8266711/118507448-25750b80-b726-11eb-9f87-d96f43c0a894.png',
  theme: nlwPluginTheme.theme,
  extra: {
    classNames: {
      main: 'main',
    },
    options: {
      userBarAbove: true,
    },
    stylesheets: [
      "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
      "https://brandedframe.library.wales/templates/bootstrap5-nui/css/llgc_brandedframe.css",
      "https://use.fontawesome.com/releases/v5.8.1/css/all.css",
      "https://fonts.googleapis.com/css?family=Lato:400,550,700|Roboto:400,500"
    ],
    remote: {
      languages: {
        en: {
          footer: 'https://brandedframe.library.wales/footer.php?site=crowd',
        },
        cy: {
          footer: 'https://brandedframe.library.wales/footer.php?site=torf',
        },
      },
    },
  },
};
