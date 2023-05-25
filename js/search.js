const image_search = document.querySelector('.image_search')
const image_res = document.querySelectorAll('[id="image_res"]')
const video_search = document.querySelector('.video_search')
const video_res = document.querySelectorAll('[id="video_res"]')
const passage_search = document.querySelector('.passage_search')
const passage_res = document.querySelectorAll('[id="passage_res"]')

image_search.oninput =()=>{
  console.log(image_search.value)
  image_res.forEach(el=>{
    var el_name = el.dataset.name.toLowerCase()
    if(!el_name.includes(image_search.value.toLowerCase())){
      el.style.display = 'none'
    }else{
      el.style.display = 'flex'
    }
    runSearchAnime(el)
  })
}

video_search.oninput =()=>{
  video_res.forEach(el=>{
    var el_name = el.dataset.name.toLowerCase()
    if(!el_name.includes(video_search.value.toLowerCase())){
      el.style.display = 'none'
    }else{
      el.style.display = 'flex'
    }
    runSearchAnime(el)
  })
}

passage_search.oninput =()=>{
  passage_res.forEach(el=>{
    var el_name = el.dataset.name.toLowerCase()
    if(!el_name.includes(passage_search.value.toLowerCase())){
      el.style.display = 'none'
    }else{
      el.style.display = 'flex'
    }
    runSearchAnime(el)
  })
}

const runSearchAnime =(el)=>{
  anime({
    targets : el,
    duration : 500,
    easing: 'spring(1, 80, 10, 0)',
    opacity : [0,1],
  })
}