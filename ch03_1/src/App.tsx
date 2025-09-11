import Bootstrap from './pages/Bootstrap';
import Icon from './pages/Icon';
import Style from './pages/Style';
import UsingIcon from './pages/UsingIcon';
import UsingIconWithCSSClass from './pages/UsingIconWithCSSClass';
import './App.css';
function App() {
return (
<div>
<button className="btn btn-warning">TEST</button>
<UsingIconWithCSSClass />
<UsingIcon />
<Style />
<Icon />
<Bootstrap />
</div>
);
}
export default App; 