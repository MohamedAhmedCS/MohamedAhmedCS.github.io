window.addEventListener('DOMContentLoaded', (event) => {
    const navLinks = [
        { href: '/', text: 'Home' },
        { href: 'projects', text: 'Projects' },
        { href: 'blogs', text: 'Blogs' },
        { href: 'contact', text: 'Contact' }
        
    ];

    const nav = document.createElement('nav');
    nav.className = 'custom-navbar'; // Add a unique class name

    const ul = document.createElement('ul');
    nav.appendChild(ul);

    navLinks.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        li.appendChild(a);
        ul.appendChild(li);
    });

    document.getElementById('navbar-placeholder').appendChild(nav);
});
