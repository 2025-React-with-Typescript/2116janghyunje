import {Input} from '../../theme/daisyui'
export default function Border() {
return (
<section className="mt-4">
<h2 className="text-5xl font-bold text-center">Border</h2>
<div className="flex mt-4 justify-evenly">
<div>
<label className="label">input-bodered</label>
<Input className="input-bordered" />
</div>
</div>
<div className="flex mt-4 justify-evenly">
<div>
<label className="label">input-ghost</label>
<Input className="input-ghost" />
</div>
</div>
</section>
)
}