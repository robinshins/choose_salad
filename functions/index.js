
const firebase = require('firebase')
const functions = require("firebase-functions");



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//


// var firebaseConfig = {
//     apiKey: "AIzaSyCNcRJBKZFcATd4NVtlX0OEt6If7hkjjz0",
//     authDomain: "salad-gameberry.firebaseapp.com",
//     projectId: "salad-gameberry",
//     storageBucket: "salad-gameberry.appspot.com",
//     messagingSenderId: "1013302033232",
//     appId: "1:1013302033232:web:61bdc598aedd335f8a0a55",
//     measurementId: "G-5CVPK58FZF"
// };
// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// } else {
//     firebase.app(); // if already initialized, use that one
// }
// const db = firebase.firestore();


// exports.scheduledFunction = functions.pubsub.schedule('every 5 minutes').onRun((context) => {
//     var menuRef = db.collection('main').doc("menu")
//     menuRef.get().then((doc) => {
//         if (doc.exists) {
//             var newdata = doc.data()
//             newdata.tuna[1] = newdata.tuna[2]
//             newdata.chicken[1] = newdata.chicken[2]
//             newdata.salmon[1] = newdata.salmon[2]
//             menuRef.update(newdata)
//                 .then(() => {
//                     console.log("Document successfully updated!");
//                 })
//                 .catch((error) => {
//                     alert('에러가 발생했습니다')
//                     // The document probably doesn't exist.
//                     console.error("Error updating document: ", error);
//                 });
//         } else {
//             console.log("No such document!");
//         }
//     }).catch((error) => {
//         console.log("Error getting document:", error);
//     });


//     var killquery = db.collection('result').where('timestamp', '<', new Date());
//     killquery.get().then(function (querySnapshot) {
//         querySnapshot.forEach(function (doc) {
//             doc.ref.delete();
//         });
//     });

//     return null;
// });

exports.scheduledFunctionCrontab1 = functions.pubsub.schedule('every day 12:25')
    .timeZone('Asia/Seoul') // Users can choose timezone - default is America/Los_Angeles
    .onRun((context) => {
        console.log('아아아')
        var firebaseConfig = {
            apiKey: "AIzaSyCNcRJBKZFcATd4NVtlX0OEt6If7hkjjz0",
            authDomain: "salad-gameberry.firebaseapp.com",
            projectId: "salad-gameberry",
            storageBucket: "salad-gameberry.appspot.com",
            messagingSenderId: "1013302033232",
            appId: "1:1013302033232:web:61bdc598aedd335f8a0a55",
            measurementId: "G-5CVPK58FZF"
        };
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        } else {
            firebase.app(); // if already initialized, use that one
        }

        const db = firebase.firestore();
        var menuRef = db.collection('main').doc("menu")
        menuRef.get().then((doc) => {
            if (doc.exists) {
                var newdata = doc.data()
                newdata.tuna[1] = newdata.tuna[2]
                newdata.chicken[1] = newdata.chicken[2]
                newdata.salmon[1] = newdata.salmon[2]
                menuRef.update(newdata)
                    .then(() => {
                        console.log("Document successfully updated!");
                    })
                    .catch((error) => {
                        alert('에러가 발생했습니다')
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });


        var killquery = db.collection('result').where('timestamp', '<', new Date());
        killquery.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                doc.ref.delete();
            });
        });

        return null;
    });
    
exports.scheduledFunctionCrontab2 = functions.pubsub.schedule('every day 12:29')
    .timeZone('Asia/Tokyo') // Users can choose timezone - default is America/Los_Angeles
    .onRun((context) => {
        var firebaseConfig = {
            apiKey: "AIzaSyCNcRJBKZFcATd4NVtlX0OEt6If7hkjjz0",
            authDomain: "salad-gameberry.firebaseapp.com",
            projectId: "salad-gameberry",
            storageBucket: "salad-gameberry.appspot.com",
            messagingSenderId: "1013302033232",
            appId: "1:1013302033232:web:61bdc598aedd335f8a0a55",
            measurementId: "G-5CVPK58FZF"
        };
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        } else {
            firebase.app(); 
        }

        const db = firebase.firestore();
        var menuRef = db.collection('main').doc("menu")
        menuRef.get().then((doc) => {
            if (doc.exists) {
                var newdata = doc.data()
                newdata.tuna[1] = newdata.tuna[2]
                newdata.chicken[1] = newdata.chicken[2]
                newdata.salmon[1] = newdata.salmon[2]
                menuRef.update(newdata)
                    .then(() => {
                        console.log("Document successfully updated!");
                    })
                    .catch((error) => {
                        alert('에러가 발생했습니다')
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });


        var killquery = db.collection('result').where('timestamp', '<', new Date());
        killquery.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                doc.ref.delete();
            });
        });

        return null;
    });


exports.scheduledFunctionCrontab3 = functions.pubsub.schedule('every day 12:30')
    .timeZone('Asia/Tokyo') // Users can choose timezone - default is America/Los_Angeles
    .onRun((context) => {

        var firebaseConfig = {
            apiKey: "AIzaSyCNcRJBKZFcATd4NVtlX0OEt6If7hkjjz0",
            authDomain: "salad-gameberry.firebaseapp.com",
            projectId: "salad-gameberry",
            storageBucket: "salad-gameberry.appspot.com",
            messagingSenderId: "1013302033232",
            appId: "1:1013302033232:web:61bdc598aedd335f8a0a55",
            measurementId: "G-5CVPK58FZF"
        };
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        } else {
            firebase.app(); // if already initialized, use that one
        }

        const db = firebase.firestore();
        var menuRef = db.collection('main').doc("menu")
        menuRef.get().then((doc) => {
            if (doc.exists) {
                var newdata = doc.data()
                newdata.tuna[1] = newdata.tuna[2]
                newdata.chicken[1] = newdata.chicken[2]
                newdata.salmon[1] = newdata.salmon[2]
                menuRef.update(newdata)
                    .then(() => {
                        console.log("Document successfully updated!");
                    })
                    .catch((error) => {
                        alert('에러가 발생했습니다')
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });


        var killquery = db.collection('result').where('timestamp', '<', new Date());
        killquery.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                doc.ref.delete();
            });
        });

        return null;
    });