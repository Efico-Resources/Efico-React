import React, { Component } from "react";

import { HoverCards } from "./HoverCards.component";
import AOS from "aos";

let hoverCardsdets = [
  {
    text: "Training",
    img: "cImg-1",
    description:
      "Physical and virtual training are organized by our campus ambassadors and monitored from the central management.",
    index: 1,
  },
  {
    text: "Writing",
    img: "cImg-2",
    description:
      "We offer all forms of writing services- CV, cover letter, Visa applications, job applications, scholarships, foreign school application and business plan writing.",
    index: 2,
  },
  {
    text: "Affiliate Programs",
    img: "cImg-3",
    description:
      "We leverage our vast community of university and secondary school students organizations to reach a large audience base through a commission or sponsorship of any of our event.",
    index: 3,
  },
  {
    text: "Business & Career Development",
    img: "cImg-4",
    description:
      "we help develop and facilitate business/career training sessions.",
    index: 4,
  },
];

let cards = "";
class WhatWeDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: "",
    };
  }

  componentDidMount() {
    AOS.init();
    this.setState({
      cards: hoverCardsdets.map((dets, key) => {
        return (
          <HoverCards
            text={dets.text}
            img={dets.img}
            description={dets.description}
            index={dets.index}
          />
        );
      }),
    });
  }
  render() {
    console.log(cards);
    return (
      <section className="what-we-do">
        <h2 className="section-title">What We Do</h2>
        <div className="what-we-do-content">
          We work at the intersection of Education technology and climate
          sustainability, providing digital skills trainings and climate tech
          solutions for Africa’s development.
        </div>
        <div className="hover-cards">{this.state.cards}</div>
      </section>
    );
  }
}

export default WhatWeDo;
