import "./workTable.css";

function WorkTable({ contents }) {
  return (
    <div className="work-table">
      {contents.map((row, i) => (
        <div className={`work-row-table${i % 2 === 1 ? " alt" : ""}`} key={i}>
          <p className="work-company">{row.company}</p>
          <p className="work-date-table">{row.date}</p>
        </div>
      ))}
    </div>
  );
}

export default WorkTable;