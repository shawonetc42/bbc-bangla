
import GameList from '../components/Home/GameList'
import Posts from '../components/Home/Posts'
import app from '../shared/FirebaseConfig'
import { getFirestore, doc, setDoc, getDoc, 
  collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from 'react'
import FirrstPage from '../components/Home/FirrstPage'
import Task from '../components/Home/Task'
import Slide from '../components/Admin/Slide'
import Section1bg from '../components/TechWind/Section1bg';
import Grid from '../components/TechWind/Grid';
import Project from '../components/TechWind/Project';
import Footer from '../components/bbc/Footer';
import Header from '../components/bbc/Header';
import Header2 from '../components/bbc/Header2';

export default function Home() {

  const db=getFirestore(app);
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    getPost();
  },[])

  const getPost=async()=>{
    const querySnapshot = await getDocs(collection(db, "admin"));
    querySnapshot.forEach((doc) => {
    
   setPosts(posts=>[...posts,doc.data()]);
});
  }

  const onGamePress=async(gameName)=>{
    setPosts([]);
    if(gameName=='Other Games')
    {
      getPost();
      return ;
    }
    const q=query(collection(db,"admin"),
    where("game","==",gameName));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      let data=doc.data();
      data.id=doc.id
      setPosts(posts=>[...posts,doc.data()]);
   
});
  }
  
  return (
   <div>
   
   <Header/>
    
     <div className='flex flex-col items-center justify-center mt-9'>
       <div className=''>
          
          
          {/* <GameList onGamePress={onGamePress}/> */}
          {posts? <Posts posts={posts} />:null}
          
       </div>
     </div>
     <Footer/>
    </div>
  )
}
