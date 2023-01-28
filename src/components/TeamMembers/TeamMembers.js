import "./TeamMembers.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

const TeamMember = ({ members }) => {
  return (
    <div className="teamMemberContainer">
      <h6 className="teamHeading">Team Members</h6>
      <hr />
      <div>
        <TableContainer style={{ height: 230, width:235 }}>
          <Table size="small" aria-label="a dense table">
            <TableBody>
              {members.map((data) => (
                <TableRow
                  key={data.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell scope="row">
                    <div className="date">
                      <img src={data.icon.userIcon} alt="icon"/>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="event">
                      <label className="member-name">{data.name}</label>
                      <div className="member-email">{data.email}</div>
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

export default TeamMember;
