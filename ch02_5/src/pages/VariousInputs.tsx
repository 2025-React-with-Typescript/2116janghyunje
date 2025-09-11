export default function VariousInputs() {
return (
<div>
<p>Various Inputs</p>
<div>
<input type="text" placeholder="Enter some texts" />
<input type="password" placeholder="Enter your password" />
<input type="email" placeholder="Enter your email" />
<input type="number" placeholder="Enter your age" min={0} />
<input type="range" />
<input type="button" value="Button" />
<input type="checkbox" value="" defaultChecked />
<input type="checkbox" value="" />
<input type="radio" value="adult" name="isAdult" defaultChecked />
<input type="radio" value="not-adult" name="isAdult" />
<input type="file" />
</div>
</div>
)
}