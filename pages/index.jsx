import Link from 'next/link';
import Posts from '../components/posts/posts';
const products = [{ name: 'bag' }, { name: 'shoes' }, { name: 'socks' }];
export default function Home() {
  return (
    <div>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.name}>
              <Link href={`/products/${product.name}`}>
                {product.name}
              </Link>
            </li>
          );
        })}
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
      </ul>
      <h1>Hello Next.js</h1>
      <Posts />
    </div>
  );
}
