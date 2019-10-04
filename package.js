Package.describe({
  name: 'bigowl:apple-config-ui',
  summary: 'Blaze configuration templates for Apple OAuth.',
  version: '0.0.1',
  git: 'https://github.com/jramer/apple-config-ui',
});

Package.onUse(api => {
  api.use('ecmascript', 'client');
  api.use('templating@1.2.13', 'client');

  api.addFiles('accounts-apple_login_button.css', 'client');
  api.addFiles(['apple_configure.html', 'apple_configure.js'], 'client');
});
