
// const firebase = require('firebase')
// const functions = require("firebase-functions");



// // // Create and Deploy Your First Cloud Functions
// // // https://firebase.google.com/docs/functions/write-firebase-functions
// //


// // var firebaseConfig = {
// //     apiKey: "AIzaSyCNcRJBKZFcATd4NVtlX0OEt6If7hkjjz0",
// //     authDomain: "salad-gameberry.firebaseapp.com",
// //     projectId: "salad-gameberry",
// //     storageBucket: "salad-gameberry.appspot.com",
// //     messagingSenderId: "1013302033232",
// //     appId: "1:1013302033232:web:61bdc598aedd335f8a0a55",
// //     measurementId: "G-5CVPK58FZF"
// // };
// // if (!firebase.apps.length) {
// //     firebase.initializeApp(firebaseConfig);
// // } else {
// //     firebase.app(); // if already initialized, use that one
// // }
// // const db = firebase.firestore();


// // exports.scheduledFunction = functions.pubsub.schedule('every 5 minutes').onRun((context) => {
// //     var menuRef = db.collection('main').doc("menu")
// //     menuRef.get().then((doc) => {
// //         if (doc.exists) {
// //             var newdata = doc.data()
// //             newdata.tuna[1] = newdata.tuna[2]
// //             newdata.chicken[1] = newdata.chicken[2]
// //             newdata.salmon[1] = newdata.salmon[2]
// //             menuRef.update(newdata)
// //                 .then(() => {
// //                     console.log("Document successfully updated!");
// //                 })
// //                 .catch((error) => {
// //                     alert('에러가 발생했습니다')
// //                     // The document probably doesn't exist.
// //                     console.error("Error updating document: ", error);
// //                 });
// //         } else {
// //             console.log("No such document!");
// //         }
// //     }).catch((error) => {
// //         console.log("Error getting document:", error);
// //     });


// //     var killquery = db.collection('result').where('timestamp', '<', new Date());
// //     killquery.get().then(function (querySnapshot) {
// //         querySnapshot.forEach(function (doc) {
// //             doc.ref.delete();
// //         });
// //     });

// //     return null;
// // });

// exports.scheduledFunctionCrontab1 = functions.pubsub.schedule('every day 13:00')
//     .timeZone('Asia/Seoul') // Users can choose timezone - default is America/Los_Angeles
//     .onRun((context) => {
//         console.log('아아아')
//         var firebaseConfig = {
//             apiKey: "AIzaSyCNcRJBKZFcATd4NVtlX0OEt6If7hkjjz0",
//             authDomain: "salad-gameberry.firebaseapp.com",
//             projectId: "salad-gameberry",
//             storageBucket: "salad-gameberry.appspot.com",
//             messagingSenderId: "1013302033232",
//             appId: "1:1013302033232:web:61bdc598aedd335f8a0a55",
//             measurementId: "G-5CVPK58FZF"
//         };
//         if (!firebase.apps.length) {
//             firebase.initializeApp(firebaseConfig);
//         } else {
//             firebase.app(); // if already initialized, use that one
//         }

//         const db = firebase.firestore();
//         var menuRef = db.collection('main').doc("menu")
//         menuRef.get().then((doc) => {
//             if (doc.exists) {
//                 var newdata = doc.data()
//                 newdata.tuna[1] = newdata.tuna[2]
//                 newdata.chicken[1] = newdata.chicken[2]
//                 newdata.salmon[1] = newdata.salmon[2]
//                 menuRef.update(newdata)
//                     .then(() => {
//                         console.log("Document successfully updated!");
//                     })
//                     .catch((error) => {
//                         alert('에러가 발생했습니다')
//                         // The document probably doesn't exist.
//                         console.error("Error updating document: ", error);
//                     });
//             } else {
//                 console.log("No such document!");
//             }
//         }).catch((error) => {
//             console.log("Error getting document:", error);
//         });


//         var killquery = db.collection('result').where('timestamp', '<', new Date());
//         killquery.get().then(function (querySnapshot) {
//             querySnapshot.forEach(function (doc) {
//                 doc.ref.delete();
//             });
//         });

//         return null;
//     });
    
// exports.scheduledFunctionCrontab2 = functions.pubsub.schedule('every day 13:00')
//     .timeZone('Asia/Tokyo') // Users can choose timezone - default is America/Los_Angeles
//     .onRun((context) => {
        
//         const firebase = require('firebase')

//         var firebaseConfig = {
//             apiKey: "AIzaSyCNcRJBKZFcATd4NVtlX0OEt6If7hkjjz0",
//             authDomain: "salad-gameberry.firebaseapp.com",
//             projectId: "salad-gameberry",
//             storageBucket: "salad-gameberry.appspot.com",
//             messagingSenderId: "1013302033232",
//             appId: "1:1013302033232:web:61bdc598aedd335f8a0a55",
//             measurementId: "G-5CVPK58FZF"
//         };
//         if (!firebase.apps.length) {
//             firebase.initializeApp(firebaseConfig);
//         } else {
//             firebase.app(); 
//         }

//         const db = firebase.firestore();
//         var menuRef = db.collection('main').doc("menu")
//         menuRef.get().then((doc) => {
//             if (doc.exists) {
//                 var newdata = doc.data()
//                 newdata.tuna[1] = newdata.tuna[2]
//                 newdata.chicken[1] = newdata.chicken[2]
//                 newdata.salmon[1] = newdata.salmon[2]
//                 menuRef.update(newdata)
//                     .then(() => {
//                         console.log("Document successfully updated!");
//                     })
//                     .catch((error) => {
//                         alert('에러가 발생했습니다')
//                         // The document probably doesn't exist.
//                         console.error("Error updating document: ", error);
//                     });
//             } else {
//                 console.log("No such document!");
//             }
//         }).catch((error) => {
//             console.log("Error getting document:", error);
//         });


//         var killquery = db.collection('result').where('timestamp', '<', new Date());
//         killquery.get().then(function (querySnapshot) {
//             querySnapshot.forEach(function (doc) {
//                 doc.ref.delete();
//             });
//         });

//         return null;
//     });


// exports.scheduledFunctionCrontab3 = functions.pubsub.schedule('every day 13:00')
//     .timeZone('Asia/Tokyo') // Users can choose timezone - default is America/Los_Angeles
//     .onRun((context) => {
//         console.log('예약함수 시작')
//         var firebase = require('firebase')
//         var firebaseConfig = {
//             apiKey: "AIzaSyCNcRJBKZFcATd4NVtlX0OEt6If7hkjjz0",
//             authDomain: "salad-gameberry.firebaseapp.com",
//             projectId: "salad-gameberry",
//             storageBucket: "salad-gameberry.appspot.com",
//             messagingSenderId: "1013302033232",
//             appId: "1:1013302033232:web:61bdc598aedd335f8a0a55",
//             measurementId: "G-5CVPK58FZF"
//         };
//         if (!firebase.apps.length) {
//             firebase.initializeApp(firebaseConfig);
//             console.log('파이어베이스 첫 시작')
//         } else {
//             console.log('파이어베이스 이미 있음')
//             firebase.app(); // if already initialized, use that one
//         }

//         var db = firebase.firestore();
//         console.log('여기까지 왔슴둥')
//         var menuRef = db.collection('main').doc("menu")
//         menuRef.get().then((doc) => {
//             console.log('여기까지 왔슴둥~~')
//             if (doc.exists) {
//                 var newdata = doc.data()
//                 console.log('업데이트 직전까지 왔슴둥')
//                 menuRef.update(newdata)
//                     .then(() => {
//                         console.log("Document successfully updated!");
//                     })
//                     .catch((error) => {
//                         alert('에러가 발생했습니다')
//                         // The document probably doesn't exist.
//                         console.error("Error updating document: ", error);
//                     });
//             } else {
//                 console.log("No such document!");
//             }
//         }).catch((error) => {
//             console.log("Error getting document:", error);
//         });

//         setTimeout(function() {
//             firebase = require('firebase')
//             console.log('여기까지 왔슴둥2')
//             db = firebase.firestore();
//             console.log('여기까지 왔슴둥3')
//             menuRef = db.collection('main').doc("menu")
//             console.log('여기까지 왔슴둥4')
//             menuRef.get().then((doc) => {
//                 console.log('여기까지 왔슴둥6')
//                 if (doc.exists) {
//                     var newdata = doc.data()
//                     console.log('업데이트 직전까지 왔슴둥')
//                     menuRef.update(newdata)
//                         .then(() => {
//                             console.log("Document successfully updated!");
//                         })
//                         .catch((error) => {
//                             alert('에러가 발생했습니다')
//                             // The document probably doesn't exist.
//                             console.error("Error updating document: ", error);
//                         });
//                 } else {
//                     console.log("No such document!");
//                 }
//             }).catch((error) => {
//                 console.log("Error getting document:", error);
//             });
//           }, 8000);


//         // var killquery = db.collection('result').where('timestamp', '<', new Date());
//         // killquery.get().then(function (querySnapshot) {
//         //     querySnapshot.forEach(function (doc) {
//         //         doc.ref.delete();
//         //     });
//         // });

//         return null;
//     });

//     exports.scheduledFunctionCrontab4 = functions.pubsub.schedule('every day 13:00')
//     .timeZone('Asia/Tokyo') // Users can choose timezone - default is America/Los_Angeles
//     .onRun((context) => {
        
//         const firebase = require('firebase')

//         var firebaseConfig = {
//             apiKey: "AIzaSyCNcRJBKZFcATd4NVtlX0OEt6If7hkjjz0",
//             authDomain: "salad-gameberry.firebaseapp.com",
//             projectId: "salad-gameberry",
//             storageBucket: "salad-gameberry.appspot.com",
//             messagingSenderId: "1013302033232",
//             appId: "1:1013302033232:web:61bdc598aedd335f8a0a55",
//             measurementId: "G-5CVPK58FZF"
//         };
//         if (!firebase.apps.length) {
//             firebase.initializeApp(firebaseConfig);
//         } else {
//             firebase.app(); 
//         }

//         const db = firebase.firestore();
//         var menuRef = db.collection('main').doc("menu")
//         menuRef.get().then((doc) => {
//             if (doc.exists) {
//                 var newdata = doc.data()
//                 newdata.tuna[1] = newdata.tuna[2]
//                 newdata.chicken[1] = newdata.chicken[2]
//                 newdata.salmon[1] = newdata.salmon[2]
//                 menuRef.update(newdata)
//                     .then(() => {
//                         console.log("Document successfully updated!");
//                     })
//                     .catch((error) => {
//                         alert('에러가 발생했습니다')
//                         // The document probably doesn't exist.
//                         console.error("Error updating document: ", error);
//                     });
//             } else {
//                 console.log("No such document!");
//             }
//         }).catch((error) => {
//             console.log("Error getting document:", error);
//         });


//         var killquery = db.collection('result').where('timestamp', '<', new Date());
//         killquery.get().then(function (querySnapshot) {
//             querySnapshot.forEach(function (doc) {
//                 doc.ref.delete();
//             });
//         });

//         return null;
//     });


//     exports.scheduledFunctionCrontab5 = functions.pubsub.schedule('every day 13:00')
//     .timeZone('Asia/Tokyo') // Users can choose timezone - default is America/Los_Angeles
//     .onRun((context) => {
        
//         const firebase = require('firebase')

//         var firebaseConfig = {
//             apiKey: "AIzaSyCNcRJBKZFcATd4NVtlX0OEt6If7hkjjz0",
//             authDomain: "salad-gameberry.firebaseapp.com",
//             projectId: "salad-gameberry",
//             storageBucket: "salad-gameberry.appspot.com",
//             messagingSenderId: "1013302033232",
//             appId: "1:1013302033232:web:61bdc598aedd335f8a0a55",
//             measurementId: "G-5CVPK58FZF"
//         };
//         if (!firebase.apps.length) {
//             firebase.initializeApp(firebaseConfig);
//         } else {
//             firebase.app(); 
//         }

//         const db = firebase.firestore();
//         var menuRef = db.collection('main').doc("menu")
//         menuRef.get().then((doc) => {
//             if (doc.exists) {
//                 var newdata = doc.data()
//                 newdata.tuna[1] = newdata.tuna[2]
//                 newdata.chicken[1] = newdata.chicken[2]
//                 newdata.salmon[1] = newdata.salmon[2]
//                 menuRef.update(newdata)
//                     .then(() => {
//                         console.log("Document successfully updated!");
//                     })
//                     .catch((error) => {
//                         alert('에러가 발생했습니다')
//                         // The document probably doesn't exist.
//                         console.error("Error updating document: ", error);
//                     });
//             } else {
//                 console.log("No such document!");
//             }
//         }).catch((error) => {
//             console.log("Error getting document:", error);
//         });


//         var killquery = db.collection('result').where('timestamp', '<', new Date());
//         killquery.get().then(function (querySnapshot) {
//             querySnapshot.forEach(function (doc) {
//                 doc.ref.delete();
//             });
//         });

//         return null;
//     });


//     exports.scheduledFunctionCrontab6 = functions.pubsub.schedule('every day 13:00')
//     .timeZone('Asia/Tokyo') // Users can choose timezone - default is America/Los_Angeles
//     .onRun((context) => {
        
//         const firebase = require('firebase')

//         var firebaseConfig = {
//             apiKey: "AIzaSyCNcRJBKZFcATd4NVtlX0OEt6If7hkjjz0",
//             authDomain: "salad-gameberry.firebaseapp.com",
//             projectId: "salad-gameberry",
//             storageBucket: "salad-gameberry.appspot.com",
//             messagingSenderId: "1013302033232",
//             appId: "1:1013302033232:web:61bdc598aedd335f8a0a55",
//             measurementId: "G-5CVPK58FZF"
//         };
//         if (!firebase.apps.length) {
//             firebase.initializeApp(firebaseConfig);
//         } else {
//             firebase.app(); 
//         }

//         const db = firebase.firestore();
//         var menuRef = db.collection('main').doc("menu")
//         menuRef.get().then((doc) => {
//             if (doc.exists) {
//                 var newdata = doc.data()
//                 newdata.tuna[1] = newdata.tuna[2]
//                 newdata.chicken[1] = newdata.chicken[2]
//                 newdata.salmon[1] = newdata.salmon[2]
//                 menuRef.update(newdata)
//                     .then(() => {
//                         console.log("Document successfully updated!");
//                     })
//                     .catch((error) => {
//                         alert('에러가 발생했습니다')
//                         // The document probably doesn't exist.
//                         console.error("Error updating document: ", error);
//                     });
//             } else {
//                 console.log("No such document!");
//             }
//         }).catch((error) => {
//             console.log("Error getting document:", error);
//         });


//         var killquery = db.collection('result').where('timestamp', '<', new Date());
//         killquery.get().then(function (querySnapshot) {
//             querySnapshot.forEach(function (doc) {
//                 doc.ref.delete();
//             });
//         });

//         return null;
//     });

//     exports.scheduledFunctionCrontab7 = functions.pubsub.schedule('every day 13:00')
//     .timeZone('Asia/Tokyo') // Users can choose timezone - default is America/Los_Angeles
//     .onRun((context) => {
        
//         const firebase = require('firebase')

//         var firebaseConfig = {
//             apiKey: "AIzaSyCNcRJBKZFcATd4NVtlX0OEt6If7hkjjz0",
//             authDomain: "salad-gameberry.firebaseapp.com",
//             projectId: "salad-gameberry",
//             storageBucket: "salad-gameberry.appspot.com",
//             messagingSenderId: "1013302033232",
//             appId: "1:1013302033232:web:61bdc598aedd335f8a0a55",
//             measurementId: "G-5CVPK58FZF"
//         };
//         if (!firebase.apps.length) {
//             firebase.initializeApp(firebaseConfig);
//         } else {
//             firebase.app(); 
//         }

//         const db = firebase.firestore();
//         var menuRef = db.collection('main').doc("menu")
//         menuRef.get().then((doc) => {
//             if (doc.exists) {
//                 var newdata = doc.data()
//                 newdata.tuna[1] = newdata.tuna[2]
//                 newdata.chicken[1] = newdata.chicken[2]
//                 newdata.salmon[1] = newdata.salmon[2]
//                 menuRef.update(newdata)
//                     .then(() => {
//                         console.log("Document successfully updated!");
//                     })
//                     .catch((error) => {
//                         alert('에러가 발생했습니다')
//                         // The document probably doesn't exist.
//                         console.error("Error updating document: ", error);
//                     });
//             } else {
//                 console.log("No such document!");
//             }
//         }).catch((error) => {
//             console.log("Error getting document:", error);
//         });


//         var killquery = db.collection('result').where('timestamp', '<', new Date());
//         killquery.get().then(function (querySnapshot) {
//             querySnapshot.forEach(function (doc) {
//                 doc.ref.delete();
//             });
//         });

//         return null;
//     });

//     exports.scheduledFunctionCrontab8 = functions.pubsub.schedule('every day 13:00')
//     .timeZone('Asia/Tokyo') // Users can choose timezone - default is America/Los_Angeles
//     .onRun((context) => {
        
//         const firebase = require('firebase')

//         var firebaseConfig = {
//             apiKey: "AIzaSyCNcRJBKZFcATd4NVtlX0OEt6If7hkjjz0",
//             authDomain: "salad-gameberry.firebaseapp.com",
//             projectId: "salad-gameberry",
//             storageBucket: "salad-gameberry.appspot.com",
//             messagingSenderId: "1013302033232",
//             appId: "1:1013302033232:web:61bdc598aedd335f8a0a55",
//             measurementId: "G-5CVPK58FZF"
//         };
//         if (!firebase.apps.length) {
//             firebase.initializeApp(firebaseConfig);
//         } else {
//             firebase.app(); 
//         }

//         const db = firebase.firestore();
//         var menuRef = db.collection('main').doc("menu")
//         menuRef.get().then((doc) => {
//             if (doc.exists) {
//                 var newdata = doc.data()
//                 newdata.tuna[1] = newdata.tuna[2]
//                 newdata.chicken[1] = newdata.chicken[2]
//                 newdata.salmon[1] = newdata.salmon[2]
//                 menuRef.update(newdata)
//                     .then(() => {
//                         console.log("Document successfully updated!");
//                     })
//                     .catch((error) => {
//                         alert('에러가 발생했습니다')
//                         // The document probably doesn't exist.
//                         console.error("Error updating document: ", error);
//                     });
//             } else {
//                 console.log("No such document!");
//             }
//         }).catch((error) => {
//             console.log("Error getting document:", error);
//         });


//         var killquery = db.collection('result').where('timestamp', '<', new Date());
//         killquery.get().then(function (querySnapshot) {
//             querySnapshot.forEach(function (doc) {
//                 doc.ref.delete();
//             });
//         });

//         return null;
//     });


//     exports.scheduledFunctionCrontab9 = functions.pubsub.schedule('every day 13:00')
//     .timeZone('Asia/Tokyo') // Users can choose timezone - default is America/Los_Angeles
//     .onRun((context) => {
        
//         const firebase = require('firebase')

//         var firebaseConfig = {
//             apiKey: "AIzaSyCNcRJBKZFcATd4NVtlX0OEt6If7hkjjz0",
//             authDomain: "salad-gameberry.firebaseapp.com",
//             projectId: "salad-gameberry",
//             storageBucket: "salad-gameberry.appspot.com",
//             messagingSenderId: "1013302033232",
//             appId: "1:1013302033232:web:61bdc598aedd335f8a0a55",
//             measurementId: "G-5CVPK58FZF"
//         };
//         if (!firebase.apps.length) {
//             firebase.initializeApp(firebaseConfig);
//         } else {
//             firebase.app(); 
//         }

//         const db = firebase.firestore();
//         var menuRef = db.collection('main').doc("menu")
//         menuRef.get().then((doc) => {
//             if (doc.exists) {
//                 var newdata = doc.data()
//                 newdata.tuna[1] = newdata.tuna[2]
//                 newdata.chicken[1] = newdata.chicken[2]
//                 newdata.salmon[1] = newdata.salmon[2]
//                 menuRef.update(newdata)
//                     .then(() => {
//                         console.log("Document successfully updated!");
//                     })
//                     .catch((error) => {
//                         alert('에러가 발생했습니다')
//                         // The document probably doesn't exist.
//                         console.error("Error updating document: ", error);
//                     });
//             } else {
//                 console.log("No such document!");
//             }
//         }).catch((error) => {
//             console.log("Error getting document:", error);
//         });


//         var killquery = db.collection('result').where('timestamp', '<', new Date());
//         killquery.get().then(function (querySnapshot) {
//             querySnapshot.forEach(function (doc) {
//                 doc.ref.delete();
//             });
//         });

//         return null;
//     });
//     exports.scheduledFunctionCrontab10 = functions.pubsub.schedule('every day 13:00')
//     .timeZone('Asia/Tokyo') // Users can choose timezone - default is America/Los_Angeles
//     .onRun((context) => {
        
//         const firebase = require('firebase')

//         var firebaseConfig = {
//             apiKey: "AIzaSyCNcRJBKZFcATd4NVtlX0OEt6If7hkjjz0",
//             authDomain: "salad-gameberry.firebaseapp.com",
//             projectId: "salad-gameberry",
//             storageBucket: "salad-gameberry.appspot.com",
//             messagingSenderId: "1013302033232",
//             appId: "1:1013302033232:web:61bdc598aedd335f8a0a55",
//             measurementId: "G-5CVPK58FZF"
//         };
//         if (!firebase.apps.length) {
//             firebase.initializeApp(firebaseConfig);
//         } else {
//             firebase.app(); 
//         }

//         const db = firebase.firestore();
//         var menuRef = db.collection('main').doc("menu")
//         menuRef.get().then((doc) => {
//             if (doc.exists) {
//                 var newdata = doc.data()
//                 newdata.tuna[1] = newdata.tuna[2]
//                 newdata.chicken[1] = newdata.chicken[2]
//                 newdata.salmon[1] = newdata.salmon[2]
//                 menuRef.update(newdata)
//                     .then(() => {
//                         console.log("Document successfully updated!");
//                     })
//                     .catch((error) => {
//                         alert('에러가 발생했습니다')
//                         // The document probably doesn't exist.
//                         console.error("Error updating document: ", error);
//                     });
//             } else {
//                 console.log("No such document!");
//             }
//         }).catch((error) => {
//             console.log("Error getting document:", error);
//         });


//         var killquery = db.collection('result').where('timestamp', '<', new Date());
//         killquery.get().then(function (querySnapshot) {
//             querySnapshot.forEach(function (doc) {
//                 doc.ref.delete();
//             });
//         });

//         return null;
//     });
