
            window.addTx = function() {
                const desc = document.getElementById('ledger-desc');
                const amt = document.getElementById('ledger-amt');
                const list = document.getElementById('tx-list');
                if(!desc.value || !amt.value) return;
                const li = document.createElement('li');
                li.innerHTML = `<span>${desc.value}</span><strong>$${amt.value}</strong>`;
                list.appendChild(li);
                desc.value = '';
                amt.value = '';
            }
        