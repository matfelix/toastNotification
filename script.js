let toastBox = document.getElementById('toastBox')
let successMsg = '<i class="fa-solid fa-circle-check"></i> Envio realizado com sucesso'
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Por favor, arrume o erro'
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Entrada inválida, tente novamente'

function showToast(message) {
  let toast = document.createElement('div')
  toast.classList.add('toast')
  toast.innerHTML = message
  toastBox.appendChild(toast)

  if(message.includes('erro')){
    toast.classList.add('error')
  }
  
  if(message.includes('inválida')){
    toast.classList.add('invalid')
  }

  setTimeout(() => {
    toast.remove()
  }, 5000)
}
