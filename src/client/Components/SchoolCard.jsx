import RatingStars from "./RatingStars";
import Style from "./SchoolCard.module.css"

const SchoolCard = (props) => {
    return (
        <div className={Style.card}>
            <a className={Style.title} target={"_blank"} href={props.school?.url}>{props.school.namn}</a>
            <a className={Style.description}> {props.school.gatuadress}, {props.school.omrade}</a>
            <RatingStars id={props.school.OBJECTID}/> 
        </div>
    )
}

export default SchoolCard;