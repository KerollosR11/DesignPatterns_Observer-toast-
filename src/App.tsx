import { Button } from './components/Button';
import { ToastContainer } from './components/ToastContainer';
import { toast } from './utils';

function App() {
  return (
    <div className="flex flex-col items-center space-y-10">
      <h1 className="text-7xl font-bold text-center">Hello, World</h1>

      <div className="space-x-2">
        <Button onClick={() => toast('Default message from outside')}>Default</Button>
        <Button onClick={() => toast.success('success message from outside')}>Success ✅</Button>
        <Button onClick={() => toast.error('error message')}>Error ❌</Button>
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
