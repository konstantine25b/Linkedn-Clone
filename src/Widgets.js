import {  FiberManualRecord, Info } from '@mui/icons-material'
import React from 'react'
import "./Widgets.css"

function Widgets() {
    const newsArticle = (heading , subTitle)=>(
        <div className='widgetsArticle'>
            <div className='widgetsArticleLeft'>
                 <FiberManualRecord />
            </div>
            <div className='widgetsArticleRight'>
                <h4>{heading}</h4>
                <p>{subTitle}</p>

            </div>
        </div>
    )
  return (
    <div className='widgets'>
        <div className='widgetsHeader'>
            <h2>Linkedn News</h2>
            <Info/>
        </div>
        {newsArticle("Konstantin Bakhutashvili is back","Top News -  21,924 readers")}
        {newsArticle("Konstantin Bakhutashvili is a Web Developer", "Top News -  12,334 readers")}
        {newsArticle("Elon musk buys Twitter","Media-  11,311 readers")}
        {newsArticle("Jef Bezos starts new company","Buisness -  9,024 readers")}
        {newsArticle("Solana breaks 100$ ","Crypto-  7,233 readers")}
    </div>
  )
}

export default Widgets