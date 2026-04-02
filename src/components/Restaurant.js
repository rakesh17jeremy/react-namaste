import { RES_IMG_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const { name, avgRating, locality, cloudinaryImageId } = resData?.info;
  return (
    <div className="res-card">
      <div>
        <img className="res-img" src={RES_IMG_URL + cloudinaryImageId} />
      </div>
      <h2>{name}</h2>
      <h4>Rating : {avgRating}</h4>
      <h4>{locality}</h4>
    </div>
  );
};

export default ResCard;
