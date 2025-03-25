function openModal(html, logoPath, websiteUrl) {
    const modalText = document.getElementById('modal-text');
    const modalLogo = document.getElementById('modal-logo');

    modalText.innerHTML = html;
    modalLogo.innerHTML = logoPath 
        ? `<a href="${websiteUrl}" target="_blank"><img src="${logoPath}" alt="Логотип"></a>` 
        : '';

    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
};