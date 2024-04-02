import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

const Protected = ({ children }: { children: any }) => {
  if (auth.currentUser) {
    return children;
  } else {
    return <Navigate to={"/login"}></Navigate>;
  }
};

export default Protected;
