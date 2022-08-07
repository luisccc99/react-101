import { HiLocationMarker } from 'react-icons/hi';
import './Place.css';

export default function Place({ place }) {
  return (
    <div className="place__container">
      <img className="place__image" src={place.imageUrl} />
      <section className="place__details">
        <div className='place__location'>
          <span><HiLocationMarker color='var(--primary-color)' /> {place.location.toUpperCase()}</span> •
          <a href={place.googleMapsUrl} target='_blank'>View on Google Maps</a>
        </div>
        <h3 className='place__title'>{place.title}</h3>
        <span className='place__dates'>{place.startDate} - {place.endDate}</span>
        <p className='place__description'>{place.description}</p>
      </section>
    </div>
  );
}