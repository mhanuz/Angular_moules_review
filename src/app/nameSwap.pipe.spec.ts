import { NameSwapPipe } from './nameSwap.pipe';

describe('ItalicPipe', () => {
  it('create an instance', () => {
    const pipe = new NameSwapPipe();
    expect(pipe).toBeTruthy();
  });
});
