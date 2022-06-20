import React, { Component } from 'react'
import 'aos/dist/aos.css'

export default class Card extends Component {
  render() {
    return (
      <div
        data-aos={this.props.aos}
        data-aos-offset={this.props.aos_offset}
        className="col-11 col-md-9 col-lg-5 mx-0 mb-4"
        data-aos-duration = {this.props.duration}
        data-aos-easing="linear"
      >
        <div class="card p-0 overflow-hidden h-100 shadow">
          <img src={this.props.img} class="card-img-top"></img>
          <div class="card-body">
            <h5 class="card-title">{this.props.title}</h5>
            <p class="card-text">{this.props.desc}</p>
          </div>
        </div>
      </div>
    )
  }
}
