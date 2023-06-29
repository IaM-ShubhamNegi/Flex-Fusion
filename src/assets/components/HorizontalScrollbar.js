import React, { useRef, useState } from "react";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import RightArrowGreyIcon from "../assets/icons/right-arrow grey.png";
import LeftArrowGreyIcon from "../assets/icons/left-arrow grey.png";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "1880px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          maxWidth: "100%",
          overflowX: "scroll",
          scrollBehavior: "smooth",
        }}
        ref={scrl}
        onScroll={scrollCheck}
      >
        {data.map((item) => (
          <div
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            style={{
              margin: bodyPart ? '0 20px' : '0 40px',
            }}
          >
            {bodyParts ? (
              <BodyPart
                item={item}
                setBodyPart={setBodyPart}
                bodyPart={bodyPart}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          right: "0",
          width: "fit-content",
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div onClick={() => slide(bodyParts ? -1860 : -1800)}>
          {scrollX !== 0 ? (
            <button
              style={{
                width: "32px",
                height: "32px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <img src={LeftArrowIcon} alt="left-arrow" />
            </button>
          ) : (
            <button
              disabled={scrollX === 0}
              style={{
                width: "32px",
                height: "32px",
                background: "transparent",
                border: "none",
              }}
            >
              <img src={LeftArrowGreyIcon} alt="left-arrow" />
            </button>
          )}
        </div>

        <div onClick={() => slide(bodyParts ? +1860 : +1800)}>
          {!scrolEnd ? (
            <button
              style={{
                width: "32px",
                height: "32px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <img src={RightArrowIcon} alt="right-arrow" />
            </button>
          ) : (
            <button
              disabled={scrolEnd}
              style={{
                width: "32px",
                height: "32px",
                background: "transparent",
                border: "none",
              }}
            >
              <img src={RightArrowGreyIcon} alt="right-arrow" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollbar;
