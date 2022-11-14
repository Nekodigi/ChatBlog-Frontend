import MonthlyArchive from "components/monthlyArchive";
import Posts from "components/posts/posts";
import SidePage from "components/sidePage";

export default function index({ posts, counts }) {
    return (
      <div>
        <Posts posts={posts.posts}/>
        <SidePage prev={posts.next_id ? posts.next_id.toString() : undefined} next={posts.prev_id ? posts.prev_id.toString() : undefined}/>
        <MonthlyArchive counts={counts}/>
      </div>
    );
  }
  
export async function getStaticProps({ params }) {
  const res_p = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/archive?page=${params.page}&n=${2}`);
  const posts = await res_p.json();
  const res_c = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/variable/monthly`);
  const counts = await res_c.json();
  //console.log(posts.posts);
  return { props: { posts, counts } };
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/archive?n=${2}`);
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: { page: post.toString() },
  }))
  return {
    paths,
    fallback: false,
  };
}