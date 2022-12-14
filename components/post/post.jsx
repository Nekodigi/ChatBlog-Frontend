import Note from './note';
import ImageOverlay from './imageOverlay';
import { useState } from 'react';
import { imagePathUrl } from '../../utils/firebase';
import { formatDate } from '../../utils/date';

export default function Post({ post, note }) {//{ posts }
  const [overlay, setOverlay] = useState(false);
  const [imageUrl, setImageUrl] = useState("");


  return (
    <div>
      {overlay ? <ImageOverlay imageUrl={imageUrl} setOverlay={setOverlay}/> : null}
      <div className="paper">
        {post && post.title != undefined ? 
          <div>
            {note ? <Note note={note} /> : null}
            
            <div className="heading">
              <h2 className="title">{post.title}</h2>
              <p className="date">{formatDate(post.created_date)}</p>
            </div>
            <div className={`postImages ${post.image_paths.length%2 === 1 ? "odd" : ""}`}>
              {post.image_paths.map((path) => {
                return <img key={path} src={imagePathUrl(path)} onClick={() => {setOverlay(true); setImageUrl(imagePathUrl(path))}} className="postImage" alt='image'/>
              })}
            </div>
            <p className="body">{post.body}</p>
          </div>
        : <Note note={note ? note : {message:"読み込み中です。しばらくお待ちください。", type:"info"}} />}
      </div>
    </div>
  );
}