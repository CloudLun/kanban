import Button from "./shared/Button";
import Checkbox from "./shared/Checkbox";
import Textfield from "./shared/Textfield";
import Dropdown from "./shared/Dropdown";


function App() {
  return (
    <div className="pt-[120px] pl-[24px]">
      <Button size={'large'} color={'white'} backgroundColor={'purple'} cta="add"/>
      <Checkbox name="Completed"/>
      <Textfield />
      <Dropdown />
    </div>
  );
}

export default App;
