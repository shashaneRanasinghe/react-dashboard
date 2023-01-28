import StatInfo from "../StatInfo/StatInfo";
import "./Stats.css";

const Stats = ({ stats }) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  const enrollmentCalculatedDate =
    stats.enrollmentCalculatedDate.toLocaleDateString("en-us", options);

  const annualBenefitCost = formatter.format(stats.annualBenefitCost);

  const annualBenefitCostDifference = formatter.format(
    stats.annualBenefitCost - stats.prevAnnualBenefitCost
  );

  return (
    <div className="row">
      <StatInfo
        name="Your Annual Benefit Cost"
        value={annualBenefitCost}
        desc={
          <label>
            <b style={{ color: "black" }} className="bold-text">
              {annualBenefitCostDifference}
            </b>{" "}
            compared to last plan year
          </label>
        }
      />
      <StatInfo
        name="Total Enrollment"
        value={stats.totalEnrollment}
        desc={<label>as of {enrollmentCalculatedDate}</label>}
      />
      <StatInfo
        name="Closed Issues"
        value={stats.noOfClosedIssues}
        desc={<label>Past 30 days</label>}
      />
    </div>
  );
};

export default Stats;
