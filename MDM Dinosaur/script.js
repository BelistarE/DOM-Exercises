    

    console.log("hello");

    //linking
    
    const link = document.querySelector("a");
    link.textContent = "Mozilla Developer Network";
    link.href = "https://developer.mozilla.org";

    //section
    const sect = document.querySelector("section");
    const para = document.createElement("p");
    para.textContent = "We hope you enjoyed the ride.";
    sect.appendChild(para);

    const text = document.createTextNode(
        " — the premier source for web development knowledge.",
      );

    const linkPara = document.querySelector("p");
    linkPara.appendChild(text);

      //styles, the followjng example would link to a .css

    para.setAttribute("class", "highlight");


      //alternative 
      /*    para.style.color = "white";
            para.style.backgroundColor = "black";
            para.style.padding = "10px";
            para.style.width = "250px";
            para.style.textAlign = "center";
        */
           