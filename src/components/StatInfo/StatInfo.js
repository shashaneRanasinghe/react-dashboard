import "./StatInfo.css";

const StatInfo = ({ name, value, desc }) => {
  return (
    <div className="col-sm">
      <label className="lblTitle">{name}</label>
      <h3 className="lblValue">{value}</h3>
      <hr />
      <label className="lblSubTitle">{desc}</label>
    </div>
  );
};

export default StatInfo;
