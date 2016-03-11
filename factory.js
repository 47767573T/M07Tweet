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
    ,function($firebaseArray) {
        return function(usuario, seguidos) {

            //Creamos la peticion de usuarios a firebase
            var tweetRef = new Firebase("https://ecaibtweet.firebaseio.com/users");

            var tweetsTotal = [];

            //console.log(seguidos);
            seguidos.$loaded().then(function () {
                console.log(seguidos)
                var tweetRef2 = new Firebase("https://ecaibtweet.firebaseio.com/users");
                for (var i = 0; i < seguidos.length; i++) {
                    var seguido = seguidos[i].idUser;

                    var tweetsSeguido = $firebaseArray(tweetRef2.child(seguido).child("tweets"));

                    tweetsSeguido.$loaded().then(function () {
                        console.log(tweetsSeguido.length);

                        for (var j = 0; j < tweetsSeguido.size(); j++) {

                            tweetsTotal.push({
                                user: seguido,
                                text: tweetsSeguido[j]
                            });
                            console.log(seguido + " - " + tweetsSeguido[j]);
                        };
                    });
                };
                return tweetsTotal;

            });
        };

    }
]);

