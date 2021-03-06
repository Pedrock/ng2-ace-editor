import {Component, ViewChild} from '@angular/core';

declare var ace: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content = "SELECT * FROM tabs;";
  contentAutoUpdate = "SELECT * FROM autoUpdate;";
  myCode = "SELECT * FROM tabs;";
  @ViewChild('highlight') highlight;
  @ViewChild('editorInfinity') editorInfinity;

  onRuleChange(e) {
    console.log(e)
  }

  ngAfterViewInit() {
    var Range = ace.require('ace/range').Range

    this.highlight.getEditor().session.addMarker(
      new Range(0, 0, 2, 1), "myMarker", "fullLine"
    );

  }
}
