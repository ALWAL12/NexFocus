(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  // Sets app default base URL
  app.baseUrl = '/';
  if (window.location.port === '') {  // if production
    // Uncomment app.baseURL below and
    // set app.baseURL to '/your-pathname/' if running from folder in production
    // app.baseUrl = '/polymer-starter-kit/';
  }

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock!');
  });

  window.addEventListener('task-completed', function(e) {
    var task = e.detail.task;
    var statView = document.querySelector('#statView');
    statView.completeTask(task);
  });

  window.addEventListener('sign-in', function() {
    var statView = document.querySelector('#statView');
    statView.signIn();
  });

  // Scroll page to top and expand header
  app.scrollPageToTop = function() {
    //app.$.headerPanelMain.scrollToTop(true);
  };

  app.closeDrawer = function() {
    app.$.paperDrawerPanel.closeDrawer();
  };

})(document);
