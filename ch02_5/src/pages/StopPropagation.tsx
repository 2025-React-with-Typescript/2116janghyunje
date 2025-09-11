import type { SyntheticEvent } from "react"
export default function EventListener() {
const onDivClick = (e:SyntheticEvent)=> console.log('click event on <div>')
const onButtonClick = (e:SyntheticEvent)=>{
console.log('click event on <button>')
e.stopPropagation()
}
return (
<div onClick={onDivClick}>
<p>StopPropagation</p>
<button onClick={onButtonClick}>Click me and stop event propagation</button>
</div>
)
}