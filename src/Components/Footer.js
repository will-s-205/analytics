import '../App.scss'

function Footer(props) {
  return (
    <div>
      <button className='button footer-button'>{props.seeAll}</button>
    </div>
  );
}

export default Footer
