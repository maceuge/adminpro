import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  pageTitle: string = '';

  constructor(private router: Router,
              private title: Title,
              private meta: Meta) {

    this.getDataRoute().subscribe( event => {
      this.pageTitle = event.titulo;
      this.title.setTitle(this.pageTitle);

      const metaTag: MetaDefinition = {
          name: 'description',
          content: this.pageTitle
      };
      this.meta.addTag(metaTag);
    });
  }

  ngOnInit() {}

  getDataRoute () {
    return this.router.events.pipe(  
      filter( evento => evento instanceof ActivationEnd),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map ( (evento: ActivationEnd) => evento.snapshot.data)
    );
  }

}
