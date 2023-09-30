import { firestore } from '../firebaseConfig';
import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  setDoc,
  query,
  where,
  getDocs,
  deleteDoc,
} from 'firebase/firestore';
import { toast } from 'react-toastify';

const postsRef = collection(firestore, 'posts');
const usersRef = collection(firestore, 'users');
const likeRef = collection(firestore, 'likes');
const commentsRef = collection(firestore, 'comments');

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
        return { ...doc.data(), postId: doc.id };
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

export const likePost = async (userId, postId, liked, setLiked) => {
  try {
    const like = doc(likeRef, `${userId}_${postId}`);
    // set like in db
    if (liked) {
      deleteDoc(like);
      setLiked(false);
    } else {
      setDoc(like, { userId, postId });
      setLiked(true);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getLikesByPost = async (
  userId,
  postId,
  setLikesCount,
  setLiked
) => {
  try {
    const likeQuery = query(likeRef, where('postId', '==', postId));
    const querySnapshot = await getDocs(likeQuery);

    // get likes that have matched postId
    let likes = [];
    querySnapshot.forEach((doc) => {
      likes.push(doc.data());
    });

    // check if currentUser has liked the post
    const isLiked = likes.some((like) => like.userId === userId);

    // get users that have liked the post
    // const likedBy = likes.map((like) => like.userId);

    // number of likes
    const likesCount = likes.length;

    // set like count & liked
    setLikesCount(likesCount);
    setLiked(isLiked);
  } catch (error) {
    console.log(error);
  }
};

export const createComment = (postId, user, comment, timeStamp) => {
  addDoc(commentsRef, { postId, user, comment, timeStamp })
    .then(() => {
      toast.success('Comment has been added successfully!');
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getComments = (postId, setComments) => {
  try {
    const onSnapshotQuery = query(commentsRef, where('postId', '==', postId));

    onSnapshot(onSnapshotQuery, (response) => {
      setComments(
        response.docs.map((doc) => {
          return { commentId: doc.id, ...doc.data() };
        })
      );
    });
  } catch (error) {
    return error;
  }
};
