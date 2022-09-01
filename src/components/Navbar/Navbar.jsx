import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './Navbar.css'
import { BsMedium } from 'react-icons/bs';
import { Routes, Route, Link } from "react-router-dom";

function NavbarCrypto({setAll}) {
  return (
    <div>
      <Navbar collapseOnSelect expand="xl" variant="dark" className='navContainer' fixed="top">

        <Navbar.Brand href="#home" className=''><img src='Cryptologo .jpeg' height="50px" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='Navbuttonres' />
        <Navbar.Collapse id="responsive-navbar-nav" className='navLink'>
          <Nav  >
            <a href="#overview" className='me-3 text-white  navText' onClick={setAll}>OVERVIEW</a>
            <a href="#mint" className='me-3 text-white  navText' onClick={setAll}>MINT</a>
            <a href="#nft" className='me-3 text-white  navText' onClick={setAll}>NFT</a>
            <a href="#Game" className='me-3 text-white  navText' onClick={setAll}>GAME</a>
            <a href="#Tokenoic" className='me-3 text-white  navText' onClick={setAll}>TOKENOMICS</a>
            <a href="#Roadmap" className='me-3 text-white  navText' onClick={setAll}>ROADMAP</a>
            <a href="#Team" className='me-3 text-white  navText' onClick={setAll}>TEAM</a>
            <a href="#Partners" className='me-3 text-white  navText' onClick={setAll}>PARTNERSHIP</a>
            <a href="#Faq" className='me-3 text-white  navText' onClick={setAll}>FAQ</a>

          </Nav>
        </Navbar.Collapse>
        <div className='me-3 maindivnavnav'>
          <div className='navLinks '>
            <button className='btn btn-outline-light joinBtn me-2 '>Join Our Discord</button>
            <span><i class="fab fa-twitter me-2 "></i></span>
            <span><i class="fab fa-instagram me-2"></i></span>
            <span><BsMedium className='fa-instagram me-3 ' /></span>
          </div>
        </div>

      </Navbar>

    </div>
  )
}

export default NavbarCrypto