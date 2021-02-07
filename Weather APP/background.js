// Weather and corresponding image urls

let imageURLs = {
  'Thunderstorm':
    "https://images.unsplash.com/photo-1564343921985-91ced954364a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",

  'Drizzle':
    "https://images.unsplash.com/photo-1505404919723-002ecad81b92?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",

  'Snow':
    "https://images.unsplash.com/photo-1542601098-8fc114e148e2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",

  'Mist':
    "https://images.unsplash.com/photo-1603084612486-bf17185f7b22?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",

  'Smoke':
    "https://images.unsplash.com/photo-1470217957101-da7150b9b681?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",

  'Haze':
    "https://images.unsplash.com/photo-1542669334-9f30f4af1266?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=667&q=80",

  'Dust':
    "https://images.unsplash.com/photo-1520632587893-f4e855502ca3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",

  'Fog':
    "https://images.unsplash.com/photo-1585651686997-5516bd534e9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",

  'Sand':
    "https://images.unsplash.com/photo-1505782388-8632b3423dbb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",

  'Ash':
    "https://images.unsplash.com/photo-1561718303-bda66ed4bfad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",

  'Squall':
    "https://images.unsplash.com/photo-1577472075537-2072bb6de039?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",

  'Tornado':
    "https://images.unsplash.com/photo-1527483006794-aceb6c9043a8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",

  'Clear':
    "https://images.unsplash.com/photo-1604940311674-c88fb601cc05?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  
  "Rain":
    "https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  
  "Clouds":
    "https://images.unsplash.com/photo-1523793740499-83d43b75a2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
};

function displayBodyBackground(description) {
  for (let key in imageURLs) {
    if (key === description) {
      document.body.style.backgroundImage = "url(" + imageURLs[key] + ")";
    }
  }
}


