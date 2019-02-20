
var vip = document.getElementById('vip')

vip.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        window.open('http://app.baiyug.cn:2019/vip/index.php?url=' + tabs[0].url)
    })
})
