import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent, CommonModule],
  template:`
    <app-title title="View Transition 2"/>

    <section class="flex justify-end">

    <img
      srcset="https://th.bing.com/th/id/OIP.jTC-bxjXMF5VDe5WCZK16gHaEK?rs=1&pid=ImgDetMain"
      alt="wow"
      width="200"
      height="300"
      style="view-transition-name: hero1"
      />

      <div
        class="fixed bottom-16 right-10 bg-blue-800 w-32 h-32 rounded"
        style="view-transition-name: hero2"
        ></div>

    </section>
  `,
})
export default class ViewTransitionComponent {

}
