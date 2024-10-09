const title = document.getElementById('song-title');
const artist = document.getElementById('artist-name');
const Add = document.getElementById('add-button');
const div2 = document.getElementById('song')


Add.addEventListener('click', ()=>{
    const newtitle = title.value;
    const newartist = artist.value;

    const span1 = document.createElement('span1');
    const span2 = document.createElement('span2');
    const div1 = document.createElement('div1');


    span1.innerHTML = newtitle;
    span2.innerHTML = newartist;

    span1.classList.add('artist-name');
    span2.classList.add('song-artist');

    div1.append(span1)
    div1.append(span2)
    

    // console.log(div1)

})


