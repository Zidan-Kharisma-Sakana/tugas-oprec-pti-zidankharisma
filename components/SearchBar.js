import React, {useState} from 'react';
import { Button, Icon, Form } from 'semantic-ui-react'

export function SearchBar(props){
    const [term, setTerm] = useState("");
    const setSearchTerm = e =>{
        e.preventDefault();
        props.setSearch(term)
    }

    return(
        <div className="ui segment" onClick={props.log} style={{display:"flex",justifyContent:"center" }}>
          <Form onSubmit={setSearchTerm} style={{width:"50%", display:"inline-block"}}>
            <Form.Field >
            <Form.Input fluid                 
                type="text"
                value={term}
                onChange={e => setTerm(e.target.value)}
                placeholder="Search Books..." />
            </Form.Field>
          </Form>
          <Button onClick={setSearchTerm} animated>
                <Button.Content visible>Cari</Button.Content>
                <Button.Content hidden>
                  <Icon name='arrow right' />
                </Button.Content>
              </Button>
        </div>       
    )
}
