import Dashboard from "@/components/Dashboard";

const Home = (props) => {
  return (
    <div className="home">
      <Dashboard />
      <p>{props.isLoggedIn}</p>
      {/* <p>
        hii Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illo
        earum quos laborum dolores exercitationem vero possimus et in quaerat.
      </p> */}
    </div>
  );
};

export default Home;
