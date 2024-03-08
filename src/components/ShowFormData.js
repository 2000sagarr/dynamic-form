import React from "react";

const ShowFormData = ({ data }) => {
  console.log(data);
  const show = () => {
    return Object.keys(data).map((key) => {
      return (
        <tr key={key}>
          <td style={tableCell}>{key}</td>
          <td style={tableCell}>
            {typeof data[key] === "string" ? (
              data[key]
            ) : data[key] instanceof File ? (
              <img
                width={150}
                height={120}
                src={URL.createObjectURL(data[key])}
                alt="Selected"
              />
            ) : (
              JSON.stringify(data[key])
            )}
          </td>
        </tr>
      );
    });
  };
  return (
    <div style={{ margin: "2vh 10% " }}>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={tableHeader}>Name</th>
            <th style={tableHeader}>Value</th>
          </tr>
        </thead>
        <tbody>{show()}</tbody>
      </table>
    </div>
  );
};

const tableHeader = {
  backgroundColor: "#f2f2f2",
  borderBottom: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
  width: " 50%",
};

const tableCell = {
  borderBottom: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
  width: "50%",
};

export default ShowFormData;
