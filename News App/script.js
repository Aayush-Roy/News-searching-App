const apiKey = `d33fffa111ce47a18611e7c7104f4752`;
const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d33fffa111ce47a18611e7c7104f4752`;
let container = document.querySelector(".container");
const fetchData=async()=>{
    try{
        let res = await fetch(url);
    let data = await res.json();
    showData(data.articles)
    }
    catch(err)
    {
        console.log(err, "something went wrong!!!");
    }
    
}
const showData=(articles)=>{
    articles.forEach((items)=>{
        console.log(items)
       let box = document.createElement("div");
       box.className = "items";
       let imgUrl = items.urlToImage; 
        let tt = items.title;
        let p = items.description;
        let imgEl = document.createElement("img");
        imgEl.className="img-sec";
        imgEl.src = imgUrl;
        let title = document.createElement("h3");
        title.textContent = tt;
        title.textContent = tt.length >100 ? tt.slice(0, 30) + "..." : tt;
        title.className="tgt";
        let date = document.createElement("b");
        // date.textContent = formatDate(items.publishedAt);
        let des = document.createElement("p");
        des.textContent = p;
        des.textContent = p.length>190 ? p.slice(0,30)+"...":p;
        box.appendChild(imgEl);
        box.appendChild(date);
        box.appendChild(title);
        box.appendChild(des);
        container.appendChild(box);
    })
}
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}
const btn = document.querySelector("#btn");
btn.addEventListener("click",async()=>{
    container.innerHTML="";
    const text = document.querySelector("#text").value;
    try{
        let res = await fetch(`https://newsapi.org/v2/everything?q=${text}&from=2024-04-08&sortBy=publishedAt&apiKey=${apiKey}`);
    let data = await res.json();
    showData(data.articles)
    }
    catch(err)
    {
        console.log(err, "something went wrong!!!");
    }
})
fetchData()
