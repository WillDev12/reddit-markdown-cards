function generate() {
    let s = document.getElementById("username"), 
        name = s.value, 
        b = document.getElementById("type"), 
        type = b.value;
    if (name === "" || type === "") {
        return;
    }
    document.getElementById("pic1").src = `https://reddit-markdown-cards.vercel.app/api?type=snoo&name=${name}`;
    document.getElementById("pic2").src = `https://reddit-markdown-cards.vercel.app/api?type=card&name=${name}`;
    document.getElementById("pic3").src = `https://reddit-markdown-cards.vercel.app/api?type=banner&name=${name}`;
    document.getElementById("textOutput").value = `https://reddit-markdown-cards.vercel.app/api?type=${type}&name=${name}`;
}