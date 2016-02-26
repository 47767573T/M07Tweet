/**
 * Created by 47767573t on 25/02/16.
 */

app.factory("chatMessages", ["$scope", "$firebaseArray"
    ,function($scope, $firebaseArray, $firebaseObject) {
        // create a reference to the database location where we will store our data

        var refTweet = new Firebase("https://ecaibtweet.firebaseio.com/tweets")

        // this uses AngularFire to create the synchronized array
        return $firebaseArray(refTweet);
    }
]);

app.factory("chatUsers", ["$scope", "$firebaseArray"
    ,function($scope, $firebasearray, $firebaseObject){

        var refUser = new Firebase("https://ecaibtweet.firebaseio.com/users");

        var query = refUser.equalTo($scope.userId);


        return;
    }
]);