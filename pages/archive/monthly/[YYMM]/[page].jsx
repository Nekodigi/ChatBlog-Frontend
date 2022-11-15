import MonthlyArchive from "components/monthlyArchive";
import Posts from "components/posts/posts";
import SidePage from "components/sidePage";

export default function index({ YYMM, posts, counts }) {
  let next_url = posts.prev_id ? `/archive/monthly/${YYMM.toString()}/${posts.prev_id.toString()}` : undefined;
  let prev_url = posts.next_id ? `/archive/monthly/${YYMM.toString()}/${posts.next_id.toString()}` : undefined;
    return (
      <div>
        <Posts posts={posts.posts} statusMessage={`20${YYMM.substring(0,2)}年${YYMM.substring(2,4)}月の記事一覧`}/>
        <SidePage prev={prev_url} next={next_url}/>
        <MonthlyArchive counts={counts}/>
      </div>
    );
  }
  
export async function getStaticProps({ params }) {
  const res_p = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/archive/monthly/${params.YYMM}/?page=${params.page}&n=${2}`);
  const posts = await res_p.json();
  const res_c = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/variable/monthly`);
  const counts = await res_c.json();
  let YYMM = params.YYMM;
  return { props: { YYMM, posts, counts } };
}

export async function getStaticPaths() {
  const years = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/variable/monthly`)).json();
  
  const paths = []
  //https://qiita.com/kwbt/items/6c0fe424c89a9f7553c1
  await Promise.all(Object.keys(years).map(async (year) => {let months = years[year]; 
    await Promise.all(Object.keys(months).map(async (month) => {
      const posts = await getMonthlyPath(year+month);
      posts.map((post) => {
        paths.push({params: { YYMM: year+month, page: post.toString()}} )
      })
    }))
  }))
  return {
    paths,
    fallback: false,
  };
}

async function getMonthlyPath(YYMM){
  return await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/archive/monthly/${YYMM}/?n=${2}`)).json();
}