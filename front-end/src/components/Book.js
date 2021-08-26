import {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

function Book (props) {
  const [book, setBook] = useState({})
  const [isLoaded, setLoaded] = useState(false)
  let bookid = props.match.params.bookId
  console.log("This is book array: ", book)

  useEffect(() => {
    fetch(`http://localhost:3001/api/books/${bookid}`)
    .then(res => res.json())
    .then(json => {
      setLoaded(true)
      setBook(json.rows[0])
      console.log("This is json: ", json)
    })
    .catch(err => console.log("ERROR: ", err))

  }, [])

  
  let availability = "";
  let checkedOutDate = "";
  let dueBackDate = "";

  if (isLoaded === false) {
    return (<div>
              <p>Currently Loading</p>
            </div>
    )
  } else {
    if (book.checked_out === false) {
      availability = "Available";
    } else if (book.checked_out === true) {
      availability = "Unavailable";
    }

    if (book.checked_out_date === null) {
      checkedOutDate = "None"
    } else {
      checkedOutDate = book.checked_out_date//.slice(0, 9);
    }

    if (book.due_back_date === null) {
      dueBackDate = "None"
    } else {
      dueBackDate = book.due_back_date;
    }

    return (
      <Card>
        <CardHeader title = {book.title} />
          <CardContent>
            <p>Author: {book.author}</p>
            <p>ISBN: {book.isbn}</p>
            <p>Currently: {availability}</p>
            <p>Last checked out: {checkedOutDate}</p>
            <p>Due back on: {dueBackDate}</p>
          </CardContent>
          <CardActions>
            <Button size="small"><Link to={`/api/books/${book.id}`}>Details</Link></Button>
        </CardActions>
        </Card>
    )
  }
}

export default Book;