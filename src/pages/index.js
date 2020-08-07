import React from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import Header from '../components/header'
import * as js from '../js/style'

export default class index extends React.Component {

  constructor(props) {
    super(props);
  }

  // $(document).ready({ ... })
  componentDidMount(){
    js.a()
  }
  
  render() {
    return (
      <>
      AAAA
      </>
    )
  }
}