import MonthlyArchive from '../../components/monthlyArchive';
import Post  from '../../components/post/post';
import SidePage from '../../components/sidePage';

export default function PostView({ post, counts }) {
  return (
    <div>
      <Post post={post}/>
      <SidePage next={post.next_id} prev={post.prev_id}/>
      <MonthlyArchive counts={counts}/>
    </div>
  );
}////post={post}
  
export async function getStaticProps({params}) {//getServerSideProps   getStaticProps
  const res_p = await fetch(`${process.env.API_URL}/api/post/${params.id}`);
  const post = await res_p.json();
  const res_c = await fetch(`${process.env.API_URL}/api/variable/monthly`);
  const counts = await res_c.json();
  return { props: { post, counts } };
}

export async function getStaticPaths() {
  const res = await fetch(process.env.API_URL+"/api/post");
  const ids = await res.json();
  const paths = ids.map((id) => ({
    params: { id: id },
  }))
  return {
    paths,
    fallback: false,
  };
}