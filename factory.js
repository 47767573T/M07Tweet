/**
 * Created by 47767573t on 25/02/16.
 */

/**
 * factory para peticion de usuario
 */
app.factory("getUsuario", ["$firebaseObject"
    ,function($firebaseObject) {
        return function(usuario) {

            //Creamos la peticion de usuarios a firebase
            var usuarioRef = new Firebase("https://ecaibtweet.firebaseio.com/users");

            //Tras la peticion devolvemos objeto usuario de firebase y devolvemos nombre y descripcion
            return {nombre: $firebaseObject(usuarioRef.child(usuario).child("name"))
                ,descripcion: $firebaseObject(usuarioRef.child(usuario).child("description"))};

        };
    }
]);

/**
 * factory para peticion de tweets de usuario
 */
app.factory("getTweets", ["$firebaseArray"
    ,function($firebaseArray) {
        return function(usuario) {

            //Creamos la peticion de usuarios a firebase
            var tweetRef = new Firebase("https://ecaibtweet.firebaseio.com/users");

            //Tras la peticion devolvemos un arrayList de tweets del usuario
            return $firebaseArray(tweetRef.child(usuario).child("tweets"));
        };
    }
]);

/**
 * factory para peticion de tweets de usuario
 */
app.factory("getSeguidos", ["$firebaseArray", "$firebaseObject"
    ,function($firebaseArray) {
        return function(usuario) {

            //Creamos la peticion de usuarios a firebase
            var seguidosRef = new Firebase("https://ecaibtweet.firebaseio.com/users");

            //Tras la peticion devolvemos un arrayList usuarios que sigue
            return $firebaseArray(seguidosRef.child(usuario).child("following"));
        };
    }
]);

app.factory("getTweetSeguidos", ["$firebaseArray", "$firebaseObject", "getTweets", "$firebaseObject"
    ,function($firebaseArray, $firebaseObject) {
        return function(usuario) {

            //Creamos la peticion de usuarios a firebase

            var tweetRef = new Firebase("https://ecaibtweet.firebaseio.com/users");
            var seguidos = $firebaseArray(tweetRef.child(usuario).child("following"));

            var tweets = [];


            for(i=0 ; i<seguidos.length ; i++){
                var seguido = seguidos.childNodes[i].userId;
                var tweetsSeguido = $firebaseArray(tweetRef.child(seguido).child("tweets"));

                for( j=0 ; j<tweetsSeguido.size() ;  ){
                    tweets.$add({
                        nombre: $firebaseObject().
                        ,texto:

                    });
                };

            };
            return tweets;
        };

        $scope.messages.$add({
            -                    from: "Firebase Docs",
            -                    content: "Hello world!"
        -                });

    }
]);

