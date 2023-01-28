import "./Calender.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

const Calender = ({ events }) => {
  return (
    <div>
      <h6 className="calHeading">Upcoming Calender</h6>
      <hr />
      <div>
        <TableContainer style={{ height: 230, width:235 }}>
          <Table size="small" aria-label="a dense table">
            <TableBody>
              {events.map((data) => (
                <TableRow
                  key={data.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell scope="row" className="tableRow">
                    <div className="date">
                      <label className="month">
                        {data.date.toLocaleString("default", {
                          month: "short",
                        })}
                      </label>
                      <div className="day">{data.date.getDate()}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="event">
                      <label className="event-name">{data.name}</label>
                      <div className="event-desc">{data.description}</div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Calender;
