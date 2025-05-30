import React from 'react'
import { Helmet } from "react-helmet"

const Head = ({title}) => {
  return (
    <Helmet>
      <title>{title ? title + " | " : null}Admin Dashboard </title>
    </Helmet>
  )
}

export default Head