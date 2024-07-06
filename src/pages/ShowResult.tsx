import { useLocation } from "react-router-dom";
interface Subject {
  _id: string;
  subjectcode: string;
  subjectname: string;
  score: number;
  gpa: number;
}

interface UserData {
  name: string;
  fathername: string;
  mothername: string;
  roll: number;
  department: string;
  semester: string;
  session: string;
  gpa: number;
  subjects: Subject[];
}
const ShowResult = () => {
  const location = useLocation();
  let data = location.state?.data as UserData;

  return (
    <section>
      <div style={{ padding: "0 10%" }}>
        <h2
          style={{
            textAlign: "center",
            margin: "20px 0",
            textTransform: "uppercase",
          }}
        >
          Student Result Portal
        </h2>
        <div>
          <div>
            <span>Name</span>
            <span>: {data.name}</span>
          </div>
          <div>
            <span>Father Name</span>
            <span>: {data.fathername}</span>
          </div>
          <div>
            <span>Mother Name</span>
            <span>: {data.mothername}</span>
          </div>
          <div>
            <span>Roll No</span>
            <span>: {data.roll}</span>
          </div>
          <div>
            <span>Department</span>
            <span>: {data.department}</span>
          </div>
          <div>
            <span>Semester</span>
            <span>: {data.semester}</span>
          </div>
          <div>
            <span>Session</span>
            <span>: {data.session}</span>
          </div>
          <div>
            <span>GPA</span>
            <span>: {data.gpa}</span>
          </div>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
            </tr>
            {data.subjects.map((item) => (
              <tr key={item._id}>
                <td>{item.subjectcode}</td>
                <td>{item.subjectname}</td>
                <td>{item.score}</td>
                <td>{item.gpa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ShowResult;
