import { Component } from '@angular/core';
import { blogs, contact, education, experience, hero, leadership, projects, skills } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hero = hero;
  skills = skills;
  experience = experience;
  projects = projects;
  education = education;
  leadership = leadership;
  blogs = blogs;
  contact = contact;
}
