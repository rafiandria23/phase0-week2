/**
 * HACKTIV8 Phase 0 - Menggunakan Switch Case
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
 */





 function konversiMenit(menit) {
    var jam = Math.floor(menit / 60);
    var menitSisa = menit % 60;

    if (menit < 60 && menit > 10) {
        return `0:${menit}`;
    } else if (menit < 60 && menit < 10) {
        return `0:0${menit}`;
    } else if (menit > 60 && menitSisa < 10) {
        return `${jam}:0${menitSisa}`;
    } else if (menit > 60 && menitSisa > 10) {
        return `${jam}:${menitSisa}`;
    } else {
        return 'Please provide the minutes.';
    }

    /**
     * I got undefined after the result, when using switch case, but I'll leave it as comment anyway.
     */

    // switch (true) {
    //     case (menit < 60 && menit > 10):
    //         console.log(`0:${menit}`);
    //         break;
    //     case (menit < 60 && menit < 10):
    //         console.log(`0:0${menit}`);
    //         break;
    //     case (menit > 60 && menitSisa < 10):
    //         console.log(`${jam}:0${menitSisa}`);
    //         break;
    //     case (menit > 60 && menitSisa > 10):
    //         console.log(`${jam}:${menitSisa}`);
    //         break;
    //     default:
    //         console.log('Please provide the minutes.');
    //         break;
    // }
 }

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00