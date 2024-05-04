import "./styles.css";
import ExcelExport from "./component/Excel";

export default function App() {
  const data = [
    { name: "John", age: 30, email: "john@example.com" },
    { name: "Doe", age: 25, email: "doe@example.com" },
    { name: "Jane", age: 28, email: "jane@example.com" },
  ];
  const header = [
    {
      header: "Name",
      rowID: "name",
      width: 20,
    },
    {
      header: "Age",
      rowID: "age",
      width: 20,
    },
    {
      header: "Email",
      rowID: "email",
      width: 20,
    },
  ];

  return (
    <div className="App">
      <table className="ml-20 mb-4">
        <thead>
          <tr>
            {header.map((item) => {
              return <th className="p-4 bg-orange-600 ">{item.header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((i) => {
            return (
              <tr>
                <td className="p-2">{i.name}</td>
                <td className="p-2">{i.age}</td>
                <td className="p-2">{i.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <ExcelExport data={data} header={header} />
    </div>
  );
}
