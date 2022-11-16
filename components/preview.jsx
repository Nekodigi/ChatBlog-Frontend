import { useEffect, useState } from 'react';
import Post  from './post/post';

export default function Preview({id, router, statusToNote}) {

  const [post, setPost] = useState(undefined);
  useEffect(() => {//how to get value without ssg
      // useEffect自体ではasyncの関数を受け取れないので内部で関数を定義して呼び出す。
      const access_db = async () => {//how to use router param in useEffect https://zenn.dev/kiyokiyoabc/articles/d3a8464367094a
        if(router.isReady){
          const post = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/preview/${id}`)).json();//CORS
          setPost(post); // stateに反映する
        }
      };
      access_db();
  }, [id, router]);

  return (
    post ? <Post post={post} note={statusToNote(post)}/> : null
  );
}////post={post}