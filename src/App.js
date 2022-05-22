import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Container/Home";
import HomePage from "./pages/HomePage";
import { fetchUser, userAccessToken } from "./utils/fetchUser";

const App = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = userAccessToken();
    if (!accessToken) {
      navigate("/welcome", { replace: true });
    } else {
      const [userInfo] = fetchUser();
      setUser(userInfo);
    }
  }, []);

  return (
    <Routes>
      <Route path="welcome" element={<HomePage />} />
      {/* <Route path="welcome" element={<Home />} /> */}
      <Route path="/*" element={<Home user={user} />} />
    </Routes>
  );
};

export default App;
