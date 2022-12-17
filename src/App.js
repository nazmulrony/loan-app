
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import LoanApplications from './components/LoanApplications';
import LoanForm from './components/LoanForm';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <LoanForm />
        },
        {
          path: '/applications',
          element: <LoanApplications />
        },
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
