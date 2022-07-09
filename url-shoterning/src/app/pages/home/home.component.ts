import { UrlService } from './../../services/url.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  urls: any[] = [];
  emitFinishLoading!: number;
  constructor(private urlService: UrlService) {}

  ngOnInit(): void {
    this.emitFinishLoading = 0;
  }

  getUrlShortening(url: string) {
    this.urlService.getUrl(url).subscribe((res) => {
      this.emitFinishLoading += 1;
      if(this.urls.length >= 4) this.urls.unshift(res);
       else {
        this.urls.push(res);
      }
    });
  }
  copyUrl(urlCopyed: any){
    urlCopyed.select();
  }
}
