import Link from 'next/link';

export default function Note({ note }) {//{ posts }
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

    var message = <div className={`noteCard ${note.type}`}><p>{note.message}</p></div>;
    if(note.url !== undefined){
        message = <Link href={note.url} className={`noteCard ${note.type}`}><p>{note.message}</p></Link>;
    }

    return (
        {message}
    );
}
