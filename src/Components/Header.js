import '../App.scss'

function RenderHeader(props) {
  return (
    <div className='header-container'>
      <h4>{props.title}</h4>
      <div className='buttons'>
        <button className='button'>{props.button1}</button>
        <button className='button'>{props.button2}</button>
      </div>
    </div>
  )
}

export default RenderHeader
