import { IBook } from "../../../types"

const BookCard = ({data}: {data: IBook}) => {
  return (
    <div>
        {/* Book Card */}
        <h2>{data.title}</h2> 
    </div>
  )
}

export default BookCard