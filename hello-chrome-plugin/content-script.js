(function() {
    console.log('这是 simple-chrome-plugin-demo 的content-script！');
    var btn = document.getElementById('su')
    btn.style.backgroundColor = 'green'

    btn.addEventListener('mouseover', function (e) {
        let win = document.createElement('div')
        win.setAttribute("id", "win");
        document.querySelector('html').append(win)
    })
})();