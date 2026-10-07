const categorias = document.querySelectorAll('.categoria')
categorias.forEach(function(categoria) {
    const boton = categoria.querySelector('.cat-header')
    const body = categoria.querySelector('.cat-body')

    boton.addEventListener('click', function() {
        if (categoria.classList.contains('abierto')) {
            body.style.maxHeight = '0'
            categoria.classList.remove('abierto')
        } else {
            body.style.maxHeight = body.scrollHeight + 'px'
            categoria.classList.add('abierto')
        }
    })
})

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible')
        }
        else {
            entry.target.classList.remove('visible')  /* agrega esta línea */
        }
    })
})

document.querySelectorAll('.reveal').forEach(function(el) {
    observer.observe(el)
})