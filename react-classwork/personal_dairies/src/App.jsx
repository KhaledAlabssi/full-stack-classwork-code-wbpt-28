import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EntryList from './components/EntryList'
import Modal from './components/Modal'

function App() {
  const [count, setCount] = useState(0)
  const [dairies, setDairies] = useState([
  {
    title: "Morning Walk in the Park",
    date: "01/07/2025",
    imageUrl: "https://example.com/images/park-walk.jpg",
    fullText: "Today started with a peaceful walk through the park. Birds were chirping and the sun was just rising — felt like a reset button for my mind."
  },
  {
    title: "Unexpected Rain",
    date: "02/07/2025",
    imageUrl: "https://example.com/images/rainy-day.jpg",
    fullText: "Got caught in the rain without an umbrella. Drenched but smiling. It reminded me to let go and just enjoy the moment."
  },
  {
    title: "Coffee with an Old Friend",
    date: "03/07/2025",
    imageUrl: "https://example.com/images/coffee-friends.jpg",
    fullText: "Met Sam after 3 years. Laughed over silly memories and talked about where life has taken us. Grateful for lasting friendships."
  },
  {
    title: "Bookstore Treasure",
    date: "04/07/2025",
    imageUrl: "https://example.com/images/bookstore.jpg",
    fullText: "Stumbled into a hidden bookstore downtown. Found a signed copy of a childhood favorite. Pure serendipity!"
  },
  {
    title: "Late Night Reflections",
    date: "05/07/2025",
    imageUrl: "https://example.com/images/night-reflection.jpg",
    fullText: "Sat by the window watching the city lights. So many thoughts racing, but in that quiet moment, everything felt still and okay."
  }
]
)

// saving to and from the Local Storage scenarios:



function saveToLs (newDairy) {
  // create new date for dairy
  const date = new Date()

  // get the array of dairies "if exist in ls":
  const savedDairies = JSON.parse(localStorage.getItem("dairies") || "[]")
  
  // check if the date is already exist:


  console.log(savedDairies.length);
  

  // add new dairy into the dairies array:
  savedDairies.push(newDairy)

  console.log(savedDairies);
  

  // save the updated array in LS:
  localStorage.setItem("dairies", JSON.stringify(savedDairies))

}

saveToLs({
    title: "Late Night Reflections",
    date: "05/07/2025",
    imageUrl: "https://example.com/images/night-reflection.jpg",
    fullText: "Sat by the window watching the city lights. So many thoughts racing, but in that quiet moment, everything felt still and okay."
  })

  return (
    <>


    <div>
      <EntryList dairies={dairies} />

      
    </div>
    
    </>
  )
}

export default App
