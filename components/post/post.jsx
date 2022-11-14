import Note from './note';
import ImageOverlay from './imageOverlay';
import { useState } from 'react';
import { imagePathUrl } from '../../utils/firebase';
import { formatDate } from '../../utils/date';

export default function Post({ post, note }) {//{ posts }
  const [overlay, setOverlay] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  let odd = post.image_paths.length%2 === 1 ? "odd" : "";

  return (
    <div>
      {overlay ? <ImageOverlay imageUrl={imageUrl} setOverlay={setOverlay}/> : null}
      <div className="paper">
        <div>
          {note ? <Note note={note} /> : null}
          <div className="heading">
            <h2 className="title">{post.title}</h2>
            <p className="date">{formatDate(post.created_date)}</p>
          </div>
          <div className={`postImages ${odd}`}>
            {post.image_paths.map((path) => {
              return <img key={path} src={imagePathUrl(path)} onClick={() => {setOverlay(true); setImageUrl(imagePathUrl(path))}} className="postImage" alt='image'/>
            })}
          </div>
          <p className="body">{post.body}</p>
        </div>
      </div>
    </div>
  );
}