import Header from './components/Header/index';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';
import { Button } from '@mui/material';
import ProductFeature from './features/Product';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/post-list/:postId" element={<Navigate to="/posts/:postId" replace />} />

          <Route path="/" element={<CounterFeature />} />
          <Route path="/todos" element={<TodoFeature />} />
          <Route path="/albums" element={<AlbumFeature />} />
          <Route path="/products" element={<ProductFeature />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
