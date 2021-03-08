import React from 'react'
import {Divider, Button, Icon, Image, Modal } from 'semantic-ui-react'

export const ModalBooks = (props) => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>Click to See More</Button>}
    >
      <Modal.Header>{props.data.title}</Modal.Header>
      <Modal.Content image scrolling>
        <Image style={{width:"50%"}} src={props.data.source} wrapped />

        <Modal.Description>
            <h4>{`Author: ${props.data.author}`}</h4>
            <Divider/>
            <h4>{`Publisher: ${props.data.publisher}`}</h4>
            <Divider/>
            <h4>{`Published Date: ${props.data.publishedDate}`}</h4>
            <Divider/>
            <h4>{`Page Count: ${props.data.pageCount}`}</h4>
            <Divider/>
            <h4>{`Categories: ${props.data.categories.join()}`}</h4>
            <Divider/>
            <h4>{`Language: ${props.data.author}`}</h4>
            <Divider/>
            <p>{props.data.description}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} danger>
          Close <Icon name='chevron right' />
        </Button>
        <Button animated='vertical' onClick={() => setOpen(false)}  secondary>
            <a href={props.data.previewLink} target="_blank">
            <Button.Content visible>Shop</Button.Content>
            <Button.Content hidden>
                <Icon name='shop' />
            </Button.Content>
            </a>
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

