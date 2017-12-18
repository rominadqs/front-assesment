import { Injectable } from '@angular/core';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';

@Injectable()
export class ConfigService {
  snackConfig = new MatSnackBarConfig();
  apiUrl = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';
  httpCacheDuration = 1000; // 1 seconds
  httpDelay = 10; // http delay

  constructor() {
    this.snackConfig.duration = 2500;
    this.snackConfig.extraClasses = ['snack'];
  }
}
