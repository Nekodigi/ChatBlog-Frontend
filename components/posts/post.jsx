
import { imagePathUrl } from "../../utils/firebase";

export default function Post({post}) {
  return (
    <a href={`/post/${post.id}`} className="outerPost">
      {post.image_paths.length !== 0 ? <img src={imagePathUrl(post.image_paths[0])} className='thumbnail'/> : null}
      <div className="discription">
        <h2>{post.title}</h2>
        <p>{post.body.replace(/\n/g, '')}</p>
      </div>
      {post.image_paths.length === 0 ? <div className="thumbnail" /> : null}
    </a>
    
  );
}
