import React, { Component } from 'react'

import Card from './Components/Card';
import usr1 from './Assets/img/usr1.jpg';
import usr2 from './Assets/img/usr2.jpg';
import usr3 from './Assets/img/usr3.jpg';

export default class App extends Component {
  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-3"></div>
          <div className="col-sm-12 col-md-6">
            <Card
              name="Muhsiin"
              username="muhsiindeniiz"
              post__date="Nov 14"
              comment__count = "3"
              comment__retweet = "7"
              comment__like__count = "13"
              user__pp={usr1}
              content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a"
            />

            <Card
              name="Umutt"
              username="umutkarlii43"
              post__date="Oct 25"
              comment__count = "0"
              comment__retweet = "9"
              comment__like__count = "4"
              user__pp={usr2}
              content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a"
            />

            <Card
              name="Hasan Can"
              username="hassencann"
              post__date="Jul 3"
              comment__count = "19"
              comment__retweet = "23"
              comment__like__count = "43"
              user__pp={usr3}
              content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a"
            />

          </div>
          <div className="col-sm-12 col-md-3"></div>
        </div>
      </div>
    )
  }
}