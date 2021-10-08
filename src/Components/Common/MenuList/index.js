import React, { memo, useState } from "react";
import style from "./style.module.css";

const MenuList = memo((props) => {
  const { clickOption, sideList, mainBody, selected } = props || {};
  const [select, setSelect] = useState(0);

  const handleClick = (ele, id) => {
    if (typeof clickOption === "function") clickOption(ele);
    setSelect(id);
  };

  return (
    <div className={style.main}>
      <div className={style.side}>
        <h3 className={style.sideHead}>Services</h3>
        <div className={style.sideBody}>
          {Array.isArray(sideList) &&
            sideList.map((ele, id) => (
              <h5
                key={id}
                onClick={() => handleClick(ele, id)}
                className={id === select ? style.itemActive : style.item}
              >
                {ele}
              </h5>
            ))}
        </div>
      </div>
      <div className={style.body}>
        <h3>{selected || ""}</h3>
        <div className={style.body1}>
          {Array.isArray(mainBody) && mainBody.map(ele => ele)}
        </div>
      </div>
    </div>
  );
});

export default MenuList;
