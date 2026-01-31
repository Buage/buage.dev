const config = {
    'api': "https://fuck.buage.dev"
}

const citations = [
    '"Ask AI to do it for you, then ask it to fix it for you, and waste two hours for three lines."',
    '"If the code structure is shitty but works, ignore it and watch the result."',
    '"Sign in to github copilot before writing anything."',
    '"Dont read the code ChatGPT gives you, copy, paste it and then ship it"',
    '"ChatGPT is down? Dont stop, use Claude, Gemini, Perplexity, Poe, Grok, or anything."',
    '"You notice any security flaw in the code ChatGPT gave u? Ignore it and chill while no one found it yet."',
    '"Ask AI to make you a website, then ask it to use Tailwind even if its pure HTML, steal the credits from AI, and then make it public"',
    '"When AI made something that doesnt work, ask it to make it work and it will work."',
    '"Funfact: this website endpoint is fuck.buage.dev (i was bored)"',
    '"Some people use AI for smart things, and some other use it to spend two hours for three lines changed and the menu still not opening"',
    '"I use arch btw"',
    '"sudo pacman -Sybau"',
    '"Tweaking .bashrc for the 30th time to make some aliases instead of doing something productive rn"',
    '"Any small object will hide under a big object (idk what the fuck does that means lmao but sounds funny)"',
    '"Do you have a life ? Yes : *uses windows*, No : *uses arch*"',
]

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

if (getCookie('lm') === 'true') {
    document.body.classList.remove('dark');
}

if (getCookie('toggle') === 'true') {
    document.getElementById('uselessToggleInput').checked = true
}

document.getElementById('lmBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    const lmValue = !isDark;
    setCookie('lm', lmValue, 365);
    fetch(config.api + '/lmode.php?lm=' + lmValue);
});

document.getElementById('doxxBtn').addEventListener('click', function() {
    alert('you will get rabax in 3')
    alert('you will get rabax in 2')
    alert('you will get rabax in 1')
    window.open('https://streamable.com/lf027o')
    fetch(config.api + '/rickroll.php', { method: 'GET' })
    alert('jk btw just rickrolling u lmao')
});

fetch(config.api + '/stats.php', { method: 'GET' })
.then(res => res.json())
.then(data => {
    if (!data.ok) return;
    document.getElementById('totalDoxx').textContent = data.totals.rickrolls + ' peoples';
    document.getElementById('totalViews').textContent = data.totals.visits + ' views';
    document.getElementById('totalLm').textContent = data.lightmode.enabled + ' visitors';
    document.getElementById('totalToggle').textContent = data.toggle_total + ' Users'
});

document.getElementById('uselessToggleInput').addEventListener('change', function() {
    fetch(config.api + '/toggle.php?lm=' + this.checked)
    setCookie('toggle', this.checked, 365)
})

document.querySelector('.infosBtn').addEventListener('click', function() {
    document.querySelector('.infos-div').classList.toggle('infos-div-show');
});

document.querySelector('.citation').textContent = citations[Math.floor(Math.random() * citations.length)];

fetch(config.api + '/visit.php');
