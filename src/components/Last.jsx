import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Last({ show, setshow }) {


   let [data, setdata] = useState({});

   useEffect(() => {
    fetch(
       "http://api.coinlayer.com/list?access_key=ebef6d8b845872c43fc002c301395708"
     )
       .then((res) => res.json())
       .then((res) => res.crypto)
       .then((res) => setdata(res));
   }, []);


  let [search, setsearch] = useState("");
  let view = [];

  useEffect(() => {
    Object.keys(data).forEach((k, i) => {
      let crypto = data[k];

      view.push(
        <div className="table-row" key={i}>
          <span>{crypto.name.slice(0, 5)}</span>
          <span className="symbol">{crypto.symbol}</span>
          <span className="supply">{crypto.max_supply}</span>
          <span>
            <Link to={`view/${crypto.name}`}>
              <button onClick={bt} className="bt">
                View
              </button>
            </Link>
          </span>
          <span>
            <img src={crypto.icon_url} alt="image" className="img-row" />
          </span>
        </div>
      );
    });

    setshow(view);
  }, [data]);
useEffect(()=>{
  if (search.length > 0) {
    view = [];

    Object.keys(data).forEach((k, i) => {
      let crypto = data[k];

      if (crypto.name.includes(search)) {
        view.push(
          <div className="table-row" key={i}>
            <span>{crypto.name.slice(0, 5)}</span>
            <span className="symbol">{crypto.symbol}</span>
            <span className="supply">{crypto.max_supply}</span>
            <span>
              <Link to={`view/${crypto.name}`}>
                <button onClick={bt} className="bt">
                  View
                </button>
              </Link>
            </span>
            <span>
              <img src={crypto.icon_url} alt="image" className="img-row" />
            </span>
          </div>
        );
      }
    });

    setshow(view);
    // setshow(show.filter((dat) => dat.name.includes(search)));
  } else {
    Object.keys(data).forEach((k, i) => {
      let crypto = data[k];

      view.push(
        <div className="table-row" key={i}>
          <span>{crypto.name.slice(0, 5)}</span>
          <span className="symbol">{crypto.symbol}</span>
          <span className="supply">{crypto.max_supply}</span>
          <span>
            <Link to={`view/${crypto.name}`}>
              <button onClick={bt} className="bt">
                View
              </button>
            </Link>
          </span>
          <span>
            <img src={crypto.icon_url} alt="image" className="img-row" />
          </span>
        </div>
      );
    });

    setshow(view);
  }
}

,[search])
  

  let [i, seti] = useState(1);
  let [j, setj] = useState(6);

  function right() {
    seti(i + 6);
    setj(j + 6);
    console.log(i, j);
  }

  function left() {
    if (i <= 1) {
      seti(1);
      setj(6);
    } else {
      seti(i - 6);
      setj(j - 6);
    }
  }
  function bt() {}

  return (
    <div>
    <div className="last b">
      <div className="last-head">
        <h4>Stock Details Table</h4>
        <div className="search">
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "40px", color: "gray" }}
          >
            search
          </span>
          <input
            type="text"
            className="ip"
            placeholder="Search by Company Name"
            onChange={(e) => setsearch(e.target.value)}
            value={search}
          />
        </div>
      </div>
      <br />
      <div className="table-head">
        <span>NAME</span>
        <span>SYMBOL</span>
        <span className="sup">SUPPLY</span>
        <span></span>
        <span>ICON</span>
      </div>
      <div className="table-body">{show.slice(i, j)}</div>

      <div className="foot">
        <p>
          {i}-{j} of {show.length}
        </p>
        <span className="material-symbols-outlined" onClick={left}>
          arrow_back_ios
        </span>
        <span className="material-symbols-outlined" onClick={right}>
          arrow_forward_ios
        </span>
      </div>
      {/* (i, j) ... i=j, j*2 */}

      
    </div>


</div>
  );
}

export default Last;
