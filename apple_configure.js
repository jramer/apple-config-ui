Template.configureLoginServiceDialogForApple.helpers({
  siteUrl: () => {
    let url = Meteor.absoluteUrl();
    if (url.slice(-1) === '/') {
      url = url.slice(0, -1);
    }
    return url;
  },
});

Template.configureLoginServiceDialogForApple.fields = () => [
  { property: 'clientId', label: 'Client ID' },
  { property: 'teamId', label: 'Team ID' },
  { property: 'keyId', label: 'Key ID' },
  { property: 'secret', label: 'Client secret' },
  { property: 'redirectUri', label: 'Redirect Uri' },
];
