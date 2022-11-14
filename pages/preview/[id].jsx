import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Post  from '../../components/post/post';

export default function Preview() {
  const router = useRouter()
  const id = router.query.id;
  
  const statusToNote = (post) => {
    let note = undefined;
    switch(post.status){
      case "approved":
        note.message = "投稿が承認され、一覧からも確認できるようになりました。このメッセージをタップして新しいページに移動してください。";
        note.type = "success";
        break;
      case "waiting_approval":
        note.message = "ただいま確認待ちです。事務局が承認するまで一覧には表示されません。";
        note.type = "warning";
        break;
      case "denied":
        note.message = "投稿内容に問題があったため、投稿が拒否されました。内容を見直して再投稿頂けるようお願い致します。";
        note.type = "error"
        break;
    }
        // var message = "";
    // switch (post.post.status){
    //     case "approved":
    //         message = <a href={`/post/${post.post.id}`} class={`noteCard ${post.post.status}`}><p>投稿が承認され、一覧からも確認できるようになりました。このメッセージをタップして新しいページに移動してください。</p></a>;
    //         break;
    //     case "waiting_approval":
    //         message = <div class={`noteCard ${post.post.status}`}><p>ただいま確認待ちです。事務局が承認するまで一覧には表示されません。</p></div>;
    //         break;
    //     case "denied":
    //         message = <div class={`noteCard ${post.post.status}`}><p>投稿内容に問題があったため、投稿が拒否されました。内容を見直して再投稿頂けるようお願い致します。</p></div>;
    //         break;
    // }
  }

  const [post, setPost] = useState(undefined);
  useEffect(() => {//how to get value without ssg
      // useEffect自体ではasyncの関数を受け取れないので内部で関数を定義して呼び出す。
      const access_db = async () => {//how to use router param in useEffect https://zenn.dev/kiyokiyoabc/articles/d3a8464367094a
        if(router.isReady){console.log(id);
          const post = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/preview/${id}`)).json();//CORS
          console.log(post);
          
          setPost(post); // stateに反映する
        }
      };
      access_db();
  }, [id, router]);

  return (
    <div>
      {post ? <Post post={post}/> : null}
    </div>
  );
}////post={post}