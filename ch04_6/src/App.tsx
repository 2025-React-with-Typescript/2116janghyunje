import ResponsiveContextTest from "./pages/ResponsiveContextTest";
import TimeStamp from "./pages/TimeStamp";
import { ResponsiveProvider } from "./contexts";
export default function App() {
  return (
    <ResponsiveProvider>
      <ResponsiveContextTest />
      <TimeStamp />
    </ResponsiveProvider>
  );
}
