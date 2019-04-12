import React,{Component} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state=>{
  return {
    carts: state.carts
  }
}

 class Carts extends Component{
  render(){
      console.log(this.props)
      // console.log(this.props.m.quantity);
      console.log(this.props.match.subtotal);
    return (
      <div>
         Carts
      </div>
    )
  }
}

export default connect(mapStateToProps)(Carts);