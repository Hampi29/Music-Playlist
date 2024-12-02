import './index.css'
import {AiOutlineDelete} from 'react-icons/ai'

const SongCard = props => {
  const {songItem, deleteSong} = props
  const {id, imageUrl, name, genre, duration} = songItem
  const onDelete = () => {
    deleteSong(id)
  }
  return (
    <li className="songcard">
      <div className="img-name">
        <img src={imageUrl} alt="track" className="image" />
        <div>
          <p>{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-delete">
        <button
          data-testid="delete"
          type="button"
          className="dlt-btn"
          onClick={onDelete}
        >
          <AiOutlineDelete className="delete-icon" />
        </button>
        <p>{duration}</p>
      </div>
    </li>
  )
}
export default SongCard
