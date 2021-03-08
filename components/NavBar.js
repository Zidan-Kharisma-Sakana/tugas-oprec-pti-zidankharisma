import React from 'react'
import Link from 'next/link'
import {Container, Dropdown,Image,Menu} from 'semantic-ui-react'
  
export function NavBar(props) {
    return(
        <div style={{marginTop:"100px"}}>
            <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            <Image size='mini' src='../static/logo.png' style={{ marginRight: '1.5em' }} />
            Tugas Oprec
          </Menu.Item>
          <Menu.Item as='a'>Home</Menu.Item>
  
          <Dropdown item simple text='Profile'>
            <Dropdown.Menu>
              <Dropdown.Item>Nama: Zidan Kharisma Adidarma</Dropdown.Item>
              <Dropdown.Item>NPM: 2006463881</Dropdown.Item>
              <Dropdown.Item>NIKM: 200338</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>
      </div>
    )
}
