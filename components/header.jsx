import Link from "next/link";


export default function Header() {
  return (
    <header>
        <div className="container">
            <Link href="/archive/all/1">
                <h1 id="header_title">LINE POSTING</h1>
            </Link>
            <Link href="/archive/all/1/#MonthlyArchive">
            <p id="archive">アーカイブ</p>
            </Link>
            <Link href="/archive/all/1">
            <p id="latest">最新記事</p>
            </Link>
            
        </div>
    </header>
  );
}