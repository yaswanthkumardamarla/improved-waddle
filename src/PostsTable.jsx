// Implement a Data Table Component:
// Create a data table component that can handle large datasets efficiently. Include features like sorting & pagination (10 records per page).
// https://jsonplaceholder.typicode.com/posts

import React,{useState,useEffect, useMemo} from 'react';
import './styles.css';


const PostsTable = () =>{
    const [posts,setPosts]= useState([])
    const [pageNumber,setPageNumber] = useState(1);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then(async (response)=>{
        const postsData = await response.json() 
        console.log(postsData)
            setPosts(postsData)
        }).catch(()=>{
            alert("api failed")
        })
    },[])


// console.log(posts.filter((post,index) => index<10),posts)
    return(
        <div className='parentContaner'>
          {posts.length ?  
          <div>
          <table className='tableWrapper'>
                <thead>
                    <tr className='tableRow'>
                    <td className='tableData'>id</td>
                    <td className='tableData'>User Id</td>
                    <td className='tableData'>Title</td>
                    <td className='tableData'>Body</td>
                    </tr>
                </thead>
                <tbody>
                    {posts.slice(0,pageNumber*10).map((post)=>(
                        <tr>
                            <td className='tableData'>{post.id}</td>
                            <td className='tableData'>{post.userId}</td>
                            <td className='tableData'>{post.title}</td>
                            <td className='tableData'>{post.body}</td>
                        </tr>
                        ))}
                </tbody>
            </table>
            <button onClick={()=>{setPageNumber(pageNumber+1)}}>Load More</button>
</div>

            : <></>}
        </div>
    )
}

export default PostsTable