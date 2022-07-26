import { useEffect, useState } from "react";
import DataList from "./components/DataList";
import SelectTypeForm from "./components/SelectTypeForm";
import "./styles.css";

export default function App() {
  const [dataType, setDataType] = useState("");

  const [data, setData] = useState(null);

  // console.log({ data });
  console.log("rendering app.js", dataType);

  // Write code here.
  //

  // useEffect(() => {
  //   fetch(`https://swapi.dev/api/${dataType}/`)
  //     .then((res) => res.json())

  //     .then((data) => setData(data.results));

  // }, [dataType]);

  useEffect(() => {
    if (dataType.length === 0) {
      setData(null);
      return;
    }

    fetch(`https://swapi.dev/api/${dataType}/`)
      .then(function (Response) {
        // console.log("the response", Response);
        return Response.json();
      })
      .then(function (data) {
        console.log("the data", data);
        setData(data);
      });
  }, [dataType]);

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
