import React from "react";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <p>페이지를 찾을 수 없습니다.</p>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
}
