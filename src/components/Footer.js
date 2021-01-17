import React from 'react'
import BoxOfficeTicker from './BoxOfficeTicker'
import { Container, Col, Row, Button, Card } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className='ticker-container'>
        <BoxOfficeTicker />
      </div>
      <div className='footer-bottom'>
        <span>By Philippe Charpentier</span>
      </div>
    </footer>
  )
}

export default Footer