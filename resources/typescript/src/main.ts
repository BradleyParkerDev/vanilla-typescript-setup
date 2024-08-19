
import { setupCounter } from './counter.ts'
import '../../style/index.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
	<p class='font-bold text-[50px]'>
		Hello, World!
	</p>

		<button id="counter" type="button"></button>


</div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
