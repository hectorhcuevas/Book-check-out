import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

function Booklist ({books}) {
  if (books === []) {
    return (<div>
              <p>Currently Loading</p>
            </div>
    )
  }

  return books.map((book, index) => {
    let availability = "";

    if (book.checked_out === false) {
      availability = "available";
    } else if (book.checked_out === true) {
      availability = "unavailable";
    }
    return (
      <Card key={index}>
      <CardHeader title = {book.title} />
        <CardContent>
          <p>{book.author}</p>
          <p>{book.isbn}</p>
          <p>{availability}</p>
        </CardContent>
        <CardActions>
          <Button size="small"><Link to={`/api/books/${book.id}`}>Details</Link></Button>
      </CardActions>
      </Card>
    )
  })
}

export default Booklist;