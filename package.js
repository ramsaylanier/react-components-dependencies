Package.describe({
  name: 'ramsay:react-components-dependencies',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Base dependencies for react components',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  var packages = [
    'react@0.1.4',
    'templating',
    'percolate:velocityjs@1.2.1_1'
  ]

  api.use(packages, 'client');
  api.imply(packages);
});