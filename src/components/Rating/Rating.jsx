
import './Rating.sass'

function Rating({note}) {

  const totalStars = 5;
  const numNote = parseInt(note)
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    stars.push(
        <i key={i} className={`fa-star ${i <= numNote ? 'fa-solid' : 'fa-regular'}`}></i>
    )
  }

    return (
        <div className='rating'>{stars}</div>
    );
};


export default Rating;
