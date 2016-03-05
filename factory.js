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
            return {nom: $firebaseObject(usuarioRef.child(usuario).child("name"))
                ,desc: $firebaseObject(usuarioRef.child(usuari).child("description"))};

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
app.factory("getUsuariosSeguidos", ["$firebaseArray", "$firebaseObject"
    ,function($firebaseArray) {
        return function(usuario) {

            //Creamos la peticion de usuarios a firebase
            var tweetRef = new Firebase("https://ecaibtweet.firebaseio.com/users");

            //Tras la peticion devolvemos un arrayList usuarios que sigue
            return $firebaseArray(tweetRef.child(usuario).child("following"));
        };
    }
]);

