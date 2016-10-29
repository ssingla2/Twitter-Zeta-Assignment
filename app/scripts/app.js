'use strict';

/* Routing to Redirect to main.html with ngRoute as dependency 
   Global Namespace Collision Prevention */

var twitterApp=twitterApp || {};
    twitterApp.userTweets=twitterApp.userTweets || angular.module('twitterZetaApp',['ngRoute']);

twitterApp.userTweets.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/tweets.html',
          controller: 'tweetsView',
          controllerAs:'tweets'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

/*End of File */

