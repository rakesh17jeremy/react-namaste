import { RES_IMG_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const { name, avgRating, locality, cloudinaryImageId, cuisines, areaName} = resData?.info;
  return (
    <div className="res-card">
      <div>
        <img className="res-img" src={RES_IMG_URL + cloudinaryImageId} />
      </div>
      <h3>{name}</h3>
      <h4>Rating : {avgRating}</h4>
      <p>{cuisines.join(", ")}</p>
      <p>{areaName}</p>
    </div>
  );
};

export default ResCard;
