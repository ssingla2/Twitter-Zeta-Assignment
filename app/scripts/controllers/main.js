'use strict';

/* TwitterZetaApp controller
   Global Namespace Collision Prevention */
var twitterApp=twitterApp || {};
    twitterApp.userTweets=twitterApp.userTweets || angular.module('twitterZetaApp',['ngRoute']);

twitterApp.userTweets.controller('tweetsView', function ($scope,$http) {
    $http.get("../json/tweetDetails.json")
        .success(function(response){
            $scope.tweets.userTweetDetails=response.userTweetDetails;
            $scope.tweets.myTweets=response.myTweets;
            $scope.tweets.shareIconOpts=response.shareIconOpts;
            $scope.tweets.activeTabOpt = "photos";
     });
    this.selectTabOpt = function (tabId) {
        this.activeTabOpt = tabId;
    }
});

/*End of File */