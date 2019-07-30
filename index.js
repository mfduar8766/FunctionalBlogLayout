var images = [
  {
    caption: "This is an image",
    url: "https://source.unsplash.com/random/200x200"
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

var container = $(".img-list");

var sideContent = $("<div>");
sideContent.addClass("side");
sideContent.text(
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, perferendis! Temporibus quibusdam ut alias expedita a hic nesciunt numquam placeat, commodi, quae reprehenderit cumque laudantium, perferendis necessitatibus ullam tempore qui eos ipsa. Dolore quod odio qui expedita voluptas, possimus, assumenda voluptatem vitae deleniti perferendis deserunt repellat maxime natus eveniet esse reprehenderit minima molestiae repellendus quas quasi laborum. Aliquam ullam rem hic aspernatur at nam magnam, ea ab doloribus velit, voluptates porro veritatis provident. Facere distinctio vero, ex sapiente cum laborum fuga natus totam consectetur eligendi similique quae dolores voluptatum velit, perferendis consequatur est aliquid suscipit in tempora quasi, labore ad."
);
container.append(sideContent);

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

var topContent = $("<div>");
topContent.addClass("top-content");

for (var img of topImg) {
  var newImg = $("<img>");
  newImg.attr("src", img.url);

  var caption = $("<p>");
  caption.text(img.caption);

  var ulList = $("<div>");
  ulList.addClass("lists");
  topContent.append(ulList);
  ulList.append(newImg);
  container.append(topContent);
}

images.forEach(function(imageFomImgObj) {
  var newImg = $("<img>");
  newImg.attr("src", imageFomImgObj.url);

  var caption = $("<p>");
  caption.text(imageFomImgObj.caption);

  var rightArrow = $(".arrow-right");
  var arrowLeft = $(".arrow-left");

  var open = function() {
    var imgCopy = $(".newIMG");
    var imgHeader = $(".img-header");
    imgHeader.text(imageFomImgObj.caption);
    imgCopy.attr("src", imageFomImgObj.url);
    var modal = $(".img-container");
    modal.addClass("show");
    body = $("body").css("backgroundColor","rgba(0,0,0,0.5)");

    if (rightArrow) {
      imageFomImgObj.url += 1;
      imageFomImgObj.caption += 1;
    } else if (arrowLeft) {
      imageFomImgObj.url -= 1;
      imageFomImgObj.caption -= 1;
    }
  };

  rightArrow.on("click", open);
  arrowLeft.on("click", open);

  var button = $("<button>");
  button.text("Click Me");
  button.addClass("btn");

  button.on("click", open);

  var listItem = $("<li>");
  listItem.append(newImg);
  listItem.addClass("main-img-list");
  listItem.append(caption);
  listItem.append(button);
  container.append(listItem);

  var btn = $(".closeBTN");
  var close = function() {
    if (btn) {
      var modal = $(".img-container");
      modal.removeClass("show");
      body = $("body").css("backgroundColor", "white");
    }
  };
  btn.on("click", close);
});
