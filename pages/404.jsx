import MonthlyArchive from "components/monthlyArchive";
import Posts from "components/posts/posts";
import SidePage from "components/sidePage";

export default function index({ posts, counts }) {
    return (
      <div>
        <Posts posts={posts.posts} statusMessage={`お探しのページが見つかりませんでした。`}/>
        <SidePage prev={posts.next_id ? posts.next_id.toString() : undefined} next={posts.prev_id ? posts.prev_id.toString() : undefined}/>
        <MonthlyArchive counts={counts}/>
      </div>
    );
  }
  
export async function getStaticProps({ params }) {
  const posts = await(await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/archive?page=1&n=${2}`)).json();
  const counts = await(await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/variable/monthly`)).json();
  //console.log(posts.posts);
  return { props: { posts, counts } };
}