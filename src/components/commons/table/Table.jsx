import React from "react";

const Table = ({
  dataList = [],
  headers = [{ title: "", field: "" }],
  onClick = null,
  stripped = false,
  oddColor = "#eee",
  evenColor = "#fff",
  headerColor = ""
}) => {
  return (
    <table className="table">
      <thead
        style={headerColor ? { background: headerColor, color: "#fff" } : {}}
      >
        <tr>
          {headers.map(({ title }, i) => (
            <th key={i} scope="col">
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataList.map((el, i) => (
          <tr
            style={{
              cursor: "pointer",
              ...(stripped
                ? i % 2 !== 0
                  ? { background: evenColor }
                  : { background: oddColor }
                : {})
            }}
            key={i}
            onClick={() => onClick(el.id)}
          >
            {headers.map(({ field }, i) => (
              <td key={i}>
                {el[field]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
