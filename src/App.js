import { CssModules } from "./componens/CssModules";
import { InlineStyle } from "./componens/InlineStyle";
import { StyledJsx } from "./componens/StyledJsx";
import { StyledComponents } from "./componens/StyledComponents";
import "./styles.css";
import { Emotion } from "./componens/Emotion";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
