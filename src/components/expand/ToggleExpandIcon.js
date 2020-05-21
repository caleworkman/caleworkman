import React from "react";
import {ReactComponent as ExpandLess} from "../../assets/expand-less.svg";
import {ReactComponent as ExpandMore} from "../../assets/expand-more.svg";

export function ToggleExpandIcon(props) {
  if (props.expanded) {
    return <ExpandLess className={props.className} />;
  } else {
    return <ExpandMore className={props.className} />
  }
}
