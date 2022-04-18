import React from "react";
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account';
import {Routes, Route} from 'react-router-dom';
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>

      <h1 className="text-center text-4xl font-bold">
        Firebase auth and context
      </h1>
      <AuthContextProvider>
         <Routes>
           <Route path="/signin" element={<Signin/>} />
           <Route path="/signup" element={<Signup/>} />
           <Route 
              path="/account" 
              element={
                <ProtectedRoute>
                  <Account/>
                </ProtectedRoute>
              }
            />
         </Routes>
      </AuthContextProvider>

    </div>
  );
}

export default App;
