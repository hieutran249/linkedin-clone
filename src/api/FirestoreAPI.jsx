import { firestore } from '../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-toastify';

const dbRef = collection(firestore, 'posts');

export const PostStatus = (status) => {
  let object = { status };
  addDoc(dbRef, object)
    .then(() => {
      toast.success('Document has been added successfully!');
    })
    .catch((error) => {
      console.log(error);
    });
};
