import { BsStarFill } from "react-icons/bs";

export const ratingStars = (rating: string, size = 20) => {
  if (rating === "") return <></>;

  const ratingNum: number = parseInt(rating);
  return (
    <>
      {[...Array(ratingNum)].map((s) => (
        <BsStarFill
          className="mx-0.5"
          color="gold"
          size={size}
          key={Math.random().toString()}
        />
      ))}
    </>
  );
};
