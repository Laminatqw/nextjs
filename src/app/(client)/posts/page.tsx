import React from 'react';
import {getAllPosts} from "@/services/api.service";
import Link from "next/link";
import './pagestyles.css';

const PostsPage = async () => {

    let posts = await getAllPosts();


    return (
        <div>
            {
                posts.map(value =>
                    <div class ={'post'} key={value.id} >
                        <h1>{value.title}</h1><br/>
                        {value.body}
                        <Link href={{pathname:`/posts/${value.id}`, query:{data:JSON.stringify(value)} }}> <button>Post Comments</button></Link>
                    </div>
               )


            }
        </div>
    );
};

export default PostsPage;
