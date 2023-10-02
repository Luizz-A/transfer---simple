const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn1 = document.querySelector("#btn")
const todosCursos=[...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const curso = evt.target
        curso.classList.toggle("selecionado")
    })
})

// const classDelete = (el)=>{
//     el.classList.remove("selecionado")
// }

// btn1.addEventListener("click",()=>{
//     const cursoSelecionados = [...document.querySelectorAll(".selecionado")]
//     const selecionados = document.querySelector(".selecionado")
//     if(caixa1.contains(selecionados)){
//         cursoSelecionados.map((el)=>{
//             caixa2.appendChild(el)
//             classDelete(el)
//         })
//     }
//     else{
//         cursoSelecionados.map((el)=>{   
//             caixa1.appendChild(el)
//             classDelete(el)
//         })
//     }
// })
btn1.addEventListener("click",()=>{
    const cursoSelecionados = [...document.querySelectorAll(".selecionado")]
    const cursosNaoSelecionados = [...document.querySelectorAll(".curso:not(.selecionado)")]
        cursoSelecionados.map((el)=>{
            caixa2.appendChild(el)
        })
        cursosNaoSelecionados.map((el) =>{
            caixa1.appendChild(el)
        })
        
})






