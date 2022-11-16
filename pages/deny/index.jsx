import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Post  from 'components/post/post';

export default function PreviewView() {
  const router = useRouter()
  const id = router.query.id;
  const hash = router.query.hash;

  const statusToNote = (res, post) => {
    let note = undefined;
    switch(res){
      case "change_to_denied":
        note = {
          message:"投稿の拒否に成功しました。一覧には表示されなくなります。",type:"success"}
        break;
      case "already_denied":
        if(post.is_applied){
          note = {message:"既に投稿は拒否されており、一覧に表示されていません。", type:"warning"};
        }else{
          note = {message:"既に投稿は拒否されており、処理が完了した後に一覧に表示されなくなります。", type:"warning"};
        }
        break;
      case "wrong_hash":
        note = {message:"URLが間違っています。", type:"danger"};
        break;
    }
    return note;
  }

  const [post, setPost] = useState(undefined);
  const [res, setRes] = useState(undefined);
  useEffect(() => {//how to get value without ssg
    // useEffect自体ではasyncの関数を受け取れないので内部で関数を定義して呼び出す。
    const access_db = async () => {//how to use router param in useEffect https://zenn.dev/kiyokiyoabc/articles/d3a8464367094a
      if(router.isReady){
        const res = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/deny/${id}/?hash=${hash}`, {method:'POST'})).text();
        console.log(res);
        setRes(res);
        const post = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/preview/${id}`)).json();
        setPost(post); // stateに反映する
      }
    };
    access_db();
  }, [id, router]);

  return (
    <Post post={post} note={post && res ? statusToNote(res, post) : null}/>
  );
}