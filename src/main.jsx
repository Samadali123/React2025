
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../src/index.css'
import { UserProvider } from './Contexts/UserContext.jsx'



createRoot(document.getElementById('root')).render(
    <UserProvider>
        <App />
    </UserProvider>
)
