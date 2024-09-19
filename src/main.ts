import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
 
    <div class="flex flex-col gap-2 bg-background w-screen h-screen p-2">
        <nav class="w-full h-20 bg-primary/10 rounded-md flex justify-between items-center p-4">
            <span class="font-alexana text-primary text-xl font-bold">Architector</span>
            <div>Switcher</div>
        </nav>
        <div class="h-full w-full grid grid-cols-2 gap-2">
            <div class="w-full rounded bg-card border-card text-card-foreground"></div>
            <div class="w-full rounded bg-card border-card text-card-foreground"></div>
        </div>
    </div>
  
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
