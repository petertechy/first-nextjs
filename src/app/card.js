import classes from "./card.module.css";
function Card() {
  return (
    <div>
      <h1 className={`${classes.react}  ${classes.name} example`}>
        Hello I am here {2 + 5}{" "}
      </h1>
      <h1 className={classes["btn-12"]}></h1>
    </div>
  );
}
export default Card;
