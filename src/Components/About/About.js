import React from 'react'
import './about.css'
import Footer from '../Footer/Footer'
import sample1 from '../Assets/sample1.jpg'
import sample2 from '../Assets/sample2.jpg'
import person1 from '../Assets/Person1.png'
import person2 from '../Assets/Person2.png'
import person3 from '../Assets/Person3.png'
import person4 from '../Assets/Person4.png'

const About = () => {
  return (
    <div className='about'>
      <div className='about-banner'>
        <h1>About Us</h1>
      </div>
      <div className='about-content1'>
        <img src={sample1} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dolorem illo qui reiciendis impedit quas. Accusamus ducimus ea maxime in distinctio deserunt iusto modi consequuntur quibusdam, culpa quam necessitatibus ipsum?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dolorem illo qui reiciendis impedit quas. Accusamus ducimus ea maxime in distinctio deserunt iusto modi consequuntur quibusdam, culpa quam necessitatibus ipsum?
        </p>
      </div>
      <div className='about-content2'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dolorem illo qui reiciendis impedit quas. Accusamus ducimus ea maxime in distinctio deserunt iusto modi consequuntur quibusdam, culpa quam necessitatibus ipsum?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dolorem illo qui reiciendis impedit quas. Accusamus ducimus ea maxime in distinctio deserunt iusto modi consequuntur quibusdam, culpa quam necessitatibus ipsum?
        </p>
        <img src={sample2} alt="" />
      </div>
      <div className='team'>
        <h1>Our Team</h1>
        <div className="team-members">
          <div className='team-member'>
            <img src={person1} alt="" />
            <h1>Person Name</h1>
            <p>Role</p>
          </div>
          <div className='team-member'>
            <img src={person2} alt="" />
            <h1>Person Name</h1>
            <p>Role</p>
          </div>
          <div className='team-member'>
            <img src={person3} alt="" />
            <h1>Person Name</h1>
            <p>Role</p>
          </div>
          <div className='team-member'>
            <img src={person4} alt="" />
            <h1>Person Name</h1>
            <p>Role</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About
