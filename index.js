var images = [
  {
    caption: "This is an image",
    url: "https://source.unsplash.com/random/200x200",
  },
  {
    caption: "This is another image",
    url: "https://source.unsplash.com/random/201x200"
  },
  {
    caption: "This is another image",
    url: "https://source.unsplash.com/random/202x200"
  },
  {
    caption: "This is another image",
    url: "https://source.unsplash.com/random/203x200"
  },
  {
    caption: "This is another image",
    url: "https://source.unsplash.com/random/204x200"
  },
  {
    caption: "This is another image",
    url: "https://source.unsplash.com/random/205x200"
  },
  {
    caption: "This is another image",
    url: "https://source.unsplash.com/random/206x200"
  },
  {
    caption: "This is another image",
    url: "https://source.unsplash.com/random/207x200"
  },
  {
    caption: "This is another image",
    url: "https://source.unsplash.com/random/208x200"
  }
];

var container = document.querySelector(".img-list");

var sideContent = document.createElement("div");
sideContent.classList.add("side");
sideContent.textContent =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, perferendis! Temporibus quibusdam ut alias expedita a hic nesciunt numquam placeat, commodi, quae reprehenderit cumque laudantium, perferendis necessitatibus ullam tempore qui eos ipsa. Dolore quod odio qui expedita voluptas, possimus, assumenda voluptatem vitae deleniti perferendis deserunt repellat maxime natus eveniet esse reprehenderit minima molestiae repellendus quas quasi laborum. Aliquam ullam rem hic aspernatur at nam magnam, ea ab doloribus velit, voluptates porro veritatis provident. Facere distinctio vero, ex sapiente cum laborum fuga natus totam consectetur eligendi similique quae dolores voluptatum velit, perferendis consequatur est aliquid suscipit in tempora quasi, labore ad.";
container.appendChild(sideContent);

var topImg = [
  {
    caption: "This is an image",
    url: "https://source.unsplash.com/random/190x200"
  },
  {
    caption: "This is another image",
    url: "https://source.unsplash.com/random/191x200"
  }
];

var topContent = document.createElement("div");
topContent.classList.add("top-content");

for (var img of topImg) {
  var newImg = document.createElement("img");
  newImg.setAttribute("src", img.url);

  var caption = document.createElement("p");
  caption.textContent = img.caption;

  var ulList = document.createElement("div");
  ulList.classList.add("lists");
  topContent.appendChild(ulList);
  ulList.appendChild(newImg);
  container.appendChild(topContent);
}

for(var i=0; i<images.length; i++) {
    var img = images[i];
    var newImg = document.createElement("img");
    newImg.setAttribute("src", img.url);

    var caption = document.createElement("p");
    caption.textContent = img.caption;

    newImg.setAttribute('data-index', i);
    newImg.addEventListener("click", open);

    var button = document.createElement("button");
    button.textContent = "Click Me";
    button.classList.add("btn");

    var listItem = document.createElement("li");
    listItem.appendChild(newImg);
    listItem.classList.add("main-img-list", "scale-up");
    listItem.appendChild(caption);
    listItem.appendChild(button);
    container.appendChild(listItem);
}

function open(e) {
    var imgIndex = e.currentTarget.getAttribute('data-index');
    var imgCopy = document.querySelector('.newIMG');
    var image = images[imgIndex];
    var imgHeader = document.querySelector('.img-header');
    imgHeader.textContent=image.caption;
    imgCopy.setAttribute('src', image.url);
    var modal = document.querySelector('.img-container');
    modal.classList.add('show');                
    body = document.querySelector("body").style.backgroundColor = "rgba(0,0,0,0.5)";
};

var btn = document.querySelector('.closeBTN');
btn.addEventListener('click',close);

function close(e) {
    e.currentTarget=btn;
    var btn = document.querySelector('.closeBTN');
    
    if(btn) {
        var modal = document.querySelector('.img-container');
        modal.classList.remove('show');                
        body = document.querySelector("body").style.backgroundColor = "white";
    }
}
