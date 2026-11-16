import {demoTask} from './demo.js'
import {totalDoneStatus,totalProgressStatus,totalTodoStatus,totalTaches, Pourcentage} from './utility.js'
const cardContainer = document.getElementById('card-container')
const demoButton = document.getElementById('button-demo')
const body = document.querySelector('body')
const deleteButton = document.querySelector('.delete')
let isSelected = false


// demo listener

demoButton.addEventListener('click',(e)=>{
  if(isSelected){
    const demoAlert = document.createElement('div')
    demoAlert.classList.add("opacity-100","visible","transition-all","duration-500","ease-in-out")
    demoAlert.innerHTML = `
    <div class=" w-[40%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border rounded-lg p-5 flex flex-col gap-4 ">
        <div class="md:flex flex-row uppercase justify-center ">
          <span class="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded">
            ATTENTION
          </span>
          <p class="text-xs font-bold text-red-500 px-2 py-1 "> tu as deja utilise mode demo </p>
        </div>
    </div>`
    body.appendChild(demoAlert)
    demoAlert.addEventListener('click',(e)=>{
      
      demoAlert.classList.remove("visible","opacity-100")
      demoAlert.classList.add("invisible","opacity-0")
      setTimeout(()=>{demoAlert.remove()},3000)
    })
    return


  }
  
    isSelected = true
    const totalTache = totalTaches(demoTask)
    const doneTache = totalDoneStatus(demoTask)
    const TodoTache = totalTodoStatus(demoTask)
    const demoPourcentage = Pourcentage(totalTache,doneTache)
    e.preventDefault()
    if(totalDoneStatus(demoTask)==totalTaches(demoTask)){
    
    let card = document.createElement('div')
    card.innerHTML = `<div class="w-full bg-white border rounded-lg p-5 flex flex-col gap-4">
        <div>
          <span class="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
            PROJET DONE
          </span>
        </div>

        <div>
          <h2 class="text-lg font-bold">${demoTask.projectName}</h2>
          <p class="text-sm text-gray-500 mt-1">Total Estimated Hours : ${demoTask.totalEstimatedHours}</p>
        </div>

        <!-- Stats -->
        <div class="flex flex-col gap-2">
          <div>
            <p class="text-2xl font-bold">0${totalTache}</p>
            <p class="text-xs text-gray-500">Tâches totales</p>
          </div>
          <div>
            <p class="text-2xl font-bold">0${doneTache}</p>
            <p class="text-xs text-gray-500">Terminées</p>
          </div>
          <div>
            <p class="text-2xl font-bold">0${TodoTache}</p>
            <p class="text-xs text-gray-500">Restantes</p>
          </div>
        </div>

        <!-- Progress Bar -->
        <div>
          <div class="flex justify-between text-xs font-semibold mb-1">
            <span>Progression</span>
            <span class="shadow-xl">${demoPourcentage} %</span>
          </div>
          <div class="h-2 bg-gray-200 rounded">
            <div class="w-[${demoPourcentage}%] h-2 bg-indigo-600 rounded"></div>
          </div>
        </div>

        <!-- Card Actions -->
        <div class="flex gap-2">
          <button class="w-full bg-indigo-600 text-white text-sm font-semibold py-2 px-4 rounded shadow-xl">
            Ouvrir le tableau des tâches →
          </button>
          <button class="bg-red-100 text-red-600 px-3 py-2 rounded font-bold shadow-xl delete">
            ✕
          </button>
        </div>
      </div>`
      cardContainer.appendChild(card)
}
else{
  if(totalDoneStatus(demoTask)!=totalTaches(demoTask)){
    
    let card = document.createElement('div')
    card.innerHTML = `<div class="w-full bg-white border rounded-lg p-5 flex flex-col gap-4">
        <div>
          <span class="bg-indigo-100 text-indigo-600 text-xs font-bold px-2 py-1 rounded">
            PROGRESSING
          </span>
        </div>

        <div>
          <h2 class="text-lg font-bold">${demoTask.projectName}</h2>
          <p class="text-sm text-gray-500 mt-1">
            Total Estimated Hours : ${demoTask.totalEstimatedHours}
          </p>
        </div>

        <!-- Stats -->
        <div class="flex flex-col gap-2">
          <div>
            <p class="text-2xl font-bold">0${totalTache}</p>
            <p class="text-xs text-gray-500">Tâches totales</p>
          </div>
          <div>
            <p class="text-2xl font-bold">0${doneTache}</p>
            <p class="text-xs text-gray-500">Terminées</p>
          </div>
          <div>
            <p class="text-2xl font-bold">0${TodoTache}</p>
            <p class="text-xs text-gray-500">Restantes</p>
          </div>
        </div>

        <!-- Progress Bar -->
        <div>
          <div class="flex justify-between text-xs font-semibold mb-1">
            <span>Progression</span>
            <span class="shadow-xl">${demoPourcentage} %</span>
          </div>
          <div class="w-[${100-demoPourcentage}%] h-2 bg-gray-200 rounded">
            <div class="w-[${demoPourcentage}%] h-2 bg-indigo-600 rounded"></div>
          </div>
        </div>

        <!-- Card Actions -->
        <div class="flex gap-2">
          <button class="w-full bg-indigo-600 text-white text-sm font-semibold py-2 px-4 rounded shadow-xl">
            Ouvrir le tableau des tâches →
          </button>
          <button class="bg-red-100 text-red-600 px-3 py-2 rounded font-bold shadow-xl delete">
            ✕
          </button>
        </div>
      </div>`
      cardContainer.appendChild(card)

      }
      
    }
  }
)
cardContainer.addEventListener('click',(e)=>{
  e.preventDefault()
  let butt = e.target.closest('button')
  if(!butt) return
  if(butt.classList.contains('delete')){
    const notAlert = document.createElement('div')
    notAlert.classList.add("opacity-100","visible","transition-all","duration-500","ease-in-out","shadow-x1")
    notAlert.innerHTML = `
    <div class=" w-[40%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border rounded-lg p-5 flex flex-col gap-4  ">
        <div class="md:flex flex-row uppercase justify-center ">
          <span class="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded">
            ATTENTION
          </span>
          <p class="text-xs font-bold text-red-500 px-2 py-1 "> tu as sure pour suppremier ce project</p>
        </div>
        <div class = "w-full flex justify-between">
          <button id="yes" class="bg-red-500 w-[20%] rounded text-white font-semibold shadow-x4"> OUI </button>
          <button id="no" class="bg-green-500 w-[20%] rounded text-white font-semibold shadow-x4"> NON </button>
        </div>
    </div>`
    body.appendChild(notAlert)
    notAlert.addEventListener('click',(notEvent)=>{
      notEvent.preventDefault()
      let but = notEvent.target.closest('button')
      if(!but) return
      if(but.getAttribute('id')=="yes"){
        e.target.closest("div").parentElement.parentElement.remove()
        isSelected = false
        notAlert.classList.remove("visible","opacity-100")
        notAlert.classList.add("invisible","opacity-0")
        setTimeout(()=>{
                      notAlert.remove()
                    },
                      3000)
      }
      else if(but.getAttribute('id')=="no"){
        notAlert.classList.remove("visible","opacity-100")
        notAlert.classList.add("invisible","opacity-0")
        setTimeout(()=>{
                      notAlert.remove()
                    },
                      3000)
        }
  })
    return
  }

})
