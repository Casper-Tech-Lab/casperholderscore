import {CurrencyUtils} from "../src";
import { BigNumber } from '@ethersproject/bignumber';

test('Convert casper to motes', () => {
    expect(CurrencyUtils.convertCasperToMotes("1").eq(BigNumber.from(1000000000))).toBe(true);
});

test('Convert casper decimals to motes', () => {
    expect(CurrencyUtils.convertCasperToMotes("1.5").eq(BigNumber.from(1500000000))).toBe(true);
});


test('Convert motes to casper', () => {
    expect(CurrencyUtils.convertMotesToCasper(BigNumber.from(1000000000))).toEqual("1");
});

test('Convert motes to casper decimals', () => {
    expect(CurrencyUtils.convertMotesToCasper(BigNumber.from(1500000000))).toEqual("1.5");
});
