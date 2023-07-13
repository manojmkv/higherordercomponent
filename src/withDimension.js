import { useRef, useState, useEffect } from "react";

const withDimension = (Component) => {
  return function WithDimension(props) {
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);

    const compRef = useRef();
    useEffect(() => {
      if (compRef.current) {
        setHeight(compRef.current.offsetHeight);
        setWidth(compRef.current.offsetWidth);
        //console.log("current refs are: ", compRef.current);
      }
    }, [compRef]);
    return <Component ref={compRef} height={height} width={width} {...props} />;
  };
};

export default withDimension;
