import React, {useState, useEffect} from 'react';
import book from '../pages/api/book.js';
import {SearchBar} from './SearchBar'
import {Pagination} from 'semantic-ui-react'
import {BookList} from "./BookList"

export function App(props){
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm]= useState("")
    const [page, setPage] = useState(1)
    
    // googlebooks api might return inconsistent totalItems.
    const [maxPage, setMaxPage] = useState(1)
    
    const log = ()=>{console.log(books)}
    const logpage = ()=>{console.log(page)}

    const setSearch = (term)=>{
        setPage(1)
        setSearchTerm(term)
    }

    useEffect( 
        async ()=>{
        if(searchTerm!=""){
            const startIndex = 20*(page-1)
            const res = await book.get('/books/v1/volumes', {
                params:{
                    q: searchTerm,
                    startIndex: startIndex,
                    maxResults: 20
                }
            })
            setMaxPage(Math.ceil(res.data.totalItems/12))
            setBooks(res.data.items)
        }
    }, [searchTerm, page])


    return(
        <div className="ui container" style={{minHeight:"80vh"}}>
        <SearchBar setSearch={setSearch} log={log}/>
        <br/>     
        <br/>
        <BookList books={books} />
        <br/>

        <Pagination  className="namaku" style={{margin:"200px 0 100px 0"}}  activePage={page} totalPages={maxPage} onPageChange={(e,obj)=>{setPage(obj.activePage)}}/>
        </div>
    )
}