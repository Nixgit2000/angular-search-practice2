import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  
  
  fantasy = [
    {title: "Harry Potter", title2: "and the Sorcerer's Stone", url:"https://www.youtube.com/watch?v=VyHV0BRtdxo",  actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "54% 60%",  pic: "../assets/ASSETS/HP1.png"},
    {title: "Harry Potter", title2: "and the Chamber of Secrets",url:"https://www.youtube.com/watch?v=1bq0qff4iF8",  actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "65% 60%",  pic: "../assets/ASSETS/HP2.png"},
    {title: "Harry Potter", title2: "and the Prisoner of Azkaban",url:"https://www.youtube.com/watch?v=lAxgztbYDbs",  actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "40% 60%",  pic: "../assets/ASSETS/HP3.png"},
    {title: "Harry Potter", title2: "and the Goblet of Fire",url:"https://www.youtube.com/watch?v=3EGojp4Hh6I",   actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "75% 60%",  pic: "../assets/ASSETS/HP4.png"},
    {title: "Harry Potter", title2: "and the Order of the Phoenix",url:"https://www.youtube.com/watch?v=y6ZW7KXaXYk", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling",backgroundPos: "38% 60%",   pic: "../assets/ASSETS/HP5.png"},
    {title: "Harry Potter", title2: "and the Half Blood Prince",url:"https://www.youtube.com/watch?v=tAiy66Xrsz4", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "23% 60%",  pic: "../assets/ASSETS/HP6.png"},
    {title: "Harry Potter", title2: "and the Deathly Hallows: Part I",url:"https://www.youtube.com/watch?v=MxqsmsA8y5k", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "10% 90%",  pic: "../assets/ASSETS/HP7.png"},
    {title: "Harry Potter", title2: "and the Deathly Hallows: Part II",url:"https://www.youtube.com/watch?v=5NYt1qirBWg", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "10% 60%",  pic: "../assets/ASSETS/HP8.png"},
    {title: "Lord of the Rings", title2: "the Fellowship of the Ring",url: "https://www.youtube.com/watch?v=V75dMMIW2B4", font: "LOTR", fontSize: "1vw", fontSize2: ".7vw", actor: "Elijah Wood, Viggo Mortensen, Sean Astin, Orlando Bloom, Ian McKellen, Sean Bean, Dominic Monaghan, Billy Boyd", backgroundPos: "center center",  pic: "../assets/ASSETS/LOTR1.png"},
    {title: "Lord of the Rings", title2: "the Two Towers",url: "https://www.youtube.com/watch?v=hYcw5ksV8YQ",  font: "LOTR", fontSize: "1vw",fontSize2: ".7vw", actor: "Elijah Wood, Viggo Mortensen, Sean Astin, Orlando Bloom, Ian McKellen, Sean Bean, Dominic Monaghan, Billy Boyd", backgroundPos: "0% 60%",  pic: "../assets/ASSETS/LOTR2.png"},
    {title: "Lord of the Rings", title2: "the Return of the King",url: "https://www.youtube.com/watch?v=y2rYRu8UW8M",  font: "LOTR", fontSize: "1vw",fontSize2: ".7vw", actor: "Elijah Wood, Viggo Mortensen, Sean Astin, Orlando Bloom, Ian McKellen, Sean Bean, Dominic Monaghan, Billy Boyd", backgroundPos: "40% 60%",  pic: "../assets/ASSETS/LOTR3.png"},
    {title: "The Hobbit", title2: "an Unexpected Journey",url: "https://www.youtube.com/watch?v=SDnYMbYB-nU",  font: "LOTR2", fontSize: "1vw",fontSize2: ".55vw", actor: "Martin Freeman, Richard Armitage, Ian McKellen, Cate Blanchett, Benedict Cumberbatch",backgroundPos: "50% 60%",   pic: "../assets/ASSETS/HP1.png"},
    {title: "The Hobbit", title2: "the Desolation of Smaug",url: "https://www.youtube.com/watch?v=fnaojlfdUbs",  font: "LOTR2", fontSize: "1vw",fontSize2: ".55vw", actor: "Martin Freeman, Richard Armitage, Ian McKellen, Cate Blanchett, Benedict Cumberbatch",backgroundPos: "50% 60%",   pic: "../assets/ASSETS/H2.png"},
    {title: "The Hobbit", title2: "the Battle of the Five Armies",url: "https://www.youtube.com/watch?v=iVAgTiBrrDA", actor: "Martin Freeman, Richard Armitage, Ian McKellen, Cate Blanchett, Benedict Cumberbatch", backgroundPos: "20% 60%",  pic: "../assets/ASSETS/H3.png"},
    {title: "Fantastic Beasts", title2: "and Where to Find Them",url: "https://www.youtube.com/watch?v=ViuDsy7yb8M", font: "LOTR2", fontSize: "1vw",fontSize2: ".55vw", actor: "",backgroundPos: "50% 60%",   pic: "../assets/ASSETS/FB1.png"},
    {title: "Fantastic Beasts", title2: "and Where to Find Them",url:  "https://www.youtube.com/watch?v=8bYBOVWLNIs", font: "LOTR2", fontSize: "1vw",fontSize2: ".55vw", actor: "",backgroundPos: "50% 60%",   pic: "../assets/ASSETS/FB2.png"},
    {title: "Fantastic Beasts", title2: "and Where to Find Them",url:  "https://www.youtube.com/watch?v=Y9dr2zw-TXQ", font: "LOTR2", fontSize: "1vw",fontSize2: ".55vw", actor: "", backgroundPos: "20% 60%",  pic: "../assets/ASSETS/FB3.png"},

  
  ]
  sciFi= [
    {title: "Star Wars", title2: "Episode I: The Phantom Menace",url:  "https://www.youtube.com/watch?v=bD7bpG-zDJQ", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/SW1.png"},
    {title: "Star Wars", title2: "Episode II: Attack of the Clones",url:  "https://www.youtube.com/watch?v=gYbW1F_c9eM", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "", backgroundPos: "0% 60%",  pic: "../assets/ASSETS/SW2.png"},
    {title: "Star Wars", title2: "Episode III: Revenge of the Sith",url:  "https://www.youtube.com/watch?v=5UnjrG_N8hU", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "", backgroundPos: "40% 60%",  pic: "../assets/ASSETS/SW3.png"},
    {title: "Star Wars", title2: "Episode IV: A New Hope", font: "FB",url:  "https://www.youtube.com/watch?v=55jkOtsEZZg", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/SW4.png"},
    {title: "Star Wars", title2: "Episode V: The Empire Strikes Back",url:  "https://www.youtube.com/watch?v=urhsYepFqs0&vl=en", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "", backgroundPos: "0% 60%",  pic: "../assets/ASSETS/SW5.png"},
    {title: "Star Wars", title2: "Episode VI: Return of the Jedi",url:  "https://www.youtube.com/watch?v=Z68iAdS68CI", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "", backgroundPos: "40% 60%",  pic: "../assets/ASSETS/SW6.png"},
    {title: "Star Wars", title2: "Episode VII: The Force Awakens",url:  "https://www.youtube.com/watch?v=sGbxmsDFVnE", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/SW7.png"},
    {title: "Star Wars", title2: "Episode VIII: The Last Jedi",url:  "https://www.youtube.com/watch?v=Q0CbN8sfihY", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "", backgroundPos: "0% 60%",  pic: "../assets/ASSETS/SW8.png"},
    {title: "Star Wars", title2: "Episode IX: The Rise of Skywalker",url:  "https://www.youtube.com/watch?v=8Qn_spdM5Zg", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "", backgroundPos: "40% 60%",  pic: "../assets/ASSETS/SW9.png"},
    {title: "The Matrix", title2: "",url:  "https://www.youtube.com/watch?v=vKQi3bBA1y8",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/M1.png"},
    {title: "The Matrix", title2: "II",url:  "https://www.youtube.com/watch?v=kYzz0FSgpSU",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/M2.png"},
    {title: "The Matrix", title2: "III",url:  "https://www.youtube.com/watch?v=hMbexEPAOQI",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/M3.png"},
    {title: "The Matrix", title2: "IV",url:  "https://www.youtube.com/watch?v=9ix7TUGVYIo",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/M4.png"},
    {title: "Star Trek", title2: "",url:  "https://www.youtube.com/watch?v=pKFUZ10Wmbw",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/ST1.png"},
    {title: "Star Trek", title2: "Into Darkness",url:  "https://www.youtube.com/watch?v=RJ1qOs7jkIQ",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/ST2.png"},
    {title: "Men In Black", title2: "I",url:  "https://www.youtube.com/watch?v=UxUTTrU6PA4",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/MIB1.png"},
    {title: "Men In Black", title2: "II",url:  "https://www.youtube.com/watch?v=p4NJHqoojOU",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/MIB2.png"},
    {title: "Men In Black", title2: "III",url:  "https://www.youtube.com/watch?v=IyaFEBI_L24",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/MIB3.png"},
    {title: "Alien", title2: "",url:  "https://www.youtube.com/watch?v=jQ5lPt9edzQ",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AL1.png"},
    {title: "Aliens", title2: "",url:  "https://www.youtube.com/watch?v=oSeQQlaCZgU",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AL2.png"},
    {title: "Alien", title2: "III",url:  "https://www.youtube.com/watch?v=Bk_x9W1xKng",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AL3.png"},
    {title: "Alien", title2: "Resurrection",url:  "https://www.youtube.com/watch?v=-qJjiq72WOo",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AL4.png"},
    {title: "Alien", title2: "Prometheus",url:  "https://www.youtube.com/watch?v=HHcHYisZFLU",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AL5.png"},
    {title: "Alien", title2: "Covenant",url:  "https://www.youtube.com/watch?v=svnAD0TApb8",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AL6.png"},
    {title: "Rise of the Planet of the Apes",title2: "",url:  "https://www.youtube.com/watch?v=Rwp58drJh2A",   font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/POA1.png"},
    {title: "Dawn of the Planet of the Apes",title2: "", url:  "https://www.youtube.com/watch?v=rf5e7Xc1Hwk",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/POA2.png"},
    {title: "War for the Planet of the Apes",title2: "",url:  "https://www.youtube.com/watch?v=qxjPjPzQ1iU",   font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/POA3.png"},
    {title: "The Mummy", title2: "",url:  "https://www.youtube.com/watch?v=f7oKxlaUBac",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TM1.png"},
    {title: "The Mummy", title2: "Returns",url:  "https://www.youtube.com/watch?v=ptmLrNpmcBo",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TM2.png"},
    {title: "The Mummy", title2: "Tomb of the Dragon Emperor",url:  "https://www.youtube.com/watch?v=5-4qSE2Ch0Y",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TM4.png"},
    {title: "Transformers", title2: "",url:  "https://www.youtube.com/watch?v=v8ItGrI-Ou0",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TF1.png"},
    {title: "Transformers", title2: "Revenge of the Fallen",url:  "https://www.youtube.com/watch?v=cSxd33D8jc0",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TF2.png"},
    {title: "Transformers", title2: "Dark of the Moon",url:  "https://www.youtube.com/watch?v=Nj0HkNrPK5k",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TF3.png"},
    {title: "Transformers", title2: "Age of Extinction",url:  "https://www.youtube.com/watch?v=T9bQCAWahLk",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TF4.png"},
    {title: "Jurassic Park", title2: "I",url:  "https://www.youtube.com/watch?v=_jKEqDKpJLw",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JP1.png"},
    {title: "Jurassic Park", title2: "II",url:  "https://www.youtube.com/watch?v=vtfwgaHD5_w",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JP2.png"},
    {title: "Jurassic Park", title2: "III",url:  "https://www.youtube.com/watch?v=gjIaV6CU0wA",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JP3.png"},
    {title: "Jurassic World", title2: "I",url:  "https://www.youtube.com/watch?v=RFinNxS5KN4",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JP4.png"},
    {title: "Jurassic World", title2: "II",url:  "https://www.youtube.com/watch?v=vn9mMeWcgoM",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JP5.png"},
    

  ]
  action= [
    {title: "Mission Impossible", title2: "",url:  "https://www.youtube.com/watch?v=Ohws8y572KE",   actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/MI1.png"},
    {title: "Mission Impossible", title2: "II",url:  "https://www.youtube.com/watch?v=vIpqpRuGrq4",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/MI2.png"},
    {title: "Mission Impossible", title2: "III",url:  "https://www.youtube.com/watch?v=KH_lyU4vJn8",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/MI3.png"},
    {title: "Mission Impossible", title2: "IV",url:  "https://www.youtube.com/watch?v=EDGYVFZxsXQ",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/MI4.png"},
    {title: "Mission Impossible", title2: "V",url:  "https://www.youtube.com/watch?v=EIsauUFIguE",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/MI5.png"},
    {title: "Mission Impossible", title2: "VI",url:  "https://www.youtube.com/watch?v=wb49-oV0F78",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/MI6.png"},
    {title: "John Wick", title2: "I",url:  "https://www.youtube.com/watch?v=C0BMx-qxsP4",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JW1.png"},
    {title: "John Wick", title2: "II",url:  "https://www.youtube.com/watch?v=XGk2EfbD_Ps",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JW2.png"},
    {title: "John Wick", title2: "III",url:  "https://www.youtube.com/watch?v=M7XM597XO94",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JW3.png"},
    {title: "Die Hard", title2: "I",url:  "https://www.youtube.com/watch?v=jaJuwKCmJbY",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/DH1.png"},
    {title: "Die Hard", title2: "II",url:  "https://www.youtube.com/watch?v=CvHp7xJZ4_U",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/DH2.png"},
    {title: "Die Hard", title2: "III",url:  "https://www.youtube.com/watch?v=_-EX4X13hYc",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/DH3.png"},
    {title: "Die Hard", title2: "IV",url:  "https://www.youtube.com/watch?v=pVgGRLH5n6U",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/DH4.png"},
    {title: "Die Hard", title2: "V",url:  "https://www.youtube.com/watch?v=FRLwoMXaZHQ",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/DH5.png"},
    {title: "The Bourne Identity", title2: "",url:  "https://www.youtube.com/watch?v=FpKaB5dvQ4g",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JB1.png"},
    {title: "The Bourne Supremacy", title2: "",url:  "https://www.youtube.com/watch?v=Y-HqyyfBbSo",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JB2.png"},
    {title: "The Bourne Ultimatum", title2: "",url:  "https://www.youtube.com/watch?v=ZT2ZxjUjSo0",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JB3.png"},
    {title: "The Bourne Legacy", title2: "",url:  "https://www.youtube.com/watch?v=jSzy9qQ3mDE",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JB4.png"},
    {title: "Jason Bourne", title2: "",url:  "https://www.youtube.com/watch?v=v71ce1Dqqns",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JB5.png"},
  ]
  comicBook = [
    {title: "The Avengers", title2: "",url:  "https://www.youtube.com/watch?v=eOrNdBpGMv8",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TA1.png"},
    {title: "The Avengers", title2: "Age of Ultron",url:  "https://www.youtube.com/watch?v=rD8lWtcgeyg",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TA2.png"},
    {title: "The Avengers", title2: "Infinity War",url:  "https://www.youtube.com/watch?v=6ZfuNTqbHE8",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TA3.png"},
    {title: "The Avengers", title2: "Endgame",url:  "https://www.youtube.com/watch?v=TcMBFSGVi1c",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TA4.png"},
    {title: "Batman Begins", title2: "",url:  "https://www.youtube.com/watch?v=neY2xVmOfUM",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/B1.png"},
    {title: "The Dark Knight", title2: "",url:  "https://www.youtube.com/watch?v=EXeTwQWrcwY",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/B2.png"},
    {title: "The Dark Knight Rises", title2: "",url:  "https://www.youtube.com/watch?v=GokKUqLcvD8",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/B3.png"},
    {title: "Spider-Man", title2: "I",url:  "https://www.youtube.com/watch?v=_yhFofFZGcc",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/SM1.png"},
    {title: "Spider-Man", title2: "II",url:  "https://www.youtube.com/watch?v=1s9Yln0YwCw",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/SM2.png"},
    {title: "Spider-Man", title2: "III",url:  "https://www.youtube.com/watch?v=e5wUilOeOmg",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/SM3.png"},
    {title: "The Amazing Spider-Man", title2: "I",url:  "https://www.youtube.com/watch?v=upwf8RsyNqQ",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TAS1.png"},
    {title: "The Amazing Spider-Man", title2: "II",url:  "https://www.youtube.com/watch?v=DlM2CWNTQ84",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TAS2.png"},
    {title: "X-Men", title2: "I",url:  "https://www.youtube.com/watch?v=VNxwlx6etXI",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/XM1.png"},
    {title: "X-Men", title2: "II",url:  "https://www.youtube.com/watch?v=KjzPi5hfv9c",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/XM2.png"},
    {title: "X-Men", title2: "III",url:  "https://www.youtube.com/watch?v=ZQ0v5dXbw7M",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/XM3.png"},
    {title: "Kick-Ass", title2: "I",url:  "https://www.youtube.com/watch?v=2rpXHqnGDXo",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/KA1.png"},
    {title: "Kick-Ass", title2: "II",url:  "https://www.youtube.com/watch?v=Td921lYSBIA",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/KA2.png"},
  ]  
  horror = [
   
    {title: "The Conjuring", title2: "I",url:  "https://www.youtube.com/watch?v=k10ETZ41q5o",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/C1.png"},
    {title: "The Conjuring", title2: "II",url:  "https://www.youtube.com/watch?v=VFsmuRPClr4",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/C2.png"},  
    {title: "The Conjuring", title2: "III",url:  "https://www.youtube.com/watch?v=h9Q4zZS2v1k",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/C3.png"},
    {title: "Annabelle", title2: "I",url:  "https://www.youtube.com/watch?v=paFgQNPGlsg",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AB1.png"},
    {title: "Annabelle", title2: "II",url:  "https://www.youtube.com/watch?v=11taaQy2KBg",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AB2.png"},
    {title: "Annabelle", title2: "III",url:  "https://www.youtube.com/watch?v=bCxm7cTpBAs",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AB3.png"},
    {title: "The Shining", title2: "", url:  "https://www.youtube.com/watch?v=5Cb3ik6zP2I", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TS1.png"},
    {title: "Doctor Sleep", title2: "",url:  "https://www.youtube.com/watch?v=CDf_EnIhojk",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TS2.png"},
    {title: "Paranormal Activity", title2: "I",url:  "https://www.youtube.com/watch?v=7TC9bKyDB5Y",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/PA1.png"},
    {title: "Paranormal Activity", title2: "II",url:  "https://www.youtube.com/watch?v=2leETkgvzCA",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/PA2.png"},
    {title: "Paranormal Activity", title2: "III",url:  "https://www.youtube.com/watch?v=e70TX_photI",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/PA3.png"},
    {title: "Paranormal Activity", title2: "IV",url:  "https://www.youtube.com/watch?v=g7Xn2JqH5ng",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/PA4.png"},
    {title: "The Exorcist", title2: "I",url:  "https://www.youtube.com/watch?v=YDGw1MTEe9k",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TE1.png"},
    {title: "The Exorcist", title2: "II",url:  "https://www.youtube.com/watch?v=LDraTxCzewY",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TE2.png"},
    {title: "The Exorcist", title2: "III",url:  "https://www.youtube.com/watch?v=BXsj26KH4jk",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TE3.png"},
    {title: "The Exorcist", title2: "IV",url:  "https://www.youtube.com/watch?v=eHJEMIYNFFY",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TE4.png"},
    {title: "The Exorcist", title2: "V",url:  "https://www.youtube.com/watch?v=5HAZtloPE3I",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TE5.png"},



  ]  
  criticallyAcclaimed = [

    {title: "The Royal Tenenbaums", title2: "",url:  "https://www.youtube.com/watch?v=caMgokYWboU",   actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/RT1.png"},
    {title: "The Grand Buhapest Hotel", title2: "",url:  "https://www.youtube.com/watch?v=1Fg5iWmQjwk",    actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/RT2.png"},
    {title: "Captain Fantastic", title2: "",url:  "https://www.youtube.com/watch?v=D1kH4OMIOMc",    actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/CF1.png"},
    {title: "Into the Wild", title2: "",url:  "https://www.youtube.com/watch?v=lwtZgBFKlzs",    actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/CF2.png"},
    {title: "Rudolph the Red Nosed Reindeer", title2: "",url:  "https://www.youtube.com/watch?v=amuEMNzIt6g",    actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/RRNR1.png"},
    {title: "Scrooge: A Christmas Carol", title2: "",url:  "https://www.youtube.com/watch?v=k3SjIk3uphI",    actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/RRNR2.png"},
    {title: "Office Space", title2: "",url:  "https://www.youtube.com/watch?v=dMIrlP61Z9s",    actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/OS1.png"},
    {title: "Idiocracy", title2: "",url:  "https://www.youtube.com/watch?v=6lai9QhBibk",    actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/OS2.png"},
    {title: "Hot Fuzz", title2: "",url:  "https://www.youtube.com/watch?v=ayTnvVpj9t4",    actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/SP1.png"},
    {title: "At World's End", title2: "",url:  "https://www.youtube.com/watch?v=n__1Y-N5tQk",    actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/SP3.png"},
    {title: "Shaun of the Dead", title2: "",url:  "https://www.youtube.com/watch?v=cqDy3dXLBO8",    actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/SP4.png"},
  ]

  allMovies = [
//fantasy
{title: "Harry Potter", title2: "and the Sorcerer's Stone", url:"https://www.youtube.com/watch?v=VyHV0BRtdxo",  actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "54% 60%",  pic: "../assets/ASSETS/HP1.png"},
{title: "Harry Potter", title2: "and the Chamber of Secrets",url:"https://www.youtube.com/watch?v=1bq0qff4iF8",  actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "65% 60%",  pic: "../assets/ASSETS/HP2.png"},
{title: "Harry Potter", title2: "and the Prisoner of Azkaban",url:"https://www.youtube.com/watch?v=lAxgztbYDbs",  actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "40% 60%",  pic: "../assets/ASSETS/HP3.png"},
{title: "Harry Potter", title2: "and the Goblet of Fire",url:"https://www.youtube.com/watch?v=3EGojp4Hh6I",   actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "75% 60%",  pic: "../assets/ASSETS/HP4.png"},
{title: "Harry Potter", title2: "and the Order of the Phoenix",url:"https://www.youtube.com/watch?v=y6ZW7KXaXYk", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling",backgroundPos: "38% 60%",   pic: "../assets/ASSETS/HP5.png"},
{title: "Harry Potter", title2: "and the Half Blood Prince",url:"https://www.youtube.com/watch?v=tAiy66Xrsz4", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "23% 60%",  pic: "../assets/ASSETS/HP6.png"},
{title: "Harry Potter", title2: "and the Deathly Hallows: Part I",url:"https://www.youtube.com/watch?v=MxqsmsA8y5k", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "10% 90%",  pic: "../assets/ASSETS/HP7.png"},
{title: "Harry Potter", title2: "and the Deathly Hallows: Part II",url:"https://www.youtube.com/watch?v=5NYt1qirBWg", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "10% 60%",  pic: "../assets/ASSETS/HP8.png"},
{title: "Lord of the Rings", title2: "the Fellowship of the Ring",url: "https://www.youtube.com/watch?v=V75dMMIW2B4", font: "LOTR", fontSize: "1vw", fontSize2: ".7vw", actor: "Elijah Wood, Viggo Mortensen, Sean Astin, Orlando Bloom, Ian McKellen, Sean Bean, Dominic Monaghan, Billy Boyd", backgroundPos: "center center",  pic: "../assets/ASSETS/LOTR1.png"},
{title: "Lord of the Rings", title2: "the Two Towers",url: "https://www.youtube.com/watch?v=hYcw5ksV8YQ",  font: "LOTR", fontSize: "1vw",fontSize2: ".7vw", actor: "Elijah Wood, Viggo Mortensen, Sean Astin, Orlando Bloom, Ian McKellen, Sean Bean, Dominic Monaghan, Billy Boyd", backgroundPos: "0% 60%",  pic: "../assets/ASSETS/LOTR2.png"},
{title: "Lord of the Rings", title2: "the Return of the King",url: "https://www.youtube.com/watch?v=y2rYRu8UW8M",  font: "LOTR", fontSize: "1vw",fontSize2: ".7vw", actor: "Elijah Wood, Viggo Mortensen, Sean Astin, Orlando Bloom, Ian McKellen, Sean Bean, Dominic Monaghan, Billy Boyd", backgroundPos: "40% 60%",  pic: "../assets/ASSETS/LOTR3.png"},
{title: "The Hobbit", title2: "an Unexpected Journey",url: "https://www.youtube.com/watch?v=SDnYMbYB-nU",  font: "LOTR2", fontSize: "1vw",fontSize2: ".55vw", actor: "Martin Freeman, Richard Armitage, Ian McKellen, Cate Blanchett, Benedict Cumberbatch",backgroundPos: "50% 60%",   pic: "../assets/ASSETS/HP1.png"},
{title: "The Hobbit", title2: "the Desolation of Smaug",url: "https://www.youtube.com/watch?v=fnaojlfdUbs",  font: "LOTR2", fontSize: "1vw",fontSize2: ".55vw", actor: "Martin Freeman, Richard Armitage, Ian McKellen, Cate Blanchett, Benedict Cumberbatch",backgroundPos: "50% 60%",   pic: "../assets/ASSETS/H2.png"},
{title: "The Hobbit", title2: "the Battle of the Five Armies",url: "https://www.youtube.com/watch?v=iVAgTiBrrDA", actor: "Martin Freeman, Richard Armitage, Ian McKellen, Cate Blanchett, Benedict Cumberbatch", backgroundPos: "20% 60%",  pic: "../assets/ASSETS/H3.png"},
{title: "Fantastic Beasts", title2: "and Where to Find Them",url: "https://www.youtube.com/watch?v=ViuDsy7yb8M", font: "LOTR2", fontSize: "1vw",fontSize2: ".55vw", actor: "",backgroundPos: "50% 60%",   pic: "../assets/ASSETS/FB1.png"},
{title: "Fantastic Beasts", title2: "and Where to Find Them",url:  "https://www.youtube.com/watch?v=8bYBOVWLNIs", font: "LOTR2", fontSize: "1vw",fontSize2: ".55vw", actor: "",backgroundPos: "50% 60%",   pic: "../assets/ASSETS/FB2.png"},
{title: "Fantastic Beasts", title2: "and Where to Find Them",url:  "https://www.youtube.com/watch?v=Y9dr2zw-TXQ", font: "LOTR2", fontSize: "1vw",fontSize2: ".55vw", actor: "", backgroundPos: "20% 60%",  pic: "../assets/ASSETS/FB3.png"},



//sciFi
{title: "Star Wars", title2: "Episode I: The Phantom Menace",url:  "https://www.youtube.com/watch?v=bD7bpG-zDJQ", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/SW1.png"},
{title: "Star Wars", title2: "Episode II: Attack of the Clones",url:  "https://www.youtube.com/watch?v=gYbW1F_c9eM", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "", backgroundPos: "0% 60%",  pic: "../assets/ASSETS/SW2.png"},
{title: "Star Wars", title2: "Episode III: Revenge of the Sith",url:  "https://www.youtube.com/watch?v=5UnjrG_N8hU", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "", backgroundPos: "40% 60%",  pic: "../assets/ASSETS/SW3.png"},
{title: "Star Wars", title2: "Episode IV: A New Hope", font: "FB",url:  "https://www.youtube.com/watch?v=55jkOtsEZZg", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/SW4.png"},
{title: "Star Wars", title2: "Episode V: The Empire Strikes Back",url:  "https://www.youtube.com/watch?v=urhsYepFqs0&vl=en", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "", backgroundPos: "0% 60%",  pic: "../assets/ASSETS/SW5.png"},
{title: "Star Wars", title2: "Episode VI: Return of the Jedi",url:  "https://www.youtube.com/watch?v=Z68iAdS68CI", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "", backgroundPos: "40% 60%",  pic: "../assets/ASSETS/SW6.png"},
{title: "Star Wars", title2: "Episode VII: The Force Awakens",url:  "https://www.youtube.com/watch?v=sGbxmsDFVnE", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/SW7.png"},
{title: "Star Wars", title2: "Episode VIII: The Last Jedi",url:  "https://www.youtube.com/watch?v=Q0CbN8sfihY", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "", backgroundPos: "0% 60%",  pic: "../assets/ASSETS/SW8.png"},
{title: "Star Wars", title2: "Episode IX: The Rise of Skywalker",url:  "https://www.youtube.com/watch?v=8Qn_spdM5Zg", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "", backgroundPos: "40% 60%",  pic: "../assets/ASSETS/SW9.png"},
{title: "The Matrix", title2: "",url:  "https://www.youtube.com/watch?v=vKQi3bBA1y8",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/M1.png"},
{title: "The Matrix", title2: "II",url:  "https://www.youtube.com/watch?v=kYzz0FSgpSU",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/M2.png"},
{title: "The Matrix", title2: "III",url:  "https://www.youtube.com/watch?v=hMbexEPAOQI",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/M3.png"},
{title: "The Matrix", title2: "IV",url:  "https://www.youtube.com/watch?v=9ix7TUGVYIo",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/M4.png"},
{title: "Star Trek", title2: "",url:  "https://www.youtube.com/watch?v=pKFUZ10Wmbw",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/ST1.png"},
{title: "Star Trek", title2: "Into Darkness",url:  "https://www.youtube.com/watch?v=RJ1qOs7jkIQ",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/ST2.png"},
{title: "Men In Black", title2: "I",url:  "https://www.youtube.com/watch?v=UxUTTrU6PA4",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/MIB1.png"},
{title: "Men In Black", title2: "II",url:  "https://www.youtube.com/watch?v=p4NJHqoojOU",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/MIB2.png"},
{title: "Men In Black", title2: "III",url:  "https://www.youtube.com/watch?v=IyaFEBI_L24",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/MIB3.png"},
{title: "Alien", title2: "",url:  "https://www.youtube.com/watch?v=jQ5lPt9edzQ",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AL1.png"},
{title: "Aliens", title2: "",url:  "https://www.youtube.com/watch?v=oSeQQlaCZgU",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AL2.png"},
{title: "Alien", title2: "III",url:  "https://www.youtube.com/watch?v=Bk_x9W1xKng",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AL3.png"},
{title: "Alien", title2: "Resurrection",url:  "https://www.youtube.com/watch?v=-qJjiq72WOo",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AL4.png"},
{title: "Alien", title2: "Prometheus",url:  "https://www.youtube.com/watch?v=HHcHYisZFLU",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AL5.png"},
{title: "Alien", title2: "Covenant",url:  "https://www.youtube.com/watch?v=svnAD0TApb8",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AL6.png"},
{title: "Rise of the Planet of the Apes",title2: "",url:  "https://www.youtube.com/watch?v=Rwp58drJh2A",   font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/POA1.png"},
{title: "Dawn of the Planet of the Apes",title2: "", url:  "https://www.youtube.com/watch?v=rf5e7Xc1Hwk",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/POA2.png"},
{title: "War for the Planet of the Apes",title2: "",url:  "https://www.youtube.com/watch?v=qxjPjPzQ1iU",   font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/POA3.png"},
{title: "The Mummy", title2: "",url:  "https://www.youtube.com/watch?v=f7oKxlaUBac",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TM1.png"},
{title: "The Mummy", title2: "Returns",url:  "https://www.youtube.com/watch?v=ptmLrNpmcBo",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TM2.png"},
{title: "The Mummy", title2: "Tomb of the Dragon Emperor",url:  "https://www.youtube.com/watch?v=5-4qSE2Ch0Y",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TM4.png"},
{title: "Transformers", title2: "",url:  "https://www.youtube.com/watch?v=v8ItGrI-Ou0",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TF1.png"},
{title: "Transformers", title2: "Revenge of the Fallen",url:  "https://www.youtube.com/watch?v=cSxd33D8jc0",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TF2.png"},
{title: "Transformers", title2: "Dark of the Moon",url:  "https://www.youtube.com/watch?v=Nj0HkNrPK5k",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TF3.png"},
{title: "Transformers", title2: "Age of Extinction",url:  "https://www.youtube.com/watch?v=T9bQCAWahLk",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TF4.png"},
{title: "Jurassic Park", title2: "I",url:  "https://www.youtube.com/watch?v=_jKEqDKpJLw",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JP1.png"},
{title: "Jurassic Park", title2: "II",url:  "https://www.youtube.com/watch?v=vtfwgaHD5_w",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JP2.png"},
{title: "Jurassic Park", title2: "III",url:  "https://www.youtube.com/watch?v=gjIaV6CU0wA",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JP3.png"},
{title: "Jurassic World", title2: "I",url:  "https://www.youtube.com/watch?v=RFinNxS5KN4",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JP4.png"},
{title: "Jurassic World", title2: "II",url:  "https://www.youtube.com/watch?v=vn9mMeWcgoM",  font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JP5.png"},



//action
{title: "Mission Impossible", title2: "",url:  "https://www.youtube.com/watch?v=Ohws8y572KE",   actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/MI1.png"},
{title: "Mission Impossible", title2: "II",url:  "https://www.youtube.com/watch?v=vIpqpRuGrq4",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/MI2.png"},
{title: "Mission Impossible", title2: "III",url:  "https://www.youtube.com/watch?v=KH_lyU4vJn8",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/MI3.png"},
{title: "Mission Impossible", title2: "IV",url:  "https://www.youtube.com/watch?v=EDGYVFZxsXQ",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/MI4.png"},
{title: "Mission Impossible", title2: "V",url:  "https://www.youtube.com/watch?v=EIsauUFIguE",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/MI5.png"},
{title: "Mission Impossible", title2: "VI",url:  "https://www.youtube.com/watch?v=wb49-oV0F78",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/MI6.png"},
{title: "John Wick", title2: "I",url:  "https://www.youtube.com/watch?v=C0BMx-qxsP4",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JW1.png"},
{title: "John Wick", title2: "II",url:  "https://www.youtube.com/watch?v=XGk2EfbD_Ps",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JW2.png"},
{title: "John Wick", title2: "III",url:  "https://www.youtube.com/watch?v=M7XM597XO94",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JW3.png"},
{title: "Die Hard", title2: "I",url:  "https://www.youtube.com/watch?v=jaJuwKCmJbY",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/DH1.png"},
{title: "Die Hard", title2: "II",url:  "https://www.youtube.com/watch?v=CvHp7xJZ4_U",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/DH2.png"},
{title: "Die Hard", title2: "III",url:  "https://www.youtube.com/watch?v=_-EX4X13hYc",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/DH3.png"},
{title: "Die Hard", title2: "IV",url:  "https://www.youtube.com/watch?v=pVgGRLH5n6U",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/DH4.png"},
{title: "Die Hard", title2: "V",url:  "https://www.youtube.com/watch?v=FRLwoMXaZHQ",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/DH5.png"},
{title: "The Bourne Identity", title2: "",url:  "https://www.youtube.com/watch?v=FpKaB5dvQ4g",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JB1.png"},
{title: "The Bourne Supremacy", title2: "",url:  "https://www.youtube.com/watch?v=Y-HqyyfBbSo",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JB2.png"},
{title: "The Bourne Ultimatum", title2: "",url:  "https://www.youtube.com/watch?v=ZT2ZxjUjSo0",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JB3.png"},
{title: "The Bourne Legacy", title2: "",url:  "https://www.youtube.com/watch?v=jSzy9qQ3mDE",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JB4.png"},
{title: "Jason Bourne", title2: "",url:  "https://www.youtube.com/watch?v=v71ce1Dqqns",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JB5.png"},
//comicbook
{title: "The Avengers", title2: "",url:  "https://www.youtube.com/watch?v=eOrNdBpGMv8",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TA1.png"},
{title: "The Avengers", title2: "Age of Ultron",url:  "https://www.youtube.com/watch?v=rD8lWtcgeyg",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TA2.png"},
{title: "The Avengers", title2: "Infinity War",url:  "https://www.youtube.com/watch?v=6ZfuNTqbHE8",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TA3.png"},
{title: "The Avengers", title2: "Endgame",url:  "https://www.youtube.com/watch?v=TcMBFSGVi1c",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TA4.png"},
{title: "Batman Begins", title2: "",url:  "https://www.youtube.com/watch?v=neY2xVmOfUM",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/B1.png"},
{title: "The Dark Knight", title2: "",url:  "https://www.youtube.com/watch?v=EXeTwQWrcwY",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/B2.png"},
{title: "The Dark Knight Rises", title2: "",url:  "https://www.youtube.com/watch?v=GokKUqLcvD8",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/B3.png"},
{title: "Spider-Man", title2: "I",url:  "https://www.youtube.com/watch?v=_yhFofFZGcc",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/SM1.png"},
{title: "Spider-Man", title2: "II",url:  "https://www.youtube.com/watch?v=1s9Yln0YwCw",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/SM2.png"},
{title: "Spider-Man", title2: "III",url:  "https://www.youtube.com/watch?v=e5wUilOeOmg",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/SM3.png"},
{title: "The Amazing Spider-Man", title2: "I",url:  "https://www.youtube.com/watch?v=upwf8RsyNqQ",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TAS1.png"},
{title: "The Amazing Spider-Man", title2: "II",url:  "https://www.youtube.com/watch?v=DlM2CWNTQ84",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TAS2.png"},
{title: "X-Men", title2: "I",url:  "https://www.youtube.com/watch?v=VNxwlx6etXI",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/XM1.png"},
{title: "X-Men", title2: "II",url:  "https://www.youtube.com/watch?v=KjzPi5hfv9c",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/XM2.png"},
{title: "X-Men", title2: "III",url:  "https://www.youtube.com/watch?v=ZQ0v5dXbw7M",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/XM3.png"},
{title: "Kick-Ass", title2: "I",url:  "https://www.youtube.com/watch?v=2rpXHqnGDXo",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/KA1.png"},
{title: "Kick-Ass", title2: "II",url:  "https://www.youtube.com/watch?v=Td921lYSBIA",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/KA2.png"},
//horror
{title: "The Conjuring", title2: "I",url:  "https://www.youtube.com/watch?v=k10ETZ41q5o",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/C1.png"},
{title: "The Conjuring", title2: "II",url:  "https://www.youtube.com/watch?v=VFsmuRPClr4",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/C2.png"},  
{title: "The Conjuring", title2: "III",url:  "https://www.youtube.com/watch?v=h9Q4zZS2v1k",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/C3.png"},
{title: "Annabelle", title2: "I",url:  "https://www.youtube.com/watch?v=paFgQNPGlsg",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AB1.png"},
{title: "Annabelle", title2: "II",url:  "https://www.youtube.com/watch?v=11taaQy2KBg",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AB2.png"},
{title: "Annabelle", title2: "III",url:  "https://www.youtube.com/watch?v=bCxm7cTpBAs",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AB3.png"},
{title: "The Shining", title2: "", url:  "https://www.youtube.com/watch?v=5Cb3ik6zP2I", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TS1.png"},
{title: "Doctor Sleep", title2: "",url:  "https://www.youtube.com/watch?v=CDf_EnIhojk",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TS2.png"},
{title: "Paranormal Activity", title2: "I",url:  "https://www.youtube.com/watch?v=7TC9bKyDB5Y",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/PA1.png"},
{title: "Paranormal Activity", title2: "II",url:  "https://www.youtube.com/watch?v=2leETkgvzCA",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/PA2.png"},
{title: "Paranormal Activity", title2: "III",url:  "https://www.youtube.com/watch?v=e70TX_photI",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/PA3.png"},
{title: "Paranormal Activity", title2: "IV",url:  "https://www.youtube.com/watch?v=g7Xn2JqH5ng",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/PA4.png"},
{title: "The Exorcist", title2: "I",url:  "https://www.youtube.com/watch?v=YDGw1MTEe9k",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TE1.png"},
{title: "The Exorcist", title2: "II",url:  "https://www.youtube.com/watch?v=LDraTxCzewY",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TE2.png"},
{title: "The Exorcist", title2: "III",url:  "https://www.youtube.com/watch?v=BXsj26KH4jk",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TE3.png"},
{title: "The Exorcist", title2: "IV",url:  "https://www.youtube.com/watch?v=eHJEMIYNFFY",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TE4.png"},
{title: "The Exorcist", title2: "V",url:  "https://www.youtube.com/watch?v=5HAZtloPE3I",  actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TE5.png"},



    //criticallyAcclaimed 
    {title: "The Royal Tenenbaums", title2: "",url:  "https://www.youtube.com/watch?v=caMgokYWboU",   actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/RT1.png"},
    {title: "The Grand Buhapest Hotel", title2: "",url:  "https://www.youtube.com/watch?v=1Fg5iWmQjwk",    actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/RT2.png"},
    {title: "Captain Fantastic", title2: "",url:  "https://www.youtube.com/watch?v=D1kH4OMIOMc",    actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/CF1.png"},
    {title: "Into the Wild", title2: "",url:  "https://www.youtube.com/watch?v=lwtZgBFKlzs",    actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/CF2.png"},
    {title: "Rudolph the Red Nosed Reindeer", title2: "",url:  "https://www.youtube.com/watch?v=amuEMNzIt6g",    actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/RRNR1.png"},
    {title: "Scrooge: A Christmas Carol", title2: "",url:  "https://www.youtube.com/watch?v=k3SjIk3uphI",    actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/RRNR2.png"},
    {title: "Office Space", title2: "",url:  "https://www.youtube.com/watch?v=dMIrlP61Z9s",    actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/OS1.png"},
    {title: "Idiocracy", title2: "",url:  "https://www.youtube.com/watch?v=6lai9QhBibk",    actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/OS2.png"},
    {title: "Hot Fuzz", title2: "",url:  "https://www.youtube.com/watch?v=ayTnvVpj9t4",    actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/SP1.png"},
    {title: "At World's End", title2: "",url:  "https://www.youtube.com/watch?v=n__1Y-N5tQk",    actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/SP3.png"},
    {title: "Shaun of the Dead", title2: "",url:  "https://www.youtube.com/watch?v=cqDy3dXLBO8",    actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/SP4.png"},
    ]



  searchText = ''
  isDisplayed = true
  isDisplayed2 = true  
  isDisplayed3 = true  
  isDisplayed4 = true  
  isDisplayed5 = true 
  isDisplayed6 = true
  isDisplayed7 = false
  FilterFantasy(){
    this.isDisplayed = false
    this.isDisplayed2 = true
    this.isDisplayed3 = true
    this.isDisplayed4 = true
    this.isDisplayed5 = true
    this.isDisplayed6 = true
    this.isDisplayed7 = true
  }
 
  FilterScienceFiction(){
    this.isDisplayed = true
    this.isDisplayed2 = false
    this.isDisplayed3 = true
    this.isDisplayed4 = true
    this.isDisplayed5 = true
    this.isDisplayed6 = true
    this.isDisplayed7 = true
  }

  FilterAction(){
    this.isDisplayed = true
    this.isDisplayed2 = true
    this.isDisplayed3 = false
    this.isDisplayed4 = true
    this.isDisplayed5 = true
    this.isDisplayed6 = true
    this.isDisplayed7 = true
  }

  FilterComicBook(){
    this.isDisplayed = true
    this.isDisplayed2 = true
    this.isDisplayed3 = true
    this.isDisplayed4 = false
    this.isDisplayed5 = true
    this.isDisplayed6 = true
    this.isDisplayed7 = true
  }

  FilterHorror(){
    this.isDisplayed = true
    this.isDisplayed2 = true
    this.isDisplayed3 = true
    this.isDisplayed4 = true
    this.isDisplayed5 = false
    this.isDisplayed6 = true
    this.isDisplayed7 = true
  }
 
  FilterCriticallyAcclaimed(){
this.isDisplayed = true
this.isDisplayed2 = true
this.isDisplayed3 = true
this.isDisplayed4 = true
this.isDisplayed5 = true
this.isDisplayed6 = false
this.isDisplayed7 = true
  }

  FilterAll(){
    this.isDisplayed = true
    this.isDisplayed2 = true
    this.isDisplayed3 = true
    this.isDisplayed4 = true
    this.isDisplayed5 = true
    this.isDisplayed6 = true
    this.isDisplayed7 = false
      }
    
}
