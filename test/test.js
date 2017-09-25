const expect = require('chai').expect;

const aritGeo = require('../app/aritGeo.js').aritGeo;

describe('Array', () => {
    //test code
    let arr1 = [2,4,6,8,10];
    let chk1 = (arr1[0])? arr1[0].toString() : '';
    for (i=1; i<arr1.length; i++) chk1 = chk1 + ',' + (arr1[i]? arr1[i].toString() : '');
    it('[' + chk1 + '] should be an Arithmetic progression', () => {
        expect(aritGeo(arr1)).to.equal("Arithmetic");
    });

    let arr2 = [2,4,8,16,32];
    let chk2 = (arr2[0])? arr2[0].toString() : '';
    for (i=1; i<arr2.length; i++) chk2 = chk2 + ',' + (arr2[i]? arr2[i].toString() : '');
    it('[' + chk2 + '] should be a Geometric progression', () => {
        expect(aritGeo(arr2)).to.equal("Geometric");
    });

    let arr3 = [6,4,6,8,10];
    let chk3 = (arr3[0])? arr3[0].toString() : '';
    for (i=1; i<arr3.length; i++) chk3 = chk3 + ',' + (arr3[i]? arr3[i].toString() : '');
    it('[' + chk3 + '] should return -1', () => {
        return expect(aritGeo(arr3)).to.equal(-1);
    });

    let arr4 = [];
    let chk4 = (arr4[0])? arr4[0].toString() : '';
    for (i=1; i<arr4.length; i++) chk4 = chk4 + ',' + (arr4[i]? arr4[i].toString() : '');
    it('[' + chk4 + '] should 0', () => {
        return expect(aritGeo(arr4)).to.equal(0);
    });

    let arr5 = [,,,,,,];
    let chk5 = (arr5[0])? arr5[0].toString() : '';
    for (i=1; i<arr5.length; i++) chk5 = chk5 + ',' + (arr5[i]? arr5[i].toString() : '');
    it('[' + chk5 + '] should return 0', () => {
        return expect(aritGeo(arr5)).to.equal(0);
    });

    let arr6 = [5,5,5,5,5,5,5];
    let chk6 = (arr6[0])? arr6[0].toString() : '';
    for (i=1; i<arr6.length; i++) chk6 = chk6 + ',' + (arr6[i]? arr6[i].toString() : '');
    it('[' + chk6 + '] should be an Arithmetic progression', () => {
        return expect(aritGeo(arr6)).to.equal("Arithmetic");
    });

    let arr7 = [2,4];
    let chk7 = (arr7[0])? arr7[0].toString() : '';
    for (i=1; i<arr7.length; i++) chk7 = chk7 + ',' + (arr7[i]? arr7[i].toString() : '');
    it('[' + chk7 + '] should return -1', () => {
        return expect(aritGeo(arr7)).to.equal(-1);
    });

    let arr8 = ["2,4,6,8,10"];
    let chk8 = (arr8[0])? arr8[0].toString() : '';
    for (i=1; i<arr8.length; i++) chk8 = chk8 + ',' + (arr8[i]? arr8[i].toString() : '');
    it('[' + chk8 + '] should return -1', () => {
        return expect(aritGeo(arr8)).to.equal(-1);
    });

    let arr9 = [2,4,6,"Harry",10];
    let chk9 = (arr9[0])? arr9[0].toString() : '';
    for (i=1; i<arr9.length; i++) chk9 = chk9 + ',' + (arr9[i]? arr9[i].toString() : '');
    it('[' + chk9 + '] should return 0', () => {
        return expect(aritGeo(arr9)).to.equal(-1);
    });
    
    let arr10 = [2,4,6,true,10];
    let chk10 = (arr10[0])? arr10[0].toString() : '';
    for (i=1; i<arr10.length; i++) chk10 = chk10 + ',' + (arr10[i]? arr10[i].toString() : '');
    it('[' + chk10 + '] should return 0', () => {
        return expect(aritGeo(arr10)).to.equal(-1);
    });
})