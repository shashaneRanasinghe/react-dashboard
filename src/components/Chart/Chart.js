import "./Chart.css";
import { PieChart, Pie, Cell, LabelList, Label } from "recharts";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Chart = ({ issues }) => {
  const getColor = () => {
    return "#" + Math.random().toString(16).substr(-6);
  };

  return (
    <div className="my-1 ">
      <div className="row">
        <div className="col-md-7">
          <PieChart width={500} height={300}>
            <Pie
              data={issues}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={50}
            >
              <Label
                value={`Issues\n${issues.length}`}
                position="center"
                style={{ "fontWeight": "bold" }}
              />

              <LabelList
                dataKey="name"
                position="outside"
                style={{ "fontWeight": "bold" }}
              />
              {issues.map((_, index) => (
                <Cell key={`cell-${index}`} fill={getColor()} />
              ))}
            </Pie>
          </PieChart>
        </div>

        <div className="col-md-5">
          <TableContainer style={{ width: 400, height: 300 }}>
            <Table stickyHeader size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell className="tableHeading">Top 5 Issues</TableCell>
                  <TableCell className="tableHeading" align="right"># of Inquires</TableCell>
                  <TableCell className="tableHeading" align="right">Percentage</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {issues.map((data, index) => (
                  <TableRow
                    key={data.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    style={{ height: 50 }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1 + ". " + data.name}
                    </TableCell>
                    <TableCell align="right">{data.noOfInquiries}</TableCell>
                    <TableCell align="right">
                      {data.value.toFixed(2)}%
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Chart;
