import React, {FunctionComponent} from "react"
import "./style.css"
import {Emoji} from "../Emoji";


export const Logo: FunctionComponent = () => {
  return (
    <h1 className="logo">
        <Emoji symbol={'🤘'} label="metal hand emoji"/>
        <Emoji symbol={'🎹'} label="musical keyboard emoji"/>
        <Emoji symbol={'🎶'} label="musical notes emoji"/>
    </h1>
  )
}
