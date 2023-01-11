import firestore from '@react-native-firebase/firestore';


firestore()
  .collection('user')
  .doc('ABC')
  .set({
    name: 'Ada Lovelace',
    age: 30,
  })
  .then(() => {
    console.log('User added!');
  });