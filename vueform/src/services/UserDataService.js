import firebase from "../firebase";
const db = firebase.collection("/userdata");

class UserDataService {
  getAll() {
    return db;
  }
  create(user) {
    return db.add(user);
  }
  update(id,user){
    return db.doc(id).update(user);
  }
  delate(id){
    return db.doc(id).delate();
  }
}

export default new UserDataService();

