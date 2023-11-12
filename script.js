async function getCurrentTab() {
  let queryOptions = {active: true,currentWindow: true} 
  let[tab] = await chrome.tabs.query(queryOptions)
  return tab.url
}

let urlCurrent = Promise.resolve(getCurrentTab())
const urlList = ["reddit", "youtube", "twitter"]
  
urlCurrent.then(urlCurrentValue=>{
  urlList.forEach(urlListValue=>{
    if(`${urlCurrentValue}`.includes(urlListValue)){
      document.querySelector("h1").textContent = "on " + urlListValue
      document.getElementById("img1").src = "/images/" + urlListValue + ".svg"
    }
  })
})
