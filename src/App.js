import { Route } from 'react-router-dom';
import { BooksGrid } from './BooksGrid';

export const App = () => <Route path="/" component={BooksGrid} exact/>;
