import React from "react";
import { Link } from "react-router-dom";
import "../styles/Body.css"

  const links = [
    {
      id: "twitter",
      value: "Twitter Link",
      link: "https://twitter.com/elvisubabe1",
      title: "Twitter",
    },
    {
      id: "btn__zuri",
      value: "Zuri Team",
      link: "https://training.zuri.team/",
      title: "Zuri Team",
    },
    {
      id: "books",
      value: "Zuri Books",
      link: "http://books.zuri.team",
      title: "Zuri books is where you can find all the books about design and coding",
    },
    {
      id: "books__python",
      value: "Python Books",
      link: "https://books.zuri.team/python-for-beginners?ref_id=elvisubabe1",
      title: "Python for beginners is an amazing book for beginners to learn how to code in python. Go from zero to hero in no time.",
    },
    {
      id: "pitch",
      value: "Background Check for Coders",
      link: "https://background.zuri.team",
      title: "Background check for coders is a service that helps you check the background of a developer before hiring them.",
    },
    {
      id: "books__design",
      value: "Design Books",
      link: "https://books.zuri.team/design-rules",
      title: "Design rules is a book that teaches you how to design beautiful and functional websites. Get it for free now.",
    },
    {
      id: "contact",
      value: "Contact",
      link: "/contact",
      title: "Contact",
    }
  ]
export default function Body() {
  return (
    <div className="container">
      {links.map((link) => 
        (
          <Link to={link.link} key={link.id} title={link.title} id={link.id} className="btn">
            {link.value}
          </Link>
        ))
      }
      <section id="social-links" className="social-links">
        <a href="https://hng9.slack.com/messages/C041JU70S5U/team/U0482L1J9FY" target="_blank" rel="noopener noreferrer">
          <img src="slack.png" alt="slack" />
        </a>
        <a href="https://www.github.com/deyemiobaa" target="_blank" rel="noopener noreferrer">
          <img src="github.png" alt="github" />
        </a>
      </section>
    </div>
  )
}