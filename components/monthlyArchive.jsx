import Link from "next/link"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function MonthlyArchive({counts}) {

  const getYears = (counts) => {
    return Object.keys(counts).sort().reverse().map((YY, i) => <Year key={YY} YY={YY} i={i} counts={counts}/>)//Separate
  }

  return (
    <div>
      <div className="border"></div>
        <div id="MonthlyArchive">
          <div className="years">
            {getYears(counts)}  
          </div>
        </div>
    </div>
  );
}

function Year({counts, YY, i}){
  const [show, setShow] = useState(i==0 ? true : false);

  const getMonths = (YY, counts) => {
    return Object.keys(counts).sort().reverse().map(MM => {
      return (
      <Link key={MM} href={`/archive/monthly/${YY}${MM}/1`} className="month">
        {`20${YY} / ${MM}  (${counts[MM]})`}
      </Link>
      )
    })
  }

  return (
  <div key={YY}>
    <button onClick={() => setShow(!show)} className="year"><FontAwesomeIcon icon={show ? faCaretDown : faCaretRight} />&nbsp;&nbsp;20{YY}</button>
    {show ? <div className='months' id={YY}>
      {getMonths(YY, counts[YY])}
    </div> : null}
  </div>)
}