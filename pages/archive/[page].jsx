import MonthlyArchive from "../../components/monthlyArchive";
import Posts from "../../components/posts/posts";

export default function index({ posts, counts }) {
    return (
      <div>
        <Posts />
        <MonthlyArchive counts={counts}/>
      </div>
    );
  }
  
export async function getStaticProps({ params }) {
  const res_p = await fetch(`${process.env.API_URL}/api/archive?page=${params.page}&n=${2}`);
  const posts = await res_p.json();
  const res_c = await fetch(`${process.env.API_URL}/api/variable/monthly`);
  const counts = await res_c.json();
  return { props: { posts, counts } };
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}/api/archive?n=${2}`);
  const posts = await res.json();
  console.log(posts);
  const paths = posts.map((post) => ({
    params: { page: post.toString() },
  }))
  return {
    paths,
    fallback: false,
  };
}