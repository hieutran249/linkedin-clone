import { firestore } from '../firebaseConfig';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { toast } from 'react-toastify';

const dbRef = collection(firestore, 'posts');

export const createPost = (post) => {
  addDoc(dbRef, post)
    .then(() => {
      toast.success('Document has been added successfully!');
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getPosts = (setallPosts) => {
  onSnapshot(dbRef, (response) => {
    setallPosts(
      response.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      })
    );
  });
};
