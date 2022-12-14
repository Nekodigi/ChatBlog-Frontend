import MonthlyArchive from '../../components/monthlyArchive';
import Post  from '../../components/post/post';
import SidePage from '../../components/sidePage';

export default function PostView({ post, counts }) {
  return (
    <div>
      <Post post={post.post}/>
      <SidePage prev={post.next_id} next={post.prev_id}/>
      <MonthlyArchive counts={counts}/>
    </div>
  );
}////post={post}
  
export async function getStaticProps({params}) {//getServerSideProps   getStaticProps
  const post = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/${params.id}`)).json();
  const counts = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/variable/monthly`)).json();
  return { props: { post, counts } };
}

export async function getStaticPaths() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL+"/api/post");
  const ids = await res.json();
  const paths = ids.map((id) => ({
    params: { id: id },
  }))
  return {
    paths,
    fallback: false,
  };
}