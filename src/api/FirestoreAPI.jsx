import { firestore } from '../firebaseConfig';
import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { toast } from 'react-toastify';

const postsRef = collection(firestore, 'posts');
const usersRef = collection(firestore, 'users');

export const createPost = (post) => {
  addDoc(postsRef, post)
    .then(() => {
      toast.success('Post has been added successfully!');
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getPosts = (setallPosts) => {
  onSnapshot(postsRef, (response) => {
    setallPosts(
      response.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      })
    );
  });
};

export const createUser = (user) => {
  addDoc(usersRef, user)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
};

export const getCurrentUser = (setCurrentUser) => {
  const currentUserEmail = localStorage.getItem('userEmail');
  onSnapshot(usersRef, (response) => {
    setCurrentUser(
      response.docs
        .map((doc) => {
          return { ...doc.data(), userId: doc.id };
        })
        .filter((user) => {
          return user.email === currentUserEmail;
        })[0]
    );
  });
};

export const editProfile = (userId, payload) => {
  const user = doc(usersRef, userId);
  updateDoc(user, payload)
    .then(() => {
      toast.success('Profile has been updated successfully!');
    })
    .catch((error) => {
      console.log(error);
    });
};
