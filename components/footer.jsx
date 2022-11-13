import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
      <footer>
        <div className="container">
            <a href="/archive">
                <h1 id="footer_title">LINE POSTING</h1>
            </a>
            <a href="#">
                <p className="footer_link" id="toTop"><FontAwesomeIcon icon={faAngleUp} />TOPへ戻る</p>
            </a>
        </div>
    </footer>
    );
  }