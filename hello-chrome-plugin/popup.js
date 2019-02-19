
var vip = document.getElementById('vip')
var url = ''

chrome.tabs.getSelected(null, function(tab){
    setTimeout(function() {
        url = tab.url
    }, 0)
})

vip.addEventListener('click', function () {
    window.open('http://app.baiyug.cn:2019/vip/index.php?url=' + url)
})
