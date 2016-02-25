/**
 * Created by 47767573t on 25/02/16.
 */

app.factory("chatMessages", ["$firebaseArray",
    function($firebaseArray) {
        // create a reference to the database location where we will store our data
        var randomRoomId = Math.round(Math.random() * 100000000);
        var ref = new Firebase("https://ecaibtweet.firebaseio.com/tweets");

        // this uses AngularFire to create the synchronized array
        return $firebaseArray(ref);
    }
]);