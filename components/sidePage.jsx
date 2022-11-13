import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function SidePage({next, prev}) {


  if(!(next === undefined && prev === undefined)) return (
    <div className="movePageContainer">
      {next !== undefined ? <Link class="movePageLeft" href={next}><FontAwesomeIcon icon={}/>前のページ</Link>
    </div>
  );
}

    

// <% if (!(next == undefined && previous == undefined)){ %>
//   <div class="movePageContainer">
//       <% if(next != undefined){ %>
//       <a href="/contents/<%=next%>"><p class="movePageLeft"><i class="fa-solid fa-angle-left"></i> 前のページ</p></a>
//       <% } %>
//       <% if(previous != undefined){ %>
//       <a href="/contents/<%=previous%>"><p class="movePageRight">次のページ <i class="fa-solid fa-angle-right"></i></p></a>
//       <% } %>
//   </div>
//   <% } %>