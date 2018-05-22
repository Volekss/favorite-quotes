export class SettingsService {
  private altBackground = false;

  public setBackground(isAlt: boolean) {
    this.altBackground = isAlt;
  }
  public isAltBackground() {
    return this.altBackground;
  }
}
