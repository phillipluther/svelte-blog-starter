import { describe, it, expect } from 'vitest';
import { getPageNameFromRoute, getSlugFromPath } from './index.js';

describe('getPageNameFromRoute', () => {
  it('title cases a slug', () => {
    expect(getPageNameFromRoute('some-slug-here')).toEqual('Some Slug Here');
  });

  it('only title cases the last directory of a route', () => {
    const longRoute = '/this/long/route/should-be-this';
    expect(getPageNameFromRoute(longRoute)).toEqual('Should Be This');
  });
});

describe('getSlugFromPath', () => {
  it('only returns the last dir from a route', () => {
    expect(getSlugFromPath('/some/path/with-a-slug')).toEqual('with-a-slug');
  });

  it('strips .md file extensions', () => {
    expect(getSlugFromPath('/some/path/with-a-slug.md')).toEqual('with-a-slug');
  });
});
