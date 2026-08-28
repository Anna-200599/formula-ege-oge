const menu = document.querySelector('.menu');
const links = document.querySelector('.nav-links');
if(menu) menu.addEventListener('click',()=>links.classList.toggle('open'));

document.querySelectorAll('form[data-demo]').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const box=document.createElement('div');
    box.className='notice';
    box.textContent='Спасибо! Заявка принята. Мы свяжемся с вами в ближайшее время.';
    form.replaceWith(box);
  });
});