import React, { FunctionComponent } from "react"
import "./style.css"

export const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <a href="https://web-architector.github.io/">web-architector</a>
      <br />
      {currentYear}
    </footer>
  )
}
