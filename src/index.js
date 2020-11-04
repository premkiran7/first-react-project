import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

// setup vars
const books = [
  {
    id: 1,
    title: 'Ikigai',
    author: 'Amelia Hepworth',
    img: 'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY218_.jpg',
  },
  {
    id: 2,
    title: 'Vikramaditya Veergatha Book 4 - The Wrath of the Hellfires',
    author: 'Shatrujeet Nath',
    img: 'https://m.media-amazon.com/images/I/81+siFY7zKL._AC_UY218_.jpg',
  },
]

// stateless functional component
// always return JSX
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

function Book(props) {
  const { img, title, author } = props
  const clickHandler = () => {
    alert('hello world')
  }
  const complexExample = (author) => {
    console.log(author)
  }
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt="Ikigai" />
      <h1>{title}</h1>
      {props.children}
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Add
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        Remove
      </button>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
