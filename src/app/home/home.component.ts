import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from '@core/material/theme.service';
import { Subscription } from 'rxjs';
import { HomeConstant } from './home.constant';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    /**
     * Holds all subscriptions handled by this class to unsubscribed on class destroy.
     */
    private subscriptions: Subscription = new Subscription();

    /**
     * Source value from assets used for displaying an 'under construction' image.
     */
    constructionImage: string;

    constructor(private themeService: ThemeService) {}

    ngOnInit(): void {

        // subscribe to theme changes to change light/dark construction image
        this.subscriptions.add(this.themeService.isDark.subscribe(t => this.setConstructionImage(t)));
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    private setConstructionImage(isDarkTheme: boolean): void {
        this.constructionImage = isDarkTheme
            ? HomeConstant.IMG_CONSTRUCTION.DARK
            : HomeConstant.IMG_CONSTRUCTION.LIGHT;
    }
}
