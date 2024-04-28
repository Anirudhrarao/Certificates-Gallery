const certificates = [
    "certificates/problem solving.png",
    "certificates/python.png",
    "certificates/django.jpg",
    "certificates/drf.jpg",
    "certificates/pandas.png",
    "certificates/ds.png",
    "certificates/sml.png",
    "certificates/uml.png",
    "certificates/nlp.png",
    // Add more certificate image URLs here
];

const titles = [
    "Problem Solving",
    "Python Programming",
    "Django Web Development",
    "Django Rest Framework",
    "Pandas Data Analysis",
    "Data Science",
    "Supervised Machine Learning",
    "Unsupervised Machine Learning",
    "Natural Language Processing",
    // Add more titles here
];

const descriptions = [

];

const gallery = document.querySelector('.gallery');

certificates.forEach((certificate, index) => {
    const certificateElement = document.createElement('div');
    certificateElement.classList.add('certificate');

    const imageElement = document.createElement('img');
    imageElement.src = certificate;
    imageElement.alt = "Certificate";

    const overlayElement = document.createElement('div');
    overlayElement.classList.add('overlay');

    const overlayContent = document.createElement('div');
    overlayContent.classList.add('overlay-content');

    const titleElement = document.createElement('h3');
    titleElement.textContent = titles[index]; // Select title based on index
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = descriptions[index]; // Select description based on index

    overlayContent.appendChild(titleElement);
    overlayContent.appendChild(descriptionElement);
    overlayElement.appendChild(overlayContent);
    certificateElement.appendChild(imageElement);
    certificateElement.appendChild(overlayElement);
    gallery.appendChild(certificateElement);
});
