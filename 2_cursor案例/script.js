const cursor = document.getElementById('cursor-follower');
    
document.addEventListener('mousemove', (e) => {
    cursor.style.left = (e.clientX - 16) + 'px'; /* 居中显示 */
    cursor.style.top = (e.clientY - 16) + 'px';
});