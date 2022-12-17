import {Router, Routes, Route, Link} from 'react-router-dom';
import '../../styles/ListProduct';
/* import CreateUser from './components/CreateUser'; */
import UpDateProduct from './UpDateProduct';
import ShowProducts from './ShowProducts';

function ListProduct() {
  return (
    <div className="List">
      <h5>React CRUD operations using PHP API and MySQL</h5>

      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Tuotteet</Link>
            </li>
            <li>
              <Link to="user/create">Create User</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListUser />} />
          <Route path="user/create" element={<CreateUser />} />
          <Route path="user/:id/edit" element={<EditUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default ListProduct;
