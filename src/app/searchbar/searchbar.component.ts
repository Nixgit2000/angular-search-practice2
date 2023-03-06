import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  data = [
    {title: "Harry Potter", title2: "and the Sorcerer's Stone", font: "HP", fontSize: "1.7vw", fontSize2: "1.2vw", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "54% 60%",  pic: "../assets/ASSETS/HP1.png"},
    {title: "Harry Potter", title2: "and the Chamber of Secrets", font: "HP", fontSize: "1.7vw", fontSize2: "1.2vw", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "65% 60%",  pic: "../assets/ASSETS/HP2.png"},
    {title: "Harry Potter", title2: "and the Prisoner of Azkaban", font: "HP", fontSize: "1.7vw", fontSize2: "1.2vw",  actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "40% 60%",  pic: "../assets/ASSETS/HP3.png"},
    {title: "Harry Potter", title2: "and the Goblet of Fire", font: "HP", fontSize: "1.7vw", fontSize2: "1.2vw",  actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "75% 60%",  pic: "../assets/ASSETS/HP4.png"},
    {title: "Harry Potter", title2: "and the Order of the Phoenix", font: "HP", fontSize: "1.7vw",fontSize2: "1.2vw", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling",backgroundPos: "38% 60%",   pic: "../assets/ASSETS/HP5.png"},
    {title: "Harry Potter", title2: "and the Half Blood Prince", font: "HP", fontSize: "1.7vw",fontSize2: "1.2vw", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "23% 60%",  pic: "../assets/ASSETS/HP6.png"},
    {title: "Harry Potter", title2: "and the Deathly Hallows: Part I", font: "HP", fontSize: "1.7vw",fontSize2: "1.2vw", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "10% 90%",  pic: "../assets/ASSETS/HP7.png"},
    {title: "Harry Potter", title2: "and the Deathly Hallows: Part II", font: "HP", fontSize: "1.7vw",fontSize2: "1.2vw", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "10% 60%",  pic: "../assets/ASSETS/HP8.png"},

    {title: "Lord of the Rings", title2: "the Fellowship of the Ring", font: "LOTR", fontSize: "1vw", fontSize2: ".7vw", actor: "Elijah Wood, Viggo Mortensen, Sean Astin, Orlando Bloom, Ian McKellen, Sean Bean, Dominic Monaghan, Billy Boyd", backgroundPos: "center center",  pic: "../assets/ASSETS/LOTR1.png"},
    {title: "Lord of the Rings", title2: "the Two Towers", font: "LOTR", fontSize: "1vw",fontSize2: ".7vw", actor: "Elijah Wood, Viggo Mortensen, Sean Astin, Orlando Bloom, Ian McKellen, Sean Bean, Dominic Monaghan, Billy Boyd", backgroundPos: "0% 60%",  pic: "../assets/ASSETS/LOTR2.png"},
    {title: "Lord of the Rings", title2: "the Return of the King", font: "LOTR", fontSize: "1vw",fontSize2: ".7vw", actor: "Elijah Wood, Viggo Mortensen, Sean Astin, Orlando Bloom, Ian McKellen, Sean Bean, Dominic Monaghan, Billy Boyd", backgroundPos: "40% 60%",  pic: "../assets/ASSETS/LOTR3.png"},
    {title: "The Hobbit", title2: "an Unexpected Journey", font: "LOTR2", fontSize: "1vw",fontSize2: ".55vw", actor: "Martin Freeman, Richard Armitage, Ian McKellen, Cate Blanchett, Benedict Cumberbatch",backgroundPos: "50% 60%",   pic: "../assets/ASSETS/HP1.png"},
    {title: "The Hobbit", title2: "the Desolation of Smaug", font: "LOTR2", fontSize: "1vw",fontSize2: ".55vw", actor: "Martin Freeman, Richard Armitage, Ian McKellen, Cate Blanchett, Benedict Cumberbatch",backgroundPos: "50% 60%",   pic: "../assets/ASSETS/H2.png"},
    {title: "The Hobbit", title2: "the Battle of the Five Armies", font: "LOTR2", fontSize: "1vw",fontSize2: ".55vw", minFont: "3vw", actor: "Martin Freeman, Richard Armitage, Ian McKellen, Cate Blanchett, Benedict Cumberbatch", backgroundPos: "20% 60%",  pic: "../assets/ASSETS/H3.png"},


    {title: "Fantastic Beasts", title2: "and Where to Find Them", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "Eddie Redmayne, Katherine Waterston, Dan Fogler, Ezra Miller, Colin Farrell, Johnny Depp", backgroundPos: "center center",  pic: "../assets/ASSETS/FB1.png"},
    {title: "Fantastic Beasts", title2: "the Crimes of Grindewald", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "Eddie Redmayne, Katherine Waterston, Dan Fogler, Ezra Miller, Colin Farrell, Johnny Depp", backgroundPos: "0% 60%",  pic: "../assets/ASSETS/FB2.png"},
    {title: "Fantastic Beasts", title2: "the Secrets of Dumbledore", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "Eddie Redmayne, Katherine Waterston, Dan Fogler, Ezra Miller, Colin Farrell, Mads Mikkelsen", backgroundPos: "40% 60%",  pic: "../assets/ASSETS/FB3.png"},
    
  ]
 

  searchText = ''
}
