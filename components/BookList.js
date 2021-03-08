import React, { useState, useContext } from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {BookCard} from "./BookCard"

export function BookList(props){
    const renderedItems = props.books.map((item, index)=>{
        return(
            <React.Fragment key={index}>
                <BookCard volumeInfo={item.volumeInfo} />
            </React.Fragment>
        )
    })
    return(
        <div>
            <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 750: 4, 900: 5}}>
                <Masonry>
                    {props.books.length >0 ? renderedItems:
                    <h3>Let's search something...</h3> }
                </Masonry>
            </ResponsiveMasonry>      
        </div>
    )
}

