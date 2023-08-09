import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './style/globalStyle'
import Home from './pages/Home';
//import Layout from './pages/common/Layout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Todo from './pages/Todo';
import NotFound from './pages/common/NotFound';
import AuthLayout from './components/auth/AuthLayout';
import PublicLayout from './components/auth/PublicLayout';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route element={<Layout />}>
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
        </Route> */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/todo" element={<Todo />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;