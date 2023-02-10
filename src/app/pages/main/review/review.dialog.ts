import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Movie } from 'src/app/interfaces/movie';

@Component({
    selector: 'review-movie',
    templateUrl: 'review.dialog.html',
    styleUrls: ['review.dialog.scss']
})
export class MovieDialog {
    movie: Movie;
    constructor(
        public dialogRef: MatDialogRef<MovieDialog>,
        @Inject(MAT_DIALOG_DATA) public data: Movie,
    ) {
        this.movie = data;

    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}