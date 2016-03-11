/**
 * Created by 47767573t on 25/02/16.
 */


app.controller("TweetCtrl", ["$scope", "getUsuario", "getTweets", "getSeguidos", "getTweetSeguidos"
    ,function($scope, getUsuario, getTweets, getSeguidos, getTweetSeguidos) {

        //Inicializamos lo que mostramos
        //$scope.user = "hispteric";
        $scope.usuarioTweets = getTweets("clitFollower");

        //Definimos el usuario
        $scope.setUsuario = function(){
            $scope.userId = $scope.usuario;

            //creamos variable del objeto del usuario segun funcion del factory
            var usuarioDatos = getUsuario($scope.userId);
            $scope.usuarioNombre = usuarioDatos.nombre;
            $scope.usuarioDescripcion = usuarioDatos.descripcion;
            $scope.usuarioTweets = getTweets($scope.userId);
            $scope.seguidos = getSeguidos($scope.userId);
            $scope.tweetSeguidos = [];
            $scope.getTweetSeguidos();
        }

        //Metodo para crear nuevo mensajes que añade al array de tweets del usuario
        $scope.addTweet = function() {
            $scope.usuarioTweets.$add({ text: $scope.tweetMsg });
            $scope.tweetTxt = "";
        }

        //Añade un seguido al listado de seguidos del firebase
        $scope.addSeguido = function() {
            $scope.seguidos = getSeguidos($scope.userId);
            $scope.seguidos.$add({ idUser: $scope.usuarioSeguidoNuevo });
            $scope.usuarioSeguidoNuevo = "";
        }

        $scope.getTweetSeguidos = function(){
            $scope.seguidos = getSeguidos($scope.userId);
            var seg = getSeguidos($scope.userId);
            var t = [];

            for (var s in seg){
                var tuits = getTweets(seg[s].idUser);

                console.log("")

                for (var tuit in tuits){
                    t.push(
                        userS = s.idUser,
                        text = tuit.text
                    );
                }




            }


        }


        /*$scope.changeUser = function() {
            $scope.user = $scope.userNew;
        }*/



        //Metodo para crear nuevo mensajes que añade al array de mensajes; llamado ng-submit

    }
]);
