/**
 * Created by 47767573t on 25/02/16.
 */


app.controller("TweetCtrl", ["$scope", getUsuario, getTweets, getSeguidos
    ,function($scope, getUsuario, getTweets, getSeguidos) {

        //Inicializamos lo que mostramos
        //$scope.user = "hispteric";
        $scope.usuarioTweets = getTweets("clitFollower");

        //Definimos el usuario
        $scope.setUsuario = function(){
            $scope.userId = $scope.usuario;
            $scope.usuario = "";

            //creamos variable del objeto del usuario segun funcion del factory
            var usuarioDatos = getUsuario($scope.userId);
            $scope.usuarioNombre = usuarioDatos.nombre;
            $scope.usuarioDescripcion = usuarioDatos.descripcion;
            $scope.usuarioTweets = getTweets($scope.userId);
            $scope.seguidos = getSeguidos($scope.userId);
            //$scope.followingTweets = getFollowingTweets($scope.userId);
        }

        //Metodo para crear nuevo mensajes que añade al array de tweets del usuario
        $scope.addTweet = function() {
            $scope.usuarioTweets.$add({ text: $scope.tweetTxt });
            $scope.tweetTxt = "";
        }

        //Añade un seguido al listado de seguidos del firebase
        $scope.follow = function() {
            $scope.seguidos.$add({ idUser: $scope.usuari2Follow });
            $scope.usuarioSeguido = "";
        }



        $scope.changeUser = function() {
            $scope.user = $scope.userNew;
        }


        //Metodo para crear nuevo mensajes que añade al array de mensajes; llamado ng-submit

    }
]);
