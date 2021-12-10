import RenderContent from '../RenderContent';
import Sidebar from '../SideBar';
import { Container } from './App';

function App() {
    return (
      <Container>
          <Sidebar />
          <RenderContent/>
      </Container>
    );
  }
  
  export default App;
  