import React, { FC, memo } from "react";

interface Props {
  index: number;
  email?: String;
  gender?: String;
  firstName: String;
  lastName: String;
}

const EachUser: FC<Props> = ({ index, email, gender, firstName, lastName }) => {
  return (
    <div className="m-2 rounded-sm p-1 w-56 bg-gray-300 text-sm">
      <h2 className=""> {index+1} : {firstName + " " + lastName}</h2>
      <h2>{email}</h2>
      <h2>{gender}</h2>
    </div>
  );
};

EachUser.defaultProps = {
  email: "utqrsh2001@gmail.com",
  gender: "male",
};

export default memo(EachUser);
