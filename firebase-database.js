// firebase-database.js

import { database } from './firebase-app.js';
import { ref, push, get, child } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

const meetupForm = document.getElementById('meetupForm');
const postsList = document.getElementById('postsList');

// Handle form submission
meetupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const title = meetupForm['meetupTitle'].value;
    const date = meetupForm['meetupDate'].value;
    const location = meetupForm['meetupLocation'].value;
    
    try {
        const newMeetupRef = push(ref(database, 'meetups'));
        await newMeetupRef.set({
            title,
            date,
            location
        });
        alert('Meetup added successfully!');
        meetupForm.reset();
        loadMeetups();
    } catch (error) {
        console.error
