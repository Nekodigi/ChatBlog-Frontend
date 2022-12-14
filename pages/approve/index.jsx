import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Post  from 'components/post/post';

export default function PreviewView() {
  const router = useRouter()
  const id = router.query.id;
  const hash = router.query.hash;

  const statusToNote = (res,post) => {
    let note = undefined;
    switch(res){
      case "change_to_approved":
        note = {
          message:"投稿の承認に成功しました。しばらくすると一覧に表示されます。",type:"success"}
        break;
      case "already_approved":
        if(post.is_applied){
          note = {message:"既に投稿は承認されており、一覧に表示されています。", type:"warning"};
        }else{
          note = {message:"既に投稿は承認されており、処理が完了した後に一覧に表示されます。", type:"warning"};
        }
        break;
      case "wrong_hash":
        note = {message:"URLが間違っています。", type:"danger"};
        break;
      case "not_found":
          note = {message:"ページは存在しないか、削除されています。", type:"danger"};
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
        const res = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/approve/${id}/?hash=${hash}`, {method:'POST'})).text();
        setRes(res);
        console.log(res);
        if(res !== "not_found"){
          const post = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/preview/${id}`)).json();
          setPost(post); // stateに反映する
        }else{
          setPost({status:"not_found"});
        }
      }
    };
    access_db();
  }, [id, router]);

  return (
    <Post post={post} note={res && post ? statusToNote(res,post) : null}/>
  );
}