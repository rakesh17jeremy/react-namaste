import { RES_IMG_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  console.log(resData);
  
  const { name, avgRating, locality, cloudinaryImageId, cuisines, areaName } =
    resData?.info;

  return (
    <div data-testid="resCard" className="m-4 p-4 w-56 bg-blue-50 rounded-3xl hover:border border-orange-600">
      <img className="p-1.5 rounded-2xl" src={RES_IMG_URL + cloudinaryImageId} />
      <h3 className="font-bold text-xl py-1.5">{name}</h3>
      <h4>Rating : {avgRating}</h4>
      <p>{cuisines.join(", ")}</p>
      <p>{areaName}</p>
    </div>
  );
};

export const withPromoted = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 p-1.5 bg-black text-white rounded-lg"> Promoted</label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
