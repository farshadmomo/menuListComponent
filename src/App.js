import './App.css';
import MenuList from "./components/MenuList";
import MenuListItems from "./components/MenuListItems";
import menuListData from "./menuListData";

function App() {
  return (
      <div className='app-container'>
          <MenuList
            listItems = {menuListData}
            fontSize = "16px"
            backgroundColor = "#dddddd"
          />
      </div>
  );
}

export default App;
