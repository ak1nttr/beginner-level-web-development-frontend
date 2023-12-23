import React from "react";
import Post from '../Post/post';
import {useState, useEffect} from "react";
import "./home.scss";
import { Container } from '@mui/material';




function Home() {
    const [error,setError] = useState(null);
    const [isLoaded , setIsLoaded] = useState(false);
    const [postList , setPostList] = useState([]);
    


    useEffect( () => {
            fetch("/posts")
            .then(res => res.json())
            .then(
                (result) => {
                        
                        setIsLoaded(true);
                        setPostList(result);

                }, (error) => {
                    
                        setError(error);
                        setIsLoaded(true);
                }    
            )
    } , []);

    if (error){
        return <div>
            Error!
        </div>
    }else if (!isLoaded){
       return <div>   
            Loading... 
        </div>
    }else {
        return (
            
        <Container fixedContainer>    
            {postList.map(post => (

                <Post title = {post.title} text = {post.text}> </Post>    
            
            ))}
        </Container>
        )
    }
        
}

export default Home;