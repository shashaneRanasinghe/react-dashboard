import "./ShortcutInfo.css";

const ShortcutInfo = ({ link, img, desc }) => {
  return (
    <div className="col-sm">
      <a href={link} className="links">
        <img src={img} alt="chat icon" />
        <div className="shortcutDesc">{desc}</div>
      </a>
    </div>
  );
};

export default ShortcutInfo;
