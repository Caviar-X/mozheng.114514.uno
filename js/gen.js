function gen(div,img,name,desc) {
    document.getElementById(div).innerHTML += 
`
<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="${img}">
    </div>
    <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">${name}<i class="material-icons right">more_vert</i></span>
        <p><a href="${img}">原图片</a></p>
    </div>
    <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">${name}<i class="material-icons right">close</i></span>
        <p>${desc}</p>
    </div>
</div>
`
}