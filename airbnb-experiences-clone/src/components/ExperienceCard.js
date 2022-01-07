import imageCard from '../images/image-card.png';
import {ReactComponent as Star} from '../images/star.svg';

const ExperienceCard = () => {
    return (
        <section className='card'>
            <div className='card__header'>
                <img src={imageCard} alt='image card' className='card__image' />
                <a className='card__header-state'>SOLD OUT</a>
            </div>
            <div className='card__info'>
                <Star className='card__info-star' />
                <p className='card__info-text'>5.0 <span className='card__info-rating'>(6)•USA</span></p>
            </div>
            <div>
                <p className='card__info-text'>Life lessons with Katie Zaferes</p>
                <p className='card__info-text'><span className='card__info-pricing'>From $136</span> / person</p>
            </div>
        </section>
    );
};

export default ExperienceCard;