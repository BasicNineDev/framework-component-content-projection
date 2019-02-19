import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- 싱글 슬롯 컨텐트 프로젝션 -->
    <single-content-projection>
      <strong>Single-slot</strong>
      <i>Content projection</i>
    </single-content-projection>
    
    <!-- 멀티 슬롯 콘텐트 프로젝션-->
    <multi-content-projection>
      <footer>Footer</footer>
      <header>Header content </header>
      <section>Section Content</section>
      <div class="my-class">div with .my-class</div>
    </multi-content-projection>
  `,
  styles: []
})
export class AppComponent {
  title = 'framework-component-content-projection';
}
