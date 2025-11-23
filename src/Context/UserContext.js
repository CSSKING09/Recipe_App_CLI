import { useContext, useState, createContext } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName,
        userEmail,
        setUserEmail,
        userPassword,
        setUserPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
