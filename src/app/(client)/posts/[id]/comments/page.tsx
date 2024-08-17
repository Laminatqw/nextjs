import React from 'react';
import {getAllPosts, getPostComments} from "@/services/api.service";
import Link from "next/link";

const CommentPage = async ({searchParams}: any) => {


    let posts = await getPostComments(searchParams.data);

    return (
        <div>
            {
                posts.map(value =>
                    <div class ={'post'} key={value.id} >
                        <h1>{value.name}</h1><br/>
                        {value.id}   {value.body}

                    </div>
                )


            }
        </div>
    );
};

export default CommentPage;