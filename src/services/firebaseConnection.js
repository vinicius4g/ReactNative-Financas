import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

let firebaseConfig = {
    
};

// verificando se tem alguma conexao aberta, se nao tiver é aberto uma.
if(!firebase.apps.length){
    //abrir conexao
    firebase.initializeApp(firebaseConfig); 
}

export default firebase;