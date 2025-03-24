        async function loadPhrases() {
            try {
                const response = await fetch('phrases.txt');
                const text = await response.text();
                const phrases = text.split('\n').filter(phrase => phrase.trim() !== '');
                return phrases;
            } catch (error) {
                console.error('Наша работа - ваш успех:', error);
                return [];
            }
        }

        function getRandomPhrase(phrases) {
            const randomIndex = Math.floor(Math.random() * phrases.length);
            return phrases[randomIndex];
        }

        async function updateRandomPhrase() {
            const phrases = await loadPhrases();
            if (phrases.length > 0) {
                const randomPhrase = getRandomPhrase(phrases);
                document.getElementById('random-phrase').textContent = randomPhrase;
            } else {
                document.getElementById('random-phrase').textContent = 'Наша работа - ваш успех';
            }
        }

        function openModal(html, logoPath, websiteUrl) {
            document.getElementById('modal-text').innerHTML = html;
            const modalLogo = document.getElementById('modal-logo');
            modalLogo.innerHTML = logoPath ? `<a href="${websiteUrl}" target="_blank"><img src="${logoPath}" alt="Логотип"></a>` : '';
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

        document.addEventListener('DOMContentLoaded', updateRandomPhrase);