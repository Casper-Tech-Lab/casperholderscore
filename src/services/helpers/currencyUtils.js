/**
 * CurrencyUtils class
 * Used to convert from/to casper/motes
 */
import {BigNumber} from "ethers";
import Big from "big.js";


export class CurrencyUtils {

    /**
     * Convert motes to casper
     *
     * @param {BigNumber} motesAmount - Amount in motes
     * @return {String}
     */
    static convertMotesToCasper(motesAmount) {
        return Big(motesAmount.toString()).div(1000000000).toString();
    }

    /**
     * Convert casper to motes
     *
     * @param {String} casperAmount - Amount in casper
     * @return {BigNumber}
     */
    static convertCasperToMotes(casperAmount) {
        return BigNumber.from(Big(casperAmount).times(1000000000).toString());
    }
}