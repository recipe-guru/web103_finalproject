import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import RecipeSuggestionsPage from '../pages/RecipeSuggestionsPage';
import RecipeDetailPage from '../pages/RecipeDetailsPage';

function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/recipes" element={<RecipeSuggestionsPage />} />
        <Route path="/recipes/:id" element={<RecipeDetailPage />} />
      </Routes>
  );
}

export default AppRoutes;