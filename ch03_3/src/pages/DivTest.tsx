import {Title, Subtitle, Div, Icon} from '../components'
export default function DivTest() {
return (
<section className="mt-4">
<Title>DivTest</Title>
<Div className="text-center bg-blue-600 text-blue100" height="6rem">
<Icon name="home" className="text-3xl" />
<Subtitle>Home</Subtitle>
</Div>
</section>
)
}