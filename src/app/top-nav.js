import classes from "./top-nav.module.css";

function TopNav() {
  const nav_options = [
    "All",
    "Samsung",
    "Podcasts",
    "Jenifa",
    "Sketch Comedy",
    "Captain Ray Holt",
    "Dramedy",
    "All",
    "Samsung",
    "Podcasts",
    "Jenifa",
    "Jenifa",
    "Sketch Comedy",
    "Captain Ray Holt",
    "Dramedy",
    "All",
    "Samsung",
    "Podcasts",
    "Jenifa",
    "Jenifa",
    "Sketch Comedy",
    "Captain Ray Holt",
    "Dramedy",
    "All",
    "Samsung",
    "Podcasts",
    "Jenifa",
  ];

  return (
    <div className={classes.container}>
      {nav_options.map((item, index) => (
        <div key={index} className={classes.option}>
          {item}
        </div>
      ))}
    </div>
  );
}
export default TopNav;
