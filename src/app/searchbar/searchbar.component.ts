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
    {title: "The Hobbit", title2: "the Battle of the Five Armies", font: "LOTR2", fontSize: "1vw",fontSize2: ".55vw", actor: "Martin Freeman, Richard Armitage, Ian McKellen, Cate Blanchett, Benedict Cumberbatch", backgroundPos: "20% 60%",  pic: "../assets/ASSETS/H3.png"},

    {title: "Fantastic Beasts", title2: "and Where to Find Them", font: "LOTR2", fontSize: "1vw",fontSize2: ".55vw", actor: "",backgroundPos: "50% 60%",   pic: "../assets/ASSETS/FB1.png"},
    {title: "Fantastic Beasts", title2: "and Where to Find Them", font: "LOTR2", fontSize: "1vw",fontSize2: ".55vw", actor: "",backgroundPos: "50% 60%",   pic: "../assets/ASSETS/FB2.png"},
    {title: "Fantastic Beasts", title2: "and Where to Find Them", font: "LOTR2", fontSize: "1vw",fontSize2: ".55vw", actor: "", backgroundPos: "20% 60%",  pic: "../assets/ASSETS/FB3.png"},

  
  ]
  sciFi= [
    {title: "Star Wars", title2: "Episode I: The Phantom Menace", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/SW1.png"},
    {title: "Star Wars", title2: "Episode II: Attack of the Clones", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "", backgroundPos: "0% 60%",  pic: "../assets/ASSETS/SW2.png"},
    {title: "Star Wars", title2: "Episode III: Revenge of the Sith", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "", backgroundPos: "40% 60%",  pic: "../assets/ASSETS/SW3.png"},
    {title: "Star Wars", title2: "Episode IV: A New Hope", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/SW4.png"},
    {title: "Star Wars", title2: "Episode V: The Empire Strikes Back", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "", backgroundPos: "0% 60%",  pic: "../assets/ASSETS/SW5.png"},
    {title: "Star Wars", title2: "Episode VI: Return of the Jedi", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "", backgroundPos: "40% 60%",  pic: "../assets/ASSETS/SW6.png"},
    {title: "Star Wars", title2: "Episode VII: The Force Awakens", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/SW7.png"},
    {title: "Star Wars", title2: "Episode VIII: The Last Jedi", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "", backgroundPos: "0% 60%",  pic: "../assets/ASSETS/SW8.png"},
    {title: "Star Wars", title2: "Episode IX: The Rise of Skywalker", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "", backgroundPos: "40% 60%",  pic: "../assets/ASSETS/SW9.png"},
    {title: "The Matrix", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/M1.png"},
    {title: "The Matrix", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/M2.png"},
    {title: "The Matrix", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/M3.png"},
    {title: "Star Trek", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/ST1.png"},
    {title: "Star Trek", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/ST2.png"},
    {title: "Men In Black", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/MIB1.png"},
    {title: "Men In Black", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/MIB2.png"},
    {title: "Men In Black", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/MIB3.png"},
    {title: "Alien", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AL1.png"},
    {title: "Alien", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AL2.png"},
    {title: "Alien", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AL3.png"},
    {title: "Alien", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AL4.png"},
    {title: "Alien", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AL5.png"},
    {title: "Alien", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AL6.png"},
    {title: "Planet of the Apes", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/POA1.png"},
    {title: "Planet of the Apes", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/POA2.png"},
    {title: "Planet of the Apes", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/POA3.png"},
    {title: "The Mummy", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TM1.png"},
    {title: "The Mummy", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TM2.png"},
    {title: "The Mummy", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TM4.png"},
    {title: "Transformers", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TF1.png"},
    {title: "Transformers", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TF2.png"},
    {title: "Transformers", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TF3.png"},
    {title: "Transformers", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TF4.png"},
    {title: "Jurassic Park", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JP1.png"},
    {title: "Jurassic Park", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JP2.png"},
    {title: "Jurassic Park", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JP3.png"},
    {title: "Jurassic Park", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JP4.png"},
    {title: "Jurassic Park", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JP5.png"},


  ]
  action= [
    {title: "", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/.png"},
  ]
  comicBook = [
    {title: "", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/.png"},
  ]  
  drama = [
    {title: "", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/.png"},

  ]  
  criticallyAcclaimed = [
    {title: "", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/.png"},

  ]

  allMovies = [
//fantasy
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
      {title: "The Hobbit", title2: "the Battle of the Five Armies", font: "LOTR2", fontSize: "1vw",fontSize2: ".55vw", actor: "Martin Freeman, Richard Armitage, Ian McKellen, Cate Blanchett, Benedict Cumberbatch", backgroundPos: "20% 60%",  pic: "../assets/ASSETS/H3.png"},
  
      {title: "Fantastic Beasts", title2: "and Where to Find Them", font: "LOTR2", fontSize: "1vw",fontSize2: ".55vw", actor: "",backgroundPos: "50% 60%",   pic: "../assets/ASSETS/FB1.png"},
      {title: "Fantastic Beasts", title2: "and Where to Find Them", font: "LOTR2", fontSize: "1vw",fontSize2: ".55vw", actor: "",backgroundPos: "50% 60%",   pic: "../assets/ASSETS/FB2.png"},
      {title: "Fantastic Beasts", title2: "and Where to Find Them", font: "LOTR2", fontSize: "1vw",fontSize2: ".55vw", actor: "", backgroundPos: "20% 60%",  pic: "../assets/ASSETS/FB3.png"},
  
//sciFi
      {title: "Star Wars", title2: "Episode I: The Phantom Menace", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/SW1.png"},
      {title: "Star Wars", title2: "Episode II: Attack of the Clones", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "", backgroundPos: "0% 60%",  pic: "../assets/ASSETS/SW2.png"},
      {title: "Star Wars", title2: "Episode III: Revenge of the Sith", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "", backgroundPos: "40% 60%",  pic: "../assets/ASSETS/SW3.png"},
      {title: "Star Wars", title2: "Episode IV: A New Hope", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/SW4.png"},
      {title: "Star Wars", title2: "Episode V: The Empire Strikes Back", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "", backgroundPos: "0% 60%",  pic: "../assets/ASSETS/SW5.png"},
      {title: "Star Wars", title2: "Episode VI: Return of the Jedi", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "", backgroundPos: "40% 60%",  pic: "../assets/ASSETS/SW6.png"},
      {title: "Star Wars", title2: "Episode VII: The Force Awakens", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/SW7.png"},
      {title: "Star Wars", title2: "Episode VIII: The Last Jedi", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "", backgroundPos: "0% 60%",  pic: "../assets/ASSETS/SW8.png"},
      {title: "Star Wars", title2: "Episode IX: The Rise of Skywalker", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "", backgroundPos: "40% 60%",  pic: "../assets/ASSETS/SW9.png"},
      {title: "The Matrix", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/M1.png"},
      {title: "The Matrix", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/M2.png"},
      {title: "The Matrix", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/M3.png"},
      {title: "Star Trek", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/ST1.png"},
      {title: "Star Trek", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/ST2.png"},
      {title: "Men In Black", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/MIB1.png"},
      {title: "Men In Black", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/MIB2.png"},
      {title: "Men In Black", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/MIB3.png"},
      {title: "Alien", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AL1.png"},
      {title: "Alien", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AL2.png"},
      {title: "Alien", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AL3.png"},
      {title: "Alien", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AL4.png"},
      {title: "Alien", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AL5.png"},
      {title: "Alien", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/AL6.png"},
      {title: "Planet of the Apes", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/POA1.png"},
      {title: "Planet of the Apes", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/POA2.png"},
      {title: "Planet of the Apes", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/POA3.png"},
      {title: "The Mummy", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TM1.png"},
      {title: "The Mummy", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TM2.png"},
      {title: "The Mummy", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TM4.png"},
      {title: "Transformers", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TF1.png"},
      {title: "Transformers", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TF2.png"},
      {title: "Transformers", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TF3.png"},
      {title: "Transformers", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/TF4.png"},
      {title: "Jurassic Park", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JP1.png"},
      {title: "Jurassic Park", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JP2.png"},
      {title: "Jurassic Park", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JP3.png"},
      {title: "Jurassic Park", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JP4.png"},
      {title: "Jurassic Park", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/JP5.png"},
  
  

//action
      {title: "", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/.png"},

//comicbook
      {title: "", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/.png"},
//drama

      {title: "", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/.png"},

    //criticallyAcclaimed 
      {title: "", title2: "", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "../assets/ASSETS/.png"},
  

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

  FilterDrama(){
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
