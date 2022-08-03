import { useState, useEffect } from "react";

import PageTodolist from "./pages/PageTodolist";
import PageLogin from "./pages/PageLogin";
import { useAuth } from "./hooks/useAuth";

import "./styles.css";

export default function App() {
  const { user } = useAuth();
  return <div className="App">{user ? <PageTodolist /> : <PageLogin />}</div>;
}
