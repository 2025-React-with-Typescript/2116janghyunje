import {Icon} from '../../theme/daisyui'
export default function IconTest() {
return (
<section className="mt-4">
<h2 className="text-5xl font-bold text-center">IconTest</h2>
<div className="flex mt-4 justify-evenly">
<Icon className="btn-lg btn-primary" iconClassName="text-5xl" name="settings" />
<Icon className="btn-lg btn-secondary" iconClassName="text-5xl" name="settings" />
<Icon className="btn-lg btn-accent" iconClassName="text-5xl" name="settings" />
<Icon className="btn-lg btn-success" iconClassName="text-5xl" name="settings" />
</div>
</section>
)
}