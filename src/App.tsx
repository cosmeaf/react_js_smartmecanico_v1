import './App.css';
import Router from './Router';
import { AuthProvider } from './contexts/AuthProvider';
import { NotificationProvider } from './contexts/NotificationProvider'; // Importe o NotificationProvider

function App() {
  return (
    <AuthProvider>
      <NotificationProvider> {/* Adicione o NotificationProvider */}
        <Router />
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
