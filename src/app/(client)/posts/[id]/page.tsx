import React from 'react';
import Link from "next/link";




const PostPage = async ({searchParams}: any) => {

    let post = JSON.parse(searchParams.data);
    console.log(post);
    return (
        <div>
            <h1> Details about Post with id: {post.id}</h1>
            <p1>{post.title}</p1><br/>
            <p1>{post.body}</p1>
            <Link href={{pathname:`/posts/${post.id}/comments`, query:{data:JSON.stringify(post.id)} }}> <button>Get Comments</button> </Link>
        </div>
    );
};

export default PostPage;
