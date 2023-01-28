import "./Documents.css";

const Documents = ({ documents }) => {
  return (
    <div className="my-3">
      <div className="row mx-5 text-center">
        {documents.map((doc, index) => (
          <div className="col-sm-2 mx-1 my-1 document" key={doc.id}>
            <a href={doc.link} className="links">
              <div className="my-2 linkName">{doc.name}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documents;
