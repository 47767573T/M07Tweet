/**
 * Created by 47767573t on 25/02/16.
 */


app.controller("ChatCtrl", ["$scope", "chatMessages",
    // we pass our new chatMessages factory into the controller
    function($scope, chatMessages, chatUsers, $firebaseObject, $firebaseArray) {

        //Inicializamos lo que mostramos
        $scope.user = "hispteric";
        $scope.messages = chatMessages;
        // we add chatMessages array to the scope to be used in our ng-repeat


        //Metodo para crear nuevo mensajes que añade al array de mensajes; llamado ng-submit
        $scope.addMessage = function() {
            // calling $add on a synchronized array is like Array.push(),
            // except that it saves the changes to our database!
            $scope.messages.$add({
                user: $scope.user,
                text: $scope.message
            });
        };

        //TODO: definir este elemento para devuelva array con tweets segun usuario pedido
        $scope.buscar = function(){
            $scope.messages = chatUsers;
        }


    }
]);
