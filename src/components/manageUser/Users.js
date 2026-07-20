import React, { useEffect, useState } from "react";
import { fetchAllUser } from "../../service/userService.js";
function Users(props) {
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    let response = await fetchAllUser();
    if (response && response.data && response.data.EC === 0) {
      setListUser(response.data.DT);
    }
  };

  return (
    <div className="manage-user-container">
      <div className="user-header">
        <h3>Table Users:</h3>
      </div>
      <div className="user-table">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Email</th>
              <th scope="col">Username</th>
              <th scope="col">Phone</th>
              <th scope="col">Group</th>
            </tr>
          </thead>
          <tbody>
            {listUser && listUser.length > 0 ? (
              <>
                {listUser.map((item, index) => {
                  return (
                    <tr key={`row-${index}`}>
                      <td>{item.id}</td>
                      <td>{item.email}</td>
                      <td>{item.username}</td>
                      <td>{item.phone}</td>
                      <td>{item.group ? item.group.name : ""}</td>
                    </tr>
                  );
                })}
              </>
            ) : (
              <>
                <span>Not found</span>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Users;
