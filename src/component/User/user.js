import React from "react";
import { useParams } from "react-router-dom";
import Post from "../Post/post";

function User() {

    const {userId} = useParams();
    return ( <div>
                   User ID : {userId}
                   <Post>

                   </Post>
        </div>
        );
}

export default User;