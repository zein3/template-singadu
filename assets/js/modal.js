document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.modal').forEach((modal) => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    })
  })
})

const openDetailModal = (detail) => {
  document.querySelector("#detail").innerText = detail;
  document.querySelector("#detail-modal").classList.add('open');
}