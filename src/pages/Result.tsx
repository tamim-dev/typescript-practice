import { useState } from "react";
type FormValues = {
  roll: number;
  department: string;
  session: string;
  semester: string;
};

const initialValue: FormValues = {
  roll: 0,
  department: "",
  session: "",
  semester: "",
};

interface Option {
  value: string;
  label: string;
}

const optionsDepartment: Option[] = [
  { value: "BBA", label: "BBA" },
  { value: "TMS", label: "TMS" },
  { value: "THM", label: "THM" },
  { value: "MBA", label: "MBA" },
  { value: "BFA", label: "BFA" },
  { value: "CSE/MCSE", label: "CSE / MCSE" },
  { value: "BSED/MSED", label: "BSED / MSED" },
];

const optionsSemester: Option[] = [
  { value: "1st", label: "1st" },
  { value: "2nd", label: "2nd" },
  { value: "3rd", label: "3rd" },
  { value: "4th", label: "4th" },
  { value: "5th", label: "5th" },
  { value: "6th", label: "6th" },
  { value: "7th", label: "7th" },
  { value: "8th", label: "8th" },
];
const optionsSection: Option[] = [
  { value: "2016-2017", label: "2016-2017" },
  { value: "2017-2018", label: "2017-2018" },
  { value: "2018-2019", label: "2018-2019" },
  { value: "2019-2020", label: "2019-2020" },
  { value: "2020-2021", label: "2020-2021" },
  { value: "2021-2022", label: "2021-2022" },
  { value: "2022-2023", label: "2022-2023" },
  { value: "2023-2024", label: "2023-2024" },
];
const Result = () => {
  let [values, setValues] = useState(initialValue);
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: name === "roll" ? Number(value) : value,
    });

    setSelectedValue(value);
  };

  const handleClick = () => {
    console.log(values);
   
    console.log(x);
    
  };

  return (
    <>
      <input type="roll" name="roll" onChange={handleChange} />
      <label htmlFor="department">Department: </label>

      <select
        onChange={handleChange}
        name="department"
        id="department"
        value={selectedValue}
      >
        <option value="" disabled>
          Select a department
        </option>
        {optionsDepartment.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label htmlFor="semester">Semester: </label>

      <select onChange={handleChange} name="semester" id="semester">
        {optionsSemester.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label htmlFor="session">Session: </label>

      <select onChange={handleChange} name="session" id="session">
        {optionsSection.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button onClick={handleClick}>Submit</button>
    </>
  );
};

export default Result;
