/**
 * Created by 47767573t on 25/02/16.
 */


app.controller("TweetCtrl", ["$scope", "getUser", 
    ,function($scope, ) {

        //Inicializamos lo que mostramos
        $scope.user = "hispteric";
        $scope.tweets = chatTweets();


        $scope.changeUser = function() {
            $scope.user = $scope.userNew;
        }


        //Metodo para crear nuevo mensajes que añade al array de mensajes; llamado ng-submit
        $scope.addTweet = function() {

            $scope.tweets.$add({
                user: $scope.user,
                text: $scope.message
            });
        };

        //TODO: definir este elemento para devuelva array con tweets segun usuario pedido
        $scope.seekUser() = function(){

        }


    }
]);
