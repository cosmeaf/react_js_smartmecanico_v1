import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Contact, SignIn, SignUp, ECommerce, Personal } from './pages';
import { ProtectedLayout } from './components/ProtectedLayout';


function Router() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />          
        <Route path="/dashboard" element={<ProtectedLayout><ECommerce/></ProtectedLayout>} />
        <Route path="/dashboard/profile" element={<ProtectedLayout><Personal/></ProtectedLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
