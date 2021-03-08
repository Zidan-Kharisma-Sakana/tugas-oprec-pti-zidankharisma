import React, { useState, useContext, useEffect } from "react"
import { Card, Image, Button, Dimmer, Header, Segment } from 'semantic-ui-react'
import {ModalBooks} from './Modal'

export function BookCard(props){
    const [active, setActive] = useState(false)
    const data = props.volumeInfo
    const author = data.authors != undefined? data.authors: ["Unknown"]
    const source = data.imageLinks!= undefined? data.imageLinks.thumbnail: "../static/image.jpg"
    const description = data.description!= undefined? data.description: "No Description"
    const publisher = data.publisher!= undefined? data.publisher: "Unknown"
    const publishedDate = data.publishedDate!= undefined? data.publishedDate: "Unknown"
    const pageCount = data.pageCount!= undefined? data.pageCount: "-"
    const categories = data.categories!= undefined? data.categories: ["Unknown"]
    const language = data.language!=undefined? data.language:"Unknown"
    const previewLink = data.previewLink!=undefined? data.previewLink: "https://www.google.com/"
    return(
        <div style={{ width:"80%", margin:"20px 0"}}>
            <Card onMouseEnter={(toggle=>{setActive(true)})} onMouseLeave={()=>{setActive(false)}}>
                <Dimmer.Dimmable dimmed={active}>
                    <Dimmer active={active} onClickOutside={()=>{setActive(false)}}>
                            <div class="content">
                                <div class="center">
                                    <ModalBooks data={
                                        {author:author,
                                        title:data.title,
                                        source:source,
                                        description:description,
                                        publisher:publisher,
                                        publishedDate:publishedDate,
                                        pageCount:pageCount,
                                        categories:categories,
                                        language:language,
                                        previewLink:previewLink
                                        }}/>
                                </div>
                            </div>                 
                    </Dimmer>
                    <Image width="100%" src={source}/>
                </Dimmer.Dimmable>
                <Card.Content>
                    <Card.Header>{data.title}</Card.Header>
                    <Card.Meta>{author}</Card.Meta>
                </Card.Content>
            </Card>
        </div>
    )
}
