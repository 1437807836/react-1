import React from 'react'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import {NavLink} from 'react-router-dom'


const NewsItem  = (props) =>{
  // console.log(props);
  // console.log(props)
  // console.log(props.match.params.id)
  console.log(props.product)
    const {id,name,img,text,time,price} = props.product;
    console.log(props.product)
    // var NewsDetailUrl = `/news/${id}`;
    var style={
        background:"white"
    }
    // console.log(id)
    if(!id){
        return  <div>1111111</div>
    }
    else{
      return (
        <div>
              <WingBlank size="lg" style={style}>
              <WhiteSpace size="lg" style={style}/>
              <Card style={style}>
                <Card.Header
                    title={name}
                    thumb={img}
                    extra={<span>{name}</span>}
                  />
                  <Card.Body style={style}>
                    <div>{text}</div>
                  </Card.Body>
                  <Card.Footer content="时间" extra={<div>{time}</div>} />
                </Card>
                <WhiteSpace size="lg" />
              </WingBlank>
            </div>        
       )
    }
}
export default NewsItem;