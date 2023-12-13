import { useEffect, useState } from 'react';
import app from '../shared/FirebaseConfig';
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import GameList from '../components/Home/GameList';
import Posts from '../components/Home/Posts';

export default function Home() {
  const db = getFirestore(app);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, 'admin'));
      const postData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postData);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const onGamePress = async (gameName) => {
    setPosts([]);
    if (gameName === 'Other Games') {
      getPosts();
      return;
    }

    try {
      setLoading(true);
      const q = query(collection(db, 'admin'), where('game', '==', gameName));
      const querySnapshot = await getDocs(q);
      const postData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postData);
    } catch (error) {
      console.error('Error fetching posts by game:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async (postId) => {
    try {
      const postRef = doc(db, 'admin', postId);
      const postDoc = await getDoc(postRef);

      if (postDoc.exists()) {
        const currentLikes = postDoc.data().likes || 0;
        await updateDoc(postRef, { likes: currentLikes + 1 });
        // Fetch posts again to update the state
        getPosts();
      }
    } catch (error) {
      console.error('Error updating likes:', error);
    }
  };

  const handleComment = async (postId, newComment) => {
    try {
      const postRef = doc(db, 'admin', postId);
      const postDoc = await getDoc(postRef);

      if (postDoc.exists()) {
        const currentComments = postDoc.data().comments || [];
        const updatedComments = [...currentComments, newComment];

        await updateDoc(postRef, { comments: updatedComments });
        // Fetch posts again to update the state
        getPosts();
      }
    } catch (error) {
      console.error('Error updating comments:', error);
    }
  };

  return (
    <div className='flex items-center justify-center '>
    <div className="w-[542px]  ">
      <GameList onGamePress={onGamePress} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Posts posts={posts} onLike={handleLike} onComment={handleComment} />
      )}
    </div>
    </div>
  );
}
