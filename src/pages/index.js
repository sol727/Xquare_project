import React from 'react'
import * as js from '../js/style'
import Header from '../components/header'

export default class index extends React.Component {

  constructor(props) {
    super(props);
  }

  // $(document).ready({ ... })
  componentDidMount(){
    
  }
  
  render() {
    return (
      <>

        <Header />

        <div className="test">
          
        </div>

      </>
    )
  }
}