import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";
import NotFound from "../../components/NotFound";

const TodoFeature = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<ListPage />} exact />
        <Route path=":todoId" element={<DetailPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

TodoFeature.propTypes = {};

export default TodoFeature;
