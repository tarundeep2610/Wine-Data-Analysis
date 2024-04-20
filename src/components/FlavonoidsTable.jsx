import React, { useEffect, useMemo, useState } from "react";
import { MRT_Table, useMantineReactTable } from "mantine-react-table";
import { calculateFlavonoidsStats } from "../data/wineDataset";

const FlavonoidsTable = () => {
  // Calculate flavonoids statistics data
  const data = calculateFlavonoidsStats();

  // Log the calculated data for debugging purposes
  console.log(data, "sifsfhd");

  // State to hold modified data based on measuresArray
  const [modifiedData, setModifiedData] = useState([]);

  // Array defining measures to display in the table
  const measuresArray = [
    { key: "mean", value: "Flavonoids Mean" },
    { key: "median", value: "Flavonoids Median" },
    { key: "mode", value: "Flavonoids Mode" },
  ];

  // Use effect to populate modifiedData based on measuresArray and data
  useEffect(() => {
    setModifiedData(() =>
      measuresArray.map((item) => {
        const transformedObject = {
          measures: item.value,
        };
        // Loop over the data to add properties to transformedObject
        data.forEach((temp) => {
          transformedObject[`class${temp.column}`] = temp[item.key];
        });

        return transformedObject;
      })
    );
  }, []);

  // Log the modified data for debugging purposes
  console.log("Modified Data:", modifiedData);

  // Define columns for the table using useMemo to memoize the columns
  const columns = useMemo(
    () => [
      {
        accessorKey: `measures`,
        header: `Measure`,
      },
      // Map over data to generate columns dynamically
      ...data.map((item) => ({
        accessorKey: `class${item.column}`,
        header: `Class ${item.column}`,
      })),
    ],
    []
  );

  // Initialize the table using useMantineReactTable hook
  const table = useMantineReactTable({
    columns,
    data: modifiedData,
  });

  // Render the table within a container
  return (
    <div className="table">
      <MRT_Table table={table} />
    </div>
  );
};

export default FlavonoidsTable;
