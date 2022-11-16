import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";


export default function ImageOverlay({imageUrl, setOverlay}) {//{ posts }
  const close = (e) => {
    e.stopPropagation();
    setOverlay(false);
  }

  return (
    <div onClick={(e) => {close(e)}} id="overlay">
      <a onClick={(e) => {close(e)}}><FontAwesomeIcon icon={faXmark} /></a>
      <Image onClick={(e) => {e.stopPropagation()}} id="overlayImg" src={imageUrl} alt="fullsize-image"/>
    </div>
  );
}

{/* <div onclick="toggleOverlay()" id="overlay" class="">
    <script>
    function toggleOverlay(){
        console.log("CLOSE");
        document.getElementById("overlay").classList.toggle("show");
        
    }
    </script>
    
    <a onclick="() => {event.stopPropagation();toggleOverlay()}"><i class="fa-solid fa-xmark"></i></a>
    <img onclick="event.stopPropagation()" id="overlayImg" src="<%= imageUrl %>">
</div> */}