interface BrowserParse {
  readonly browser: string;
  readonly device: string;
  readonly engine: string;
  readonly language: string;
  readonly os: string;
  readonly osVersion: string;
  readonly version: string;
}

declare const BrowserParse: {
  new (): BrowserParse;
};

export = BrowserParse;
