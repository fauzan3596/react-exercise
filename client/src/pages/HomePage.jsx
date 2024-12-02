import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";

function HomePage() {
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate("/login");
      }
    }
  }, [navigate, loading]);

  if (loading) {
    return <h1>Loading.........</h1>;
  }

  if (user) {
    return (
      <main className="h-screen w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl">Welcome {user.email} </h1>
        <h2 className="text-xl">
          to OfficeNest - Your One Stop Shop for Office & Stationary Essentials
        </h2>
      </main>
    );
  }
}

export default HomePage;
