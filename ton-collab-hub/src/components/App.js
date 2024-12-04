import ExploreProjects from './components/ExploreProjects';
import UploadProjects from './components/UploadProjects';
import SolveIssues from './components/SolveIssues';
 
 []
// You can create a placeholder for SolveIssues if needed.

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Project Portal</h1>
      <div>
        <ExploreProjects />
        <UploadProjects />
        <SolveIssues />
      </div>
    </div>
  );
}

export default App;
