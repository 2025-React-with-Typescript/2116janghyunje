import {Title} from '../components'
export default function HeightTest() {
return (
<section className="mt-4">
<Title>HeightTest</Title>
<div className="h-40 mt-4 text-center bg-blue-500">
<div className="bg-blue-500 h-1/2">
<p className="text center text-red-50">h-1/2</p>
</div>
<div className="bg-red-500 h-1/2">
<p className="text center text-red-50">h-1/2</p>
</div>
</div>
</section>
)
}