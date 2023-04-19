const list = document.querySelector(".row")

document.addEventListener("DOMContentLoaded", getApi)

function getApi(){
    fetch("https://hasanadiguzel.com.tr/api/sondepremler")
    .then(response => response.json())
    .then(data => {
        let i = 0
        Array.from(data.data).forEach(quake=>{
            i++
            createUI(i,quake.tarih, quake.saat, quake.derinlik_km, quake.yer)
        })
    })
}
/* <div class="col-9 col-md-3 m-3 bg-dark text-white rounded-4">
                <p class="date">Date: <span id="date">2021.01.28</span></p>
                <p class="hour">Hour: <span id="hour">19:20:52</span></p>
                <p class="depth">Depth: <span id="depth">2.6</span></p>
                <p class="place">Place: <span id="place">DERE-(KARAMAN)</span></p>
            </div>    */
function createUI(number,date,hour,depth,place){
  const div = document.createElement("div")
  div.classList = "col-9 col-md-5 m-2 p-2 bg-dark text-white rounded-4"

  const pNumber = document.createElement("p") 
  pNumber.textContent = number 
  pNumber.classList = "text-center text-danger"

  const pDate = document.createElement("p")
  pDate.className = "date"
  pDate.textContent = "Date:"
  const sDate = document.createElement("span")
  sDate.id = "date"
  sDate.textContent = date
    pDate.appendChild(sDate)    

  const pHour = document.createElement("p")
  pHour.className = "Hour"
  pHour.textContent = "Hour:"
  const sHour = document.createElement("span")
  sHour.id = "hour"
  sHour.textContent = hour
    pHour.appendChild(sHour)

  const pDepth = document.createElement("p")
  pDepth.className = "Depth"
  pDepth.textContent = "Depth:"
  const sDepth = document.createElement("span")
  sDepth.id = "depth"
  sDepth.textContent = depth
    pDepth.appendChild(sDepth)
  const pPlace = document.createElement("p")
  pPlace.className = "Place"
  pPlace.textContent = "Place:"
  const sPlace = document.createElement("span")
  sPlace.id = "place"
  sPlace.textContent = place
    pPlace.appendChild(sPlace)
    
    div.appendChild(pNumber)
        div.appendChild(pDate)
            div.appendChild(pHour)
                div.appendChild(pDepth)
                    div.appendChild(pPlace)
                        list.appendChild(div)
}