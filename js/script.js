// 동영상 설명 더보기 버튼
document.querySelector('.info').onclick = function() {
    document.querySelector('.video-description').classList.toggle('block');
    document.querySelector('.info .font-icon').classList.toggle('more-btn');
}

// 자동재생 토글버튼
document.getElementById('autoPlay').onclick = function() {
    document.querySelector('.toggle-track').classList.toggle('auto-track');
    document.querySelector('.toggle-circle').classList.toggle('auto-circle');
}

// 댓글 더보기 버튼
document.querySelector('.more-comment').onclick = function() {
    document.querySelector('.commenting').classList.toggle('flex');
    document.querySelector('.more-comment .font-icon').classList.toggle('more-btn');
}