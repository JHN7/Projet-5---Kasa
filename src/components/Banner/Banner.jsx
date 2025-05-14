import './Banner.sass';


function Banner({ image, text }) {
    return (
      <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="banner-overlay">
        {text && <h1 className="banner-text">{text}</h1>}
      </div>
      </div>
    );
  }
  
  export default Banner;
