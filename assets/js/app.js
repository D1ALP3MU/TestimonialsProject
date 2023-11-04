const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const userImage = document.querySelector('#userImg');
const userTestimonial = document.querySelector('.user-testimonial');
const userName = document.querySelector('.user-name');
const userDegree = document.querySelector('.user-degree');

const users = [
    {
        name: 'John Sinclair',
        imageUrl: '/assets/img/image-tanya.jpg',
        testimonial: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
        degree: 'UX Engineer'
    },
    {
        name: 'John Tarkpor',
        imageUrl: '/assets/img/image-john.jpg',
        testimonial: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
        degree: 'Junior Front-end Developer'
    },
];

const updateProfileInfo = () => {
    userImage.setAttribute('src', users[imageIndex].imageUrl);
    userTestimonial.textContent = users[imageIndex].testimonial;
    userName.textContent = users[imageIndex].name;
    userDegree.textContent = users[imageIndex].degree;
}

let imageIndex = 0;

prevBtn.addEventListener('click', () => {
    imageIndex === 0 ? imageIndex = users.length - 1 : imageIndex--;
    updateProfileInfo();
})

nextBtn.addEventListener('click', () => {
    imageIndex === users.length - 1 ? imageIndex = 0 : imageIndex++;
    updateProfileInfo();
})