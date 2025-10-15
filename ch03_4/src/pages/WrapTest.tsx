import {Div, Title, Subtitle} from '../components'

import * as D from '../data'
export default function WrapTest() {
const boxes = D.range(1, 31).map(number => {
return (
<p key={number} className="border-2 border-blue-300 p-1 mt-1 ml-1">
{number}
</p>
)
})
return (
<section className="mt-4">
<Title>CopyMe</Title>
<Div className="flex flex-col mt-4 w-1/2 bg-gray-200">
<Div className="mt-4">
<Subtitle>flex-row flex-wrap</Subtitle>
<Div className="flex flex-row flex-wrap p-4">{boxes}</Div>
</Div>
<Div className="mt-4">
<Subtitle>flex-row flex-wrap-reverse</Subtitle>
<Div className="flex flex-row flex-wrap-reverse p-4">{boxes}</Div>
</Div>
<Div className="mt-4">
<Subtitle>flex-row flex-nowrap</Subtitle>
<Div className="flex flex-row flex-nowrap overflow-hidden p-4">{boxes}</Div>
</Div>
</Div>
<Div className="flex flex-row mt-4 bg-gray-200">
<Div className="mr-4">
<Subtitle>flex-col flex-wrap</Subtitle>
<Div className="flex flex-col flex-wrap p-4 h-40 min-h-40">{boxes}</Div>
</Div>
<Div className="mr-4">
<Subtitle>flex-col flex-wrap-reverse</Subtitle>
<Div className="flex flex-col flex-wrap-reverse p-4 h-40 min-h-40">{boxes}</Div>
</Div>
<Div className="mr-4">
<Subtitle>flex-col flex-nowrap</Subtitle>
<Div className="flex flex-col flex-nowrap overflow-hidden p-4 h-40 min-h-40">
{boxes}
</Div>
</Div>
</Div>
</section>
)
}