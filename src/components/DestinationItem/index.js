import './index.css'

const DestinationItem = props => {
  const {item} = props
  const {name, imgUrl} = item

  return (
    <li className="card">
      <img src={imgUrl} className="image" alt="" />
      <p className="title">{name}</p>
    </li>
  )
}

export default DestinationItem
