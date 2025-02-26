document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            displaySchedule(data);
        })
        .catch(error => console.error('Ошибка при загрузке данных:', error));
});

function displaySchedule(classes) {
    const scheduleContainer = document.getElementById('schedule');
    scheduleContainer.innerHTML = '';

    classes.forEach((classItem, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${classItem.title}</h5>
                <p class="card-text">Время: ${classItem.time}</p>
                <p class="card-text">Максимальное количество участников: ${classItem.maxParticipants}</p>
                <p class="card-text">Текущие участники: <span id="current-${index}">${classItem.currentParticipants}</span></p>
                <button id="register-${index}" class="btn btn-primary" ${classItem.currentParticipants >= classItem.maxParticipants ? 'disabled' : ''}>Записаться</button>
                <button id="cancel-${index}" class="btn btn-danger" style="display: none;">Отменить запись</button>
            </div>
        `;

        scheduleContainer.appendChild(card);

        const registerButton = card.querySelector(`#register-${index}`);
        const cancelButton = card.querySelector(`#cancel-${index}`);

        registerButton.addEventListener('click', () => {
            classItem.currentParticipants++;
            updateParticipants(classItem, index, registerButton, cancelButton);
        });

        cancelButton.addEventListener('click', () => {
            classItem.currentParticipants--;
            updateParticipants(classItem, index, registerButton, cancelButton);
        });
    });
}

function updateParticipants(classItem, index, registerButton, cancelButton) {
    document.getElementById(`current-${index}`).textContent = classItem.currentParticipants;

    if (classItem.currentParticipants >= classItem.maxParticipants) {
        registerButton.disabled = true;
    } else {
        registerButton.disabled = false;
    }

    if (classItem.currentParticipants > 0) {
        cancelButton.style.display = 'inline-block';
    } else {
        cancelButton.style.display = 'none';
    }
}
