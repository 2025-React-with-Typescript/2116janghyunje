import {Input} from '../../theme/daisyui'
export default function Color() {
return (
<section className="mt-4">
<h2 className="text-5xl font-bold text-center">Color</h2>
<div className="flex flex-col mt-4">
<div>
<label className="label">Input</label>
<Input className="input-secondary" />
</div>
</div>
</section>
)
}