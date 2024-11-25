import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TitleComponent],
  template: `
  <app-title [title]="currentFramework()"/>

  <pre> {{ frameworkasSignal() }}</pre>
  <pre> {{ frameworkasProperty }}</pre>
  `,
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change detection - ${ this.frameworkasSignal().name }`
  );

  public frameworkasSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  public frameworkasProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor(){
    setTimeout( () => {

      //this.frameworkasProperty.name = 'React';

      this.frameworkasSignal.update( value => ({
        ...value,
        name: 'React'
      }))
    console.log('Hecho');}, 3000)
  }
}
