import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyle';
import Theme from './styles/theme';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Todo from './pages/Todo';
import NotFound from './pages/NotFound';
import AuthLayout from './components/auth/AuthLayout';
import PublicLayout from './components/auth/PublicLayout';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<SignIn />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/todo" element={<Todo />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
