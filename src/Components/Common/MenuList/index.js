import React, { memo, useState } from "react";
import style from "./style.module.css";

const MenuList = memo((props) => {
  const { clickOption, sideList, mainBody, selected } = props || {};
  const [select, setSelect] = useState(0);

  const handleClick = (ele, id) => {
    if (typeof clickOption === "function") clickOption(ele, id);
    setSelect(id);
  };

  return (
    <div className={style.main}>
      <div className={style.side}>
        <h3 className={style.sideHead}>Services</h3>
        <div className={style.sideBody}>
          {sideList?.map((ele, id) => (
              <h5
                key={id}
                onClick={() => handleClick(ele, id)}
                className={id === select ? style.itemActive : style.item}
              >
                {ele.alt || ''}
              </h5>
            ))}
        </div>
      </div>
      <div className={style.body}>
        <h3>{sideList[selected]?.name || ""}</h3>
        <div className={style.body1}>
          {mainBody?.map((ele) => ele)}
        </div>
      </div>
    </div>
  );
});

export default MenuList;
