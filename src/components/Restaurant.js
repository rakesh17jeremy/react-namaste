import {RES_IMG_URL} from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const { name, Ratings, Timing, Restaurant_Type } = resData;
  return (
    <div className="res-card">
      <img
        className="res-kgf"
        src={RES_IMG_URL}
      />
      <h2>{name}</h2>
      <h4>Rating : {Ratings}</h4>
      <h4>{Timing}</h4>
      <h4>{Restaurant_Type}</h4>
    </div>
  );
};

export default ResCard;