import {Button} from '../../theme/daisyui'
export default function Size() {
return (
<section className="mt-4">
<h2 className="text-5xl font-bold text-center">Size</h2>
<div className="flex mt-4 justify-evenly">
<Button className="btn-lg btn-primary">Button LG</Button>
<Button className="btn-md btn-secondary">Button MD</Button>
<Button className="btn-sm btn-accent">Button SM</Button>
<Button className="btn-xs btn-success">Button XS</Button>
</div>
</section>
)
}