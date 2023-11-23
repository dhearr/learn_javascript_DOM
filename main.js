// // DOM selection
// // getElementById -> element
// const judul = document.getElementById("judul");
// judul.style.color = "red";
// judul.style.backgroundColor = "green";
// judul.style.borderRadius = "10px";
// judul.style.textAlign = "center";
// judul.innerHTML = "dhea ramdani";

// // getElementsByTagName -> HTMLCollection
// const p = document.getElementsByTagName("p");
// for (let j = 0; j < p.length; j++) {
//   p[j].style.backgroundColor = "purple";
//   p[j].style.color = "white";
// }

// const list = document.getElementsByTagName("li");
// for (let i = 0; i < list.length; i++) {
//   list[i].style.backgroundColor = "pink";
//   list[i].style.listStyle = "none";
//   list[i].style.color = "red";
// }

// // getElementsByTagName (bisa mengambil walaupun hanya ada satu element) -> HTMLCollection
// const a = document.getElementsByTagName("a")[0];
// a.style.backgroundColor = "lightblue";
// a.style.textDecoration = "none";
// a.style.color = "red";

// const h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontSize = "50px";
// h1.style.textDecoration = "underline";

// // getElementsByClassName -> HTMLCollection
// const p1 = document.getElementsByClassName("p1")[0];
// p1.innerHTML = "saya ubah dari Javascript";

// // document.querySelector -> element
// const p4 = document.querySelector("#b p");
// p4.style.color = "green";
// p4.style.fontSize = "30px";

// const list2 = document.querySelector("section#b ul li:nth-child(2)");
// list2.style.backgroundColor = "orange";
// list2.style.color = "blue";

// // document.querySelectorAll -> Nodelist
// const p = document.querySelectorAll("p");
// for (let j = 0; j < p.length; j++) {
//   p[j].style.backgroundColor = "red";
// }

// MANIPULASI ELEMENT
// // manipulasi DOM (element.innerHTML)
// const judul = document.getElementById("judul");
// judul.innerHTML =
//   "<a class='judul1' target='_blank' href='http://instgram.com/dherrrrrrrrrrrr'>dhearamdani</a>";
// judul.style.textAlign = "center";

// const judul1 = document.getElementsByClassName("judul1")[0];
// judul1.style.textDecoration = "none";

// // manipulasi DOM (element.style.<propertyCSS>)
// const judul = document.querySelector("#judul");
// judul.style.color = "blue";
// judul.style.backgroundColor = "tomato";

// // manipulasi DOM (element.setAtribute(getAtribute, removeAtribute))
// const judul = document.getElementsByTagName("h1")[0];
// judul.setAttribute("class", "active");

// manipulasi DOM (element.classList({.add()}, {.remove()}, {.toggle()}, {.item()}, {.contains()}, {.replace()})
// const judul = document.getElementById("judul");
// // classList.add() -> menambah class
// judul.classList.add("active", "satu", "dua");
// // classList.remove() -> menghapus class
// judul.classList.remove("active");
// // classList.toggle() -> menambah kelas jika tidak ada, tetapi jika class sudah ada akan di hapus
// judul.classList.toggle("active");
// // classList.item() -> mencari urutan class
// judul.classList.item(0);
// // classList.contains() -> menanyakan ada atau tidak class tersebut (false/true)
// judul.classList.contains('dua')
// // classList.replace() -> menimpa class yang sudah ada dengan class yang baru di tambahkan.
// judul.classList.replace('satu', 'tiga')

// DOM MANIPULATION
// MANIPULASI NODE
// membuat element baru
// appendChild()
// const pBaru = document.createElement("p");
// // membuat isi element baru
// const textPBaru = document.createTextNode("paragraf baru");
// // simpan isi ke dalam elemnet
// pBaru.appendChild(textPBaru);
// // menambahkan element ke dalam section a
// const sectionA = document.getElementById("a");
// sectionA.appendChild(pBaru);

// // insertBefore()
// // membuat element baru
// const liBaru = document.createElement("li");
// // membuat isi element baru
// const textLiBaru = document.createTextNode("item baru");
// // memasukan isi element ke dalam element
// liBaru.appendChild(textLiBaru);
// // menyimpan element
// const ul = document.querySelector("section#b ul");
// // atau bisa menggunakan syntax ini untuk memperkecil scope (ul.querySelector(li:nth-child(2)))
// const li2 = document.querySelector("section#b ul li:nth-child(2)");
// ul.insertBefore(liBaru, li2);

// // removeChild()
// const link = document.querySelector("a");
// sectionA.removeChild(link);

// // replaceChild()
// // panggil dulu parrent nya
// const sectionB = document.getElementById("b");
// // panggil element yang akan di replace
// const p4 = sectionB.querySelector("p");
// // buat element baru
// const paragrafBaru = document.createElement("h2");
// const isiParagrafBaru = document.createTextNode("judul paragraf baru");
// // gabungkan element baru
// paragrafBaru.appendChild(isiParagrafBaru);
// // replace element yang lama dengan element yang baru
// sectionB.replaceChild(paragrafBaru, p4);

// METHOD BARU [.append(), .prepend(), ]
//.prepend()-> menambahkan atau memasukan element ke awal dari parrent nya
// const pBaru = document.createElement("p");
// const textPBaru = document.createTextNode("ini paragraf baru 1 cuy");
// //.append()-> menambahkan atau memasukan element ke akhir dari parrent nya
// const pBaru1 = document.createElement("p");
// const textPbaru1 = document.createTextNode("ini paragraf baru 2 cuy");
// // menggabungkan method yang hasil nya .prepend()
// pBaru.append(textPBaru);
// // menggabungkan method yang hasil nya .append()
// pBaru1.append(textPbaru1);
// // memanggil parrent yang akan di masukkan element baru
// const sectionA = document.getElementById("a");
// // memasukan element baru dengan method .prepend()->memasukan element di awal parrent nya
// sectionA.prepend(pBaru);
// // memasukan element baru dengan method .append()->memasukan element di akhir parrent nya
// sectionA.append(pBaru1);

// // .before()
// const liBaru = document.createElement("li");
// const textLiBaru = document.createTextNode("ini item baru 1 cuy");
// liBaru.append(textLiBaru);
// // after
// const liBaru1 = document.createElement("li");
// const textLiBaru1 = document.createTextNode("ini item baru 2 cuy");
// liBaru1.append(textLiBaru1);

// // memanggil atau memilih element yang akan di sisipkan before dan after
// const listBaru = document.querySelector("section#b ul li:nth-child(2)");
// // memasukan atau menyisipkan element baru dengan method .before()->memasukan atau menyisipkan element baru sebelum element yg di pilih
// listBaru.before(liBaru);
// // memasukan atau menyisipkan element baru dengan method .before()->memasukan atau menyisipkan element baru sesudah element yg di pilih
// listBaru.after(liBaru1);

// // .remove()
// const link = document.querySelector("a");
// link.remove();

// // .replaceWith()
// const sectionB = document.getElementById("b");
// const p4 = sectionB.querySelector("p");
// const paragrafBaru = document.createElement("h2");
// const textParagrafBaru = document.createTextNode("ini judul paragraf baru");
// paragrafBaru.append(textParagrafBaru);
// p4.replaceWith(paragrafBaru);

// // event addEventListener
// const p4 = document.querySelector("section#b p");
// p4.addEventListener("click", function () {
//   const ul = document.querySelector("ul");
//   const listBaru = document.createElement("li");
//   const textListBaru = document.createTextNode("item baru");
//   listBaru.append(textListBaru);
//   ul.append(listBaru);
// });

// // event handler
// const p3 = document.querySelector(".p3");
// p3.onclick = function () {
//   p3.style.backgroundColor = "red";
// };
// p3.onclick = function () {
//   p3.style.color = "green";
// };
