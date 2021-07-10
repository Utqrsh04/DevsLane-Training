import axios from "axios";
import { FC, memo, useEffect, useState } from "react";
import EachUser from "./EachUser";

interface Props {
  page: number;
  title: string;
}

const UserData: FC<Props> = ({ page, title }) => {
  const [userData, setUserData] = useState<any>([]);

  useEffect(() => {
    axios
      .get(
        "https://randomuser.me/api/?inc=gender,name,email&page=" +
          page +
          "&results=20"
      )
      .then((response) => {
        console.log(response.data.results);
        setUserData(response.data.results);
      });
  }, [page]);

  return (
    <div className="pt-5">
      <div className=" mx-auto p-2 max-w-5xl bg-blue-400 rounded-md text-center">
        <div className=" grid grid-cols-4 grid-rows-5" >
          {userData.map((user: any, key: number) => (
            <EachUser
              index={key}
              email={user.email}
              gender={user.gender}
              firstName={user.name.first}
              lastName={user.name.last}
            />
          ))}
        </div>

        <p>Showing results of page : {page}</p>
        <p>Title : {title}</p>
      </div>
    </div>
  );
};

UserData.defaultProps = {};

export default memo(UserData);

// const obj = {
//   results: [
//     {
//       gender: "female",
//       name: { title: "Ms", first: "Willie", last: "Miles" },
//       email: "willie.miles@example.com",
//     },
//   ],
//   info: { seed: "1f3b3386cbdd97f5", results: 1, page: 1, version: "1.3" },
// };
