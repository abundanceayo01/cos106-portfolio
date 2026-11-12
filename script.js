document.addEventListener('DOMContentLoaded', () => {

    // 1. Navigation Active Link Handling
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // 2. Academic Planner (Add, Complete, Delete Tasks)
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    if (addTaskBtn) {
        addTaskBtn.addEventListener('click', () => {
            const taskText = taskInput.value.trim();
            const dateText = taskDate.value;

            if (taskText === '') {
                alert('Please enter a task description.');
                return;
            }

            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskText} ${dateText ? `(Due: ${dateText})` : ''}</span>
                <div class="task-actions">
                    <button class="complete-btn">Done</button>
                    <button class="delete-btn">Delete</button>
                </div>
            `;

            li.querySelector('.complete-btn').addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            li.querySelector('.delete-btn').addEventListener('click', () => {
                li.remove();
            });

            taskList.appendChild(li);
            taskInput.value = '';
            taskDate.value = '';
        });
    }

    // 3. Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();

            // Rule: No field is empty
            if (!name || !email || !phone || !message) {
                alert('Validation Error: No field can be empty.');
                return;
            }

            // Rule: Email format is valid
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Validation Error: Please enter a valid email format.');
                return;
            }

            // Rule: Phone number contains only digits
            const phoneRegex = /^\d+$/;
            if (!phoneRegex.test(phone)) {
                alert('Validation Error: Phone number must contain digits only.');
                return;
            }

            alert('Success! Message validated and submitted successfully.');
            contactForm.reset();
        });
    }

});