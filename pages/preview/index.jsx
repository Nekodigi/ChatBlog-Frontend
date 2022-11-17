import { useEffect, useState } from 'react';
import Post  from 'components/post/post';
import { useRouter } from "next/router";

export default function PreviewView() {
  const router = useRouter()
  const id = router.query.id;

  const statusToNote = (post) => {
    let note = undefined;
    console.log(post);
    switch(post.status){
      case "approved":
        if(post.is_applied){
          note = {message:"投稿が承認され、一覧からも確認できるようになりました。このメッセージをタップして新しいページに移動してください。"
            ,type:"success",url:`/post/${post.id}`}
        }else{
          note = {message:"投稿が承認されたため、処理が完了後に一覧からも確認できるようになります。",type:"success"}
        }
        break;
      case "waiting_approval":
        note = {message:"ただいま確認待ちです。事務局が承認するまで一覧には表示されません。", type:"warning"};
        break;
      case "denied":
        if(post.is_applied){
          note = {message:"投稿内容に問題があったため、投稿が拒否されました。この投稿は一覧には表示されていません。内容を見直して再投稿頂けるようお願い致します。", type:"danger"};
        }else{
          note = {message:"投稿内容に問題があったため、投稿が拒否されました。内容を見直して再投稿頂けるようお願い致します。", type:"danger"};
        }
        break;
      case "error":
        note = {message:"ページは存在しないか、削除されています。", type:"danger"};
        break;
    }
    return note;
  }

  const [post, setPost] = useState(undefined);
  useEffect(() => {//how to get value without ssg
      // useEffect自体ではasyncの関数を受け取れないので内部で関数を定義して呼び出す。
      const access_db = async () => {//how to use router param in useEffect https://zenn.dev/kiyokiyoabc/articles/d3a8464367094a
        if(router.isReady){
          var post = {};
          try{
            post = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/preview/${id}`)).json();//CORS
          }catch(e){
            post.status = "error";
          }
          setPost(post); // stateに反映する
        }
      };
      access_db();
  }, [id, router]);

  return (
    <Post post={post} note={post && post.status ? statusToNote(post) : null}/>
  );
}