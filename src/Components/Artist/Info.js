import React from 'react';
import ColorThief from 'colorthief';

import './Info.css';

const colorThief = new ColorThief();

function Info({info}) {

  const setArtistBg = () => {
    const color = colorThief.getColor(document.getElementById('artist__info__image'));
    document.querySelector('#setArtistBg').style.backgroundColor = 'rgb('+color[0]+','+color[1]+','+color[2]+')';
  }

  return (
    <div className="artist__info">
      <img id="artist__info__image" crossOrigin="" src={info?.images?.[0]?.url} alt="artwork" onLoad={() => setArtistBg()}/>
      <div className="artist__info__info">

        {info?.followers?.total > 50
          ?
        <h6>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.6596l-3.38079 1.8543-1.84158-3.3877-3.84662-.2679.28231-3.8456-3.09118-2.3049 2.31658-3.0825-1.3543-3.61028 3.61534-1.34071.81255-3.76935 3.76627.82672L12 0l2.7214 2.73168 3.7663-.82672.8125 3.76935 3.6154 1.34071-1.3543 3.61028 2.3166 3.0825-3.0912 2.3049.2823 3.8456-3.8466.2679-1.8416 3.3877L12 21.6596z" fill="#2E77D0"></path>
            <path d="M16.8637 7.41226l-6.6435 7.77824-2.80421-3.2842-.4935.5775 3.29771 3.8617 7.2135-8.44649-.57-.48675z" fill="#FFFFFF"></path>
          </svg>
          Verified Artist
        </h6>
          :
        <h6>Artist</h6>}

        <h1>{info?.name}</h1>
        <p><span>{info?.followers?.total?.toLocaleString()} followers</span></p>
        {/*<p>{info?.genres?.map((genre, i) => <span>{i !== 0 && ' • '}{genre}</span>)}</p>*/}
      </div>
    </div>
  );
}

export default Info;