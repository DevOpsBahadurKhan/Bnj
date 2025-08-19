async function fetchDoctors() {
    let res = await fetch('doctors.json');
    let data = await res.json();
    renderDoctors(data)
}

function renderDoctors(data) {
    // row
    let row = document.createElement('div');
    row.className = 'row'
    document.querySelector('.container').appendChild(row);

    data.forEach(doctor => {
        const col = document.createElement('div');
        col.className = 'col-sm-12 col-md-6 col-lg-4 mb-4';

        const card = document.createElement('div');
        card.className = 'card shadow h-100';

        card.innerHTML = `
                <img src="${doctor.image}" class="card-img-top" alt="${doctor.name}" style="height: 220px; object-fit: cover;" />
                <div class="card-body">
                <h5 class="card-title">${doctor.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${doctor.specialty}</h6>
                <p class="card-text">Available Days: ${doctor.availableDays?.join(', ') || 'N/A'}</p>
                <button class="btn btn-primary book-btn" data-id="${doctor.id}">Book Appointment</button>
                </div>`;

        col.appendChild(card);
        row.appendChild(col);
    });
}



document.addEventListener('click', function (e) {
    if (e.target.classList.contains('book-btn')) {
        const doctorId = e.target.getAttribute('data-id');
        console.log("Doctor ID:", doctorId);

        // redirect
        window.location.href = `slot.html?doctorId=${doctorId}`;
    }
});

fetchDoctors()