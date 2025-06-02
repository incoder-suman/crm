import Role from './components/Role';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import SalesDashboard from './components/SalesDashboard';
import TeamDashboard from './components/TeamDashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Role />} />
        <Route path="/login" element={<Login />} />
        <Route path="adminDashboard" element={<AdminDashboard/>}/>
        <Route path="salesDashboard" element={<SalesDashboard/>}/>
        <Route path="teamDashboard" element={<TeamDashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
