import React from "react";
import "./Main.scss";
import Category from './Components/Category';
import CategoryNav from './Components/CategoryNav'

function Main() {
  return (
    <main className="main">
      <div className="main__container">
        <Category />
        <div className="main__container_right">
          <CategoryNav />
        </div>
      </div>
    </main>
  );
}

export default Main;
