import WithDimension from "./withDimension";
import { forwardRef } from "react";
const Comp1 = (props, forwardedRef) => {
  return (
    <div className="comp1" ref={forwardedRef}>
      {" "}
      Hey.. Am Comp1 with the width of: {props.width}
      And here is the random number: {props.randomNumber}
    </div>
  );
};

export default WithDimension(forwardRef(Comp1));
