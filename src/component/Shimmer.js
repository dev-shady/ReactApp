import "../shimmer.css";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(30)
        .fill(0)
        .map((item, index) => {
          return <div key={index} className="shimmer-item"></div>;
        })}
    </div>
  );
};

export default Shimmer;
