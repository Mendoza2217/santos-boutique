// script.js - interactions for Santos Boutique
const WA_NUMBER = "573146221584"; // user's whatsapp number

document.addEventListener('DOMContentLoaded', ()=> {
    // attach buy buttons
    document.querySelectorAll('.btn-buy').forEach(btn=>{
        btn.addEventListener('click', (e)=>{
            const product = e.currentTarget.dataset.product || 'Producto';
            const text = `Hola, quiero realizar pedido del producto: ${product}`;
            const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
            window.open(url,'_blank');
        });
    });
    // attach whatsapp quick contact (menu)
    const waLinks = document.querySelectorAll('.wa-contact');
    waLinks.forEach(a=>{
        a.setAttribute('href', `https://wa.me/${WA_NUMBER}`);
        a.setAttribute('target','_blank');
    });
});
