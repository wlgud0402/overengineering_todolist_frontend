import React from "react";
import axios from "axios";

const Home = () => {
  const onAxios = (e) => {
    console.log("악시오스 요청 프록시 사용");
    axios.post("api/axios/", { data: "데이터" });
  };

  return (
    <div>
      <h1>홈페이지입니다</h1>
      <button onClick={onAxios}>악시오스</button>
    </div>
  );
};

export default Home;
