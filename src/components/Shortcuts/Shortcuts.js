import "./Shortcuts.css";
import chatIcon from "./../../assets/chat-icon.png";
import uploadIcon from "./../../assets/upload.jpg";
import teamMemberIcon from "./../../assets/members.jpg";
import surveyIcon from "./../../assets/tick.webp";
import BookIcon from "./../../assets/book.jpeg";
import ShortcutInfo from "../ShortcutInfo/ShortcutInfo";

const Shortcuts = () => {
  return (
    <div className="my-5">
      <h6>Helpful Shortcuts</h6>
      <div className="row text-center">
        <ShortcutInfo
          link={"https://www.google.com/"}
          img={chatIcon}
          desc="Message Your Account Manager"
        />
        <ShortcutInfo
          link={"https://www.google.com/"}
          img={uploadIcon}
          desc="Upload Documents"
        />
        <ShortcutInfo
          link={"https://www.google.com/"}
          img={teamMemberIcon}
          desc="Invite Team Members"
        />
        <ShortcutInfo
          link={"https://www.google.com/"}
          img={surveyIcon}
          desc="Survey Employees"
        />
        <ShortcutInfo
          link={"https://www.google.com/"}
          img={BookIcon}
          desc="Access Knowledge Base"
        />
      </div>
    </div>
  );
};

export default Shortcuts;
