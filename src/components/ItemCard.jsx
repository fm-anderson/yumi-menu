import SalmonPate from "../images/salmon-pate.png";

function ItemCard() {
  return (
    <div className="bg-base-200">
      <figure>
        <img src={SalmonPate} alt="Shoes" />
      </figure>
      <div className="">
        <h2 className="">Sushi - $12</h2>
      </div>
    </div>
  );
}

export default ItemCard;
