import React from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'

export default class page extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Link to="/">Go index</Link>
      </>
    )
  }
}