

export default function Header() {
  return (
    <header>
        <div className="container">
            <a href="/archive">
                <h1>LINE POSTING</h1>
            </a>
            <a href="/archive#MonthlyArchive">
            <p id="archive">アーカイブ</p>
            </a>
            <a href="/archive">
            <p id="latest">最新記事</p>
            </a>
            
        </div>
    </header>
  );
}